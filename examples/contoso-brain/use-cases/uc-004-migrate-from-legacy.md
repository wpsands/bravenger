---
title: "Migrate from Legacy ETL to Modern Stack"
use_case_id: "UC-004"
version: "1.0.0"
last_updated: "2026-03-22"
status: "validated"

personas:
  setup_by: "P-001"
  used_by:
    - "P-002"
    - "P-004"
  evaluated_by: "P-001"

icp_pain: "PAIN-1, PAIN-6"
current_alternative: "Stay on Informatica PowerCenter, Talend, or SSIS. Pay escalating license/maintenance costs. Run on-prem or in a VM that nobody wants to maintain. Accept that CI/CD, version control, and modern DevOps practices don't apply to data pipelines."
tools_involved:
  - "Informatica PowerCenter / IICS"
  - "Talend Open Studio / Talend Cloud"
  - "SQL Server Integration Services (SSIS)"
  - "On-prem or VM-hosted ETL servers"
  - "Contoso Pipelines (replacement)"
proof: "1 validated customer migrated 83 Informatica mappings to Contoso Pipelines over 10 weeks. 2 additional customers are in active migration from SSIS as part of Azure-to-cloud-native initiatives. No production customer has completed a full Talend migration yet — documented as a gap."

connected_use_cases:
  - "UC-001"
  - "UC-002"
---

# UC-004: Migrate from Legacy ETL to Modern Stack

## Trigger

A company on legacy ETL tooling hits a forcing function that makes the status quo untenable. The canonical trigger: **the legacy vendor's renewal or upgrade quote arrives, and it's 30-60% higher than the current contract — often coinciding with a mandate to move off on-prem infrastructure.**

Other trigger events:

- **Cloud migration initiative.** The company is moving from on-prem to AWS/Azure/GCP. The ETL server (a Windows VM running Informatica or SSIS) is one of the last workloads that hasn't been migrated, and the cloud team is pushing to decommission the data center.
- **End-of-support notice.** Informatica PowerCenter 10.x reaches end of extended support. Talend Open Studio's community edition stops receiving updates. SSIS on older SQL Server versions is no longer patched.
- **Hiring failure.** The team posts a "Senior Informatica Developer" role and gets zero qualified applicants in 90 days. The talent pool for legacy ETL tools is shrinking as engineers move to modern data stack technologies.
- **The last person who knows the system leaves.** The Informatica admin who's been maintaining the mappings for 7 years gives their notice. Their knowledge is in their head, not in documentation.
- **Acquisition or merger.** The acquiring company runs a modern stack and mandates that the acquired company's data infrastructure conform within 12 months.
- **Audit finding.** A security or compliance audit flags the legacy ETL server as a risk: unpatched OS, no access logging, credentials stored in plaintext config files, no version control for pipeline definitions.

The underlying pattern: **legacy ETL tools were the right choice 5-10 years ago. The business has outgrown them, and the cost of staying — in money, risk, and opportunity cost — now exceeds the cost of migrating.**

## Current State

Before migration, the company's ETL environment typically looks like this:

### Informatica Environment (most common legacy platform in prospect pipeline)
- **40-150 mappings** in Informatica PowerCenter, developed over 5-8 years.
- **On-prem server or AWS EC2 instance** running the Informatica domain. The server was provisioned in 2018 and has been patched intermittently.
- **License cost: $80,000-250,000/year** depending on edition and processor count. The last renewal included a 40% increase "due to updated licensing terms."
- **1-2 people** who understand the mappings. One is the original developer who's been with the company for 6 years. The other learned it from the first person and can handle basic maintenance but not complex changes.
- **No version control.** Mapping changes are made in the PowerCenter Designer GUI. "Versioning" is a folder called `mappings_backup_20250115`. The last backup is 3 months old.
- **No CI/CD.** Deployments to production are manual exports and imports through the PowerCenter admin console. There's no staging environment. Testing is "run it in dev and check the output."
- **Monitoring is the Informatica Workflow Monitor.** It shows green/red status per workflow. No integration with the team's alerting tools (PagerDuty, Slack). Nobody checks the Workflow Monitor proactively.

### Talend Environment
- **20-80 jobs** in Talend Open Studio or Talend Cloud.
- **Java-based jobs** that compile to JAR files. Some run on a dedicated server, others are deployed as microservices. The build process involves Maven, a Jenkins pipeline, and prayer.
- **License cost (Talend Cloud): $50,000-150,000/year.** Open Studio is free but unsupported and increasingly brittle with each Java version update.
- **Developer experience has degraded.** Talend's GUI-based development was innovative in 2015. In 2026, engineers expect config-driven workflows, CLI tooling, and Git-native development. Talend's approach feels dated.

### SSIS Environment
- **30-100 packages** in SQL Server Integration Services, tightly coupled to SQL Server on-prem.
- **Windows-only.** SSIS runs on Windows, managed through Visual Studio (SSDT) and SQL Server Agent. The data team's other tools run on Linux/macOS. SSIS is the odd one out.
- **Cloud migration blocker.** SSIS can run in Azure via Azure-SSIS Integration Runtime, but it's expensive ($800-3,000/mo for the IR alone) and still requires maintaining SSIS packages. It's a lift-and-shift, not a modernization.
- **License cost is bundled** with SQL Server Enterprise ($15,000/core/year) but the ETL workload is a significant driver of the SQL Server licensing footprint.

### Common across all legacy platforms:
- **Pipeline definitions are opaque.** They live in proprietary formats (Informatica XML, Talend metadata, SSIS .dtsx) that can't be reviewed in a standard code review tool, diffed in Git, or searched with grep.
- **No infrastructure-as-code.** The ETL environment itself (server config, scheduler settings, connection strings) is configured manually. Rebuilding the environment from scratch would take weeks.
- **Technical debt compounds silently.** Legacy mappings accumulate workarounds, hardcoded values, and undocumented business logic. Each one makes the eventual migration harder.

## Desired Outcome

After migration to Contoso Pipelines:

- **All pipelines defined as code.** Every pipeline is a YAML configuration file in a Git repository. Changes go through PRs. History is the commit log. Rollback is `git revert`. The entire pipeline estate can be searched, audited, and reviewed with standard developer tools.
- **CI/CD for data pipelines.** Pipeline changes are tested in a staging environment before production deployment. Contoso's CLI supports `contoso test` for local validation and `contoso deploy --env staging` for pre-production runs. No more manual exports and GUI-based deployments.
- **Cloud-native, no servers to manage.** Contoso Pipelines runs as a managed service. No EC2 instances, no Windows VMs, no patching, no capacity planning. The data team manages pipelines, not infrastructure.
- **Unified platform for old and new.** Legacy pipelines migrated to Contoso coexist with new pipelines on the same platform. The migration can be incremental — move 10 pipelines this sprint, 10 next sprint — without running two completely separate systems.
- **Modern developer experience.** CLI-first workflow, config-driven development, local testing, PR-based deployment, integrated observability. Engineers who joined the industry in the last 5 years can be productive immediately without learning a legacy tool.
- **Cost reduction: 40-70%.** Eliminating legacy license costs ($80,000-250,000/year for Informatica) and infrastructure costs (on-prem servers or cloud VMs). Contoso Pipelines pricing is usage-based, typically $2,000-8,000/month for the pipeline volume of a former Informatica/Talend/SSIS customer.
- **Knowledge distributed, not concentrated.** Pipeline definitions are readable YAML. Any engineer on the team can understand, modify, and debug any pipeline. The "only one person knows how this works" risk disappears.

## Why It Matters

- **Legacy ETL is a ticking clock.** The longer a company stays on Informatica/Talend/SSIS, the harder the migration becomes. Every new mapping added to the legacy system increases the migration scope. Every year the talent pool shrinks. Every renewal the vendor has more leverage.
- **Cloud migration is the forcing function.** 78% of mid-market companies are actively migrating to cloud or have completed migration (Flexera 2025 State of the Cloud Report). Data pipelines are often the last workload to move because they're the most entangled. But "everything is in the cloud except the ETL server" is not a sustainable architecture.
- **Developer experience is a retention issue.** Data engineers choose jobs partly based on the tools they'll use. "You'll work with Contoso Pipelines, dbt, and Snowflake" attracts candidates. "You'll maintain Informatica PowerCenter mappings" does not. In a tight labor market, tooling choices are hiring choices.
- **Technical debt in legacy ETL is invisible until it's catastrophic.** Legacy mappings accumulate business logic that nobody documents. When the original developer leaves and a mapping breaks, the team discovers that a critical revenue calculation has been hardcoded into an Informatica expression transformation for 4 years. Migration is the forcing function to document and rationalize this logic.

## Gotchas

- **Migration scope is always larger than estimated.** Every legacy ETL migration project in Contoso's experience has been 20-40% larger than the initial assessment. Hidden dependencies, undocumented business logic, and "oh, we also have these 15 jobs that run quarterly" are universal surprises. Build padding into the timeline.
- **Business logic extraction is the hard part.** Moving a simple source-to-destination pipeline is straightforward. Extracting the business logic embedded in Informatica Expression transformations, Talend tMap components, or SSIS Derived Column tasks — and reimplementing it correctly in Contoso's config layer or dbt — is where 60-70% of migration effort goes.
- **Parallel run period is non-negotiable.** The legacy system and Contoso must run side-by-side for 2-4 weeks per pipeline batch, with automated output comparison. Stakeholders need to see that the numbers match before the legacy system is decommissioned. This means *increased* cost during the migration window.
- **Legacy vendor contracts may have exit barriers.** Some Informatica and Talend contracts include early termination fees, multi-year commitments, or auto-renewal clauses that trigger if cancellation isn't submitted 90+ days before renewal. Review the contract before committing to a migration timeline.
- **SSIS migration has a Windows dependency.** SSIS packages sometimes call Windows-specific components: COM objects, .NET assemblies, Windows scheduled tasks. These dependencies need to be identified and replaced, not just the SSIS packages themselves.
- **Organizational change management matters.** The team's Informatica expert may see the migration as an existential threat to their role. Positioning them as the migration lead — the person whose deep knowledge of the legacy system is essential to a successful migration — prevents resistance and retains institutional knowledge.
- **Not all legacy pipelines should be migrated.** Some legacy pipelines are obsolete — they load data nobody uses, or they serve a system that's being decommissioned independently. The migration is an opportunity to prune. Expect to decommission 15-25% of legacy pipelines rather than migrate them.

## Brain Gaps

- **No legacy-to-Contoso mapping equivalence guide.** Sales and CS need a document that maps Informatica/Talend/SSIS concepts to Contoso equivalents. "Your Informatica mapping is a Contoso pipeline config. Your Informatica session is a Contoso pipeline run. Your Informatica workflow is a Contoso pipeline group." This translation layer is critical for customer conversations.
- **No migration assessment template.** A structured questionnaire for pre-sales: How many mappings/jobs/packages? What source/destination types? What business logic complexity? What's the contract renewal date? This would standardize sales qualification for migration deals.
- **No Talend migration case study.** The proof field notes that no customer has completed a full Talend migration. This is a gap for both product (is the Talend-to-Contoso path fully supported?) and sales (can we credibly sell Talend migration?).
- **No legacy connector coverage analysis.** Legacy ETL tools often connect to older systems (mainframes, AS/400, on-prem Oracle, SAP). Does Contoso's connector library cover these legacy destinations? The Brain doesn't document legacy system connector support.
- **No cost comparison model.** The "40-70% cost reduction" claim needs a documented model: legacy license cost + infrastructure cost + engineering maintenance time vs. Contoso subscription + migration cost (one-time). Sales needs this as a calculator, not a claim.
- **No migration timeline benchmarks.** "How long will this take?" is the first question every prospect asks. The Brain should document benchmarks: X mappings of Y complexity typically takes Z weeks. Without this, sales and CS set expectations ad hoc.

## Persona-Specific Angles

### P-001: CTO / VP Engineering
The executive sponsor. They care about: total cost (license savings, infrastructure decommissioning, one-time migration cost vs. ongoing savings), risk (can we do this without breaking production data flows?), timeline (does this fit within our cloud migration plan?), and strategic positioning (are we building a modern data stack or maintaining legacy?). The CTO often frames this as a cloud migration workstream, not a standalone data project. They evaluate success by: legacy system fully decommissioned, cost reduction realized, and no data incidents during migration.

### P-002: VP of Data Engineering
The migration owner. They care about: migration tooling (does Contoso provide automated mapping conversion, or is it manual rewrite?), parallel run support (can we validate output equivalence automatically?), team capacity (can my team do this alongside their regular work, or do we need to pause feature development?), and connector coverage (does Contoso support every source and destination we currently connect to?). The VP of Data Eng has the deepest anxiety about this use case — they're accountable if the migration fails, and they've likely seen or heard of failed ETL migrations at previous companies.

### P-003: Head of Product / Analytics
Minimal involvement during migration but cares deeply about the outcome. Their concern: "Will my data be disrupted during the migration? Will reports break? Will I lose historical data?" They need assurance that the parallel run period means zero impact to their dashboards and analyses. Post-migration, they evaluate success the same way as UC-001: data arrives faster and more reliably than before.

### P-004: Data Engineer (IC)
The person doing the migration work. They care about: tooling quality (is there a Contoso CLI command that converts an Informatica XML mapping to a Contoso YAML config, or do I rewrite everything by hand?), documentation (is the mapping equivalence guide clear and complete?), and career impact (does "led migration from Informatica to Contoso Pipelines" look good on a resume? — yes, it does). The IC with legacy expertise should be positioned as the migration lead. Their deep knowledge of the legacy system's quirks, undocumented business logic, and edge cases is irreplaceable during migration.

## Connected Use Cases

- **UC-001: Consolidate Fragmented Data Pipelines.** UC-004 is a specific variant of UC-001 where the "fragmentation" is dominated by a single legacy platform rather than a mix of modern tools. Some customers do both: migrate off Informatica (UC-004) while also consolidating custom scripts and cron jobs (UC-001). The discovery process should explore both dimensions.
- **UC-002: Get Pipeline Observability Without Building It.** Legacy ETL tools have primitive monitoring. Migration to Contoso delivers modern observability as a side effect. For prospects whose legacy monitoring is a significant pain point, UC-002 can be the emotional hook even when UC-004 is the actual project: "Not only will you modernize your pipelines, you'll finally have visibility into them."
