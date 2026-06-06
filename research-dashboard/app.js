const state = {
  data: null,
  grantsData: { meta: {}, grants: [] },
  phdsData: { meta: {}, theses: [] },
  tab: "overview",
  fteOnly: false,
  recentOnly: false,
  networkAipFilter: "all",
  networkExternal: true,
  search: "",
  aipFilter: "all",
  journalSort: "pubs",
  expertiseSearch: "",
  selectedStaffId: "",
};

const els = {};

const EXPERTISE_FAMILIES = [
  ["teams and groups", ["team", "teams", "group", "groups", "teamwork", "small group", "work group", "project team", "team performance", "team effectiveness"]],
  ["collaboration and coordination", ["collaboration", "coordination", "cooperation", "cooperative", "collaborative", "interdependence", "collective action", "coordination failure"]],
  ["multiple team membership", ["multiple team membership", "multiteam", "multi team", "interteam", "team boundary", "boundary crossing", "membership change"]],
  ["intergroup relations", ["intergroup", "between groups", "group conflict", "outgroup", "ingroup", "social categorization", "faultline", "group identity"]],
  ["leadership", ["leader", "leaders", "leadership", "supervisor", "supervision", "managerial leadership", "directive leadership", "leader behavior"]],
  ["shared leadership", ["shared leadership", "distributed leadership", "collective leadership", "team leadership", "leadership sharing"]],
  ["power and hierarchy", ["power", "hierarchy", "dominance", "authority", "control", "influence", "asymmetry", "power distance"]],
  ["status and prestige", ["status", "prestige", "rank", "standing", "recognition", "reputation", "social status"]],
  ["governance and boards", ["governance", "board", "boards", "director", "directors", "ceo", "top management team", "upper echelon", "supervisory board", "corporate governance"]],
  ["creativity", ["creativity", "creative", "idea generation", "brainstorming", "creative process", "team creativity", "radical creativity"]],
  ["innovation", ["innovation", "innovative", "new product", "research and development", "r&d", "exploration", "exploitation", "knowledge creation"]],
  ["decision making", ["decision", "decision making", "judgment", "choice", "risk taking", "uncertainty", "problem solving", "information processing"]],
  ["ethics and morality", ["ethics", "ethical", "unethical", "moral", "morality", "moral judgment", "moral decision", "misconduct", "fraud", "corruption"]],
  ["trust and distrust", ["trust", "distrust", "trustworthiness", "suspicion", "betrayal", "confidence", "psychological contract"]],
  ["prosocial behavior", ["prosocial", "helping", "altruism", "generosity", "cooperation", "charity", "social value", "public good"]],
  ["negotiation and bargaining", ["negotiation", "bargaining", "deal", "agreement", "conflict resolution", "settlement", "mediation"]],
  ["conflict", ["conflict", "relationship conflict", "task conflict", "tension", "disagreement", "dispute", "friction"]],
  ["stress and strain", ["stress", "strain", "burnout", "exhaustion", "emotional exhaustion", "role conflict", "role ambiguity", "threat", "pressure", "workload", "demands", "tension"]],
  ["occupational health", ["occupational health", "health", "sick leave", "absenteeism", "illness", "medical", "rehabilitation", "work ability"]],
  ["wellbeing", ["wellbeing", "well-being", "work engagement", "engagement", "satisfaction", "happiness", "flourishing", "need satisfaction"]],
  ["recovery and leisure", ["recovery", "leisure", "vacation", "break", "detachment", "relaxation", "sleep", "after work", "off job"]],
  ["job crafting", ["job crafting", "crafting", "task crafting", "relational crafting", "cognitive crafting", "resource crafting"]],
  ["work design", ["work design", "job design", "autonomy", "job demands", "job resources", "flexibility", "work arrangement", "workplace design"]],
  ["remote and hybrid work", ["remote work", "hybrid work", "virtual work", "telework", "distributed work", "online collaboration", "digital work"]],
  ["motivation and goals", ["motivation", "goal", "goals", "needs", "incentive", "self determination", "achievement", "goal setting"]],
  ["emotions and affect", ["emotion", "emotions", "affect", "mood", "anger", "fear", "anxiety", "emotional", "affective"]],
  ["work-family and roles", ["work family", "work-family", "family work", "role conflict", "multiple roles", "role proximity", "role transition", "role ambiguity"]],
  ["identity and belonging", ["identity", "belonging", "self", "self relevance", "social identity", "collective identity", "identification", "belong"]],
  ["stereotypes and bias", ["stereotype", "bias", "prejudice", "discrimination", "implicit bias", "impostor", "stigma"]],
  ["gender and leadership", ["gender", "women", "female", "men", "male", "glass ceiling", "queen bee", "leadership diversity", "gender equality"]],
  ["diversity and inclusion", ["diversity", "inclusion", "dei", "representation", "minority", "multicultural", "inclusive", "demographic diversity"]],
  ["justice and fairness", ["justice", "fairness", "procedural justice", "distributive justice", "interactional justice", "equity", "inequality"]],
  ["voice and silence", ["voice", "employee voice", "silence", "speaking up", "whistleblowing", "suggestions", "participation"]],
  ["psychological safety", ["psychological safety", "safety climate", "speak up", "interpersonal risk", "safe climate"]],
  ["learning and feedback", ["learning", "feedback", "development", "training", "expertise development", "knowledge sharing", "reflection"]],
  ["careers and employability", ["career", "careers", "employability", "career success", "career transition", "promotion", "labor market", "labour market"]],
  ["performance management", ["performance", "job performance", "task performance", "contextual performance", "productivity", "performance appraisal", "performance management"]],
  ["people management practices", ["hr practices", "human resource practices", "human resource management", "personnel practices", "workforce management", "talent management", "strategic hrm"]],
  ["selection and recruitment", ["selection", "recruitment", "hiring", "personnel selection", "assessment", "interview", "candidate", "talent acquisition"]],
  ["social networks", ["social network", "networks", "network centrality", "social exchange", "relational", "ties", "tie strength"]],
  ["competition", ["competition", "competitive", "contest", "rivalry", "compete", "tournament", "rank competition"]],
  ["crisis and resilience", ["crisis", "resilience", "disruption", "adaptation", "threat", "emergency", "coping", "recovery after crisis"]],
  ["technology and AI", ["technology", "digital", "algorithm", "artificial intelligence", "ai", "automation", "platform", "information system"]],
  ["entrepreneurship", ["entrepreneur", "entrepreneurship", "startup", "venture", "founder", "new venture", "entrepreneurial"]],
  ["sustainability and csr", ["sustainability", "csr", "corporate social responsibility", "responsible business", "environmental responsibility", "sustainable"]],
  ["age and aging", ["age", "aging", "older worker", "retirement", "lifespan", "age diversity", "elderly"]],
];

const STOPWORDS = new Set([
  "a", "about", "all", "an", "and", "are", "as", "at", "between", "by", "for", "from", "how", "in", "into",
  "is", "it", "its", "of", "on", "or", "over", "the", "their", "this", "through", "to", "under", "when",
  "where", "why", "with", "within", "without", "work", "working", "study", "studies", "research",
]);

document.addEventListener("DOMContentLoaded", async () => {
  cacheElements();
  attachEvents();
  await loadData();
});

function cacheElements() {
  els.subtitle = document.getElementById("subtitle");
  els.footerMeta = document.getElementById("footer-meta");
  els.metrics = document.getElementById("metrics");
  els.journalTable = document.getElementById("journal-table");
  els.journalSort = document.getElementById("journal-sort");
  els.yearBars = document.getElementById("year-bars");
  els.aipBars = document.getElementById("aip-bars");
  els.categoryList = document.getElementById("category-list");
  els.grantList = document.getElementById("grant-list");
  els.grantNote = document.getElementById("grant-note");
  els.grantTable = document.getElementById("grant-table");
  els.phdList = document.getElementById("phd-list");
  els.phdNote = document.getElementById("phd-note");
  els.phdTable = document.getElementById("phd-table");
  els.expertiseSearch = document.getElementById("expertise-search");
  els.staffList = document.getElementById("staff-list");
  els.staffProfile = document.getElementById("staff-profile");
  els.staffTopics = document.getElementById("staff-topics");
  els.staffRelated = document.getElementById("staff-related");
  els.staffPublicationEye = document.getElementById("staff-publication-eye");
  els.staffPublicationTitle = document.getElementById("staff-publication-title");
  els.staffPublicationTable = document.getElementById("staff-publication-table");
  els.publicationTable = document.getElementById("publication-table");
  els.pubSearch = document.getElementById("pub-search");
  els.aipFilter = document.getElementById("aip-filter");
  els.fteToggle = document.getElementById("fte-toggle");
  els.recentToggle = document.getElementById("recent-toggle");
  els.networkAipFilter = document.getElementById("network-aip-filter");
  els.networkExternalToggle = document.getElementById("network-external-toggle");
  els.networkSvg = document.getElementById("network-svg");
  els.networkEmpty = document.getElementById("network-empty");
  els.networkTableWrap = document.getElementById("network-table-wrap");
}

function attachEvents() {
  document.querySelectorAll("[data-tab]").forEach((el) => {
    el.addEventListener("click", (event) => {
      event.preventDefault();
      setTab(el.dataset.tab);
    });
  });
  els.fteToggle.addEventListener("change", () => {
    state.fteOnly = els.fteToggle.checked;
    renderAll();
  });
  els.recentToggle.addEventListener("change", () => {
    state.recentOnly = els.recentToggle.checked;
    renderAll();
  });
  els.networkAipFilter.addEventListener("change", () => {
    state.networkAipFilter = els.networkAipFilter.value;
    renderNetwork();
  });
  els.networkExternalToggle.addEventListener("change", () => {
    state.networkExternal = els.networkExternalToggle.checked;
    renderNetwork();
  });
  els.pubSearch.addEventListener("input", () => {
    state.search = els.pubSearch.value.trim().toLowerCase();
    renderPublications();
  });
  els.aipFilter.addEventListener("change", () => {
    state.aipFilter = els.aipFilter.value;
    renderPublications();
  });
  els.journalSort.addEventListener("change", () => {
    state.journalSort = els.journalSort.value;
    renderOverview();
  });
  els.expertiseSearch.addEventListener("input", () => {
    state.expertiseSearch = els.expertiseSearch.value.trim();
    state.selectedStaffId = "";
    renderStaff();
  });
  els.staffList.addEventListener("click", (event) => {
    const button = event.target.closest("[data-staff-id]");
    if (!button) return;
    state.selectedStaffId = button.dataset.staffId;
    renderStaff();
  });
  window.addEventListener("resize", debounce(() => {
    if (state.tab === "network") renderNetwork();
  }, 180));
  window.addEventListener("hashchange", () => {
    const nextTab = location.hash.replace("#", "") || "overview";
    if (nextTab !== state.tab) setTab(nextTab);
  });
}

async function loadData() {
  try {
    const [response, grantsResponse, phdsResponse] = await Promise.all([
      fetch("data/dashboard-data.json"),
      fetch("data/grants.json").catch(() => null),
      fetch("data/phds.json").catch(() => null),
    ]);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    state.data = await response.json();
    if (grantsResponse?.ok) state.grantsData = await grantsResponse.json();
    if (phdsResponse?.ok) state.phdsData = await phdsResponse.json();
    const meta = state.data.meta;
    els.subtitle.textContent = "Publications, journal rankings, collaboration, grants, and PhD supervision.";
    els.footerMeta.textContent = "";
    setTab(location.hash.replace("#", "") || "overview");
    renderAll();
  } catch (error) {
    els.subtitle.textContent = `Could not load dashboard data: ${error.message}`;
  }
}

function setTab(tab) {
  state.tab = ["overview", "staff", "publications", "network", "grants", "phds"].includes(tab) ? tab : "overview";
  document.querySelectorAll(".nav-tab").forEach((btn) => btn.classList.toggle("on", btn.dataset.tab === state.tab));
  document.querySelectorAll("main > section").forEach((section) => {
    section.hidden = section.id !== `view-${state.tab}`;
  });
  history.replaceState(null, "", `#${state.tab}`);
  if (state.data) renderAll();
}

function renderAll() {
  renderOverview();
  renderStaff();
  renderPublications();
  renderNetwork();
  renderGrants();
  renderPhds();
}

function activePeople() {
  return state.data.people.filter((person) => !state.fteOnly || person.fte > 0.25);
}

function fteLabel() {
  return state.fteOnly ? "FTE > 25%" : "All supplied people";
}

function activePeopleSet() {
  return new Set(activePeople().map((person) => person.id));
}

function peopleById() {
  return new Map(state.data.people.map((person) => [person.id, person]));
}

function activePublications() {
  const ids = activePeopleSet();
  const [fromYear, toYear] = activeWindowYears();
  const filtered = state.data.publications.filter((pub) => (
    countedPublication(pub)
    && pub.matchedPeople.some((id) => ids.has(id))
    && (!fromYear || pub.year >= fromYear)
    && (!toYear || pub.year <= toYear)
  ));
  return dedupePublications(filtered);
}

function dedupePublications(pubs) {
  const groups = new Map();
  pubs.forEach((pub) => {
    const key = duplicatePublicationKey(pub);
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(pub);
  });
  return Array.from(groups.values()).map(mergePublicationGroup);
}

function duplicatePublicationKey(pub) {
  const normalizedTitle = normalizeSearchText(pub.title);
  if (normalizedTitle.length > 30) return `title:${normalizedTitle}`;
  if (pub.doi) return `doi:${String(pub.doi).toLowerCase().trim()}`;
  return `id:${pub.id}`;
}

function mergePublicationGroup(group) {
  if (group.length === 1) return group[0];
  const sorted = group.slice().sort(publicationPreferenceSort);
  const base = { ...sorted[0] };
  base.duplicateIds = group.map((pub) => pub.id);
  base.matchedPeople = uniqueFlat(group.map((pub) => pub.matchedPeople || []));
  base.sourcePeople = uniqueFlat(group.map((pub) => pub.sourcePeople || []));
  base.evidence = uniqueFlat(group.map((pub) => pub.evidence || []));
  base.authors = mergeAuthorLists(group);
  if (!base.doi) base.doi = group.find((pub) => pub.doi)?.doi || "";
  if (!isNumber(base.aip)) {
    const ranked = group.find((pub) => isNumber(pub.aip));
    if (ranked) {
      base.aip = ranked.aip;
      base.aipJournal = ranked.aipJournal;
      base.aipCategory = ranked.aipCategory;
      base.aipMatchMethod = ranked.aipMatchMethod;
    }
  }
  return base;
}

function publicationPreferenceSort(a, b) {
  const aipA = isNumber(a.aip) ? a.aip : -1;
  const aipB = isNumber(b.aip) ? b.aip : -1;
  if (aipB !== aipA) return aipB - aipA;
  if (Boolean(b.doi) !== Boolean(a.doi)) return Boolean(b.doi) - Boolean(a.doi);
  const sourceA = String(a.sourceType || "");
  const sourceB = String(b.sourceType || "");
  if (sourceA !== sourceB) {
    if (/repository|preprint/i.test(sourceA)) return 1;
    if (/repository|preprint/i.test(sourceB)) return -1;
  }
  return String(b.journal || "").length - String(a.journal || "").length;
}

function mergeAuthorLists(group) {
  const preferred = group.slice().sort((a, b) => (b.authors || []).length - (a.authors || []).length)[0]?.authors || [];
  const seen = new Set();
  const authors = [];
  [...preferred, ...group.flatMap((pub) => pub.authors || [])].forEach((author) => {
    const key = normalizeSearchText(author);
    if (!key || seen.has(key)) return;
    seen.add(key);
    authors.push(author);
  });
  return authors;
}

function uniqueFlat(groups) {
  return Array.from(new Set(groups.flat().filter(Boolean)));
}

function activeGrants() {
  const ids = activePeopleSet();
  return (state.grantsData?.grants || []).filter((grant) => (
    (grant.personIds || []).some((id) => ids.has(id))
  ));
}

function activeTheses() {
  const ids = activePeopleSet();
  return (state.phdsData?.theses || []).filter((thesis) => (
    (thesis.roles || []).some((role) => ids.has(role.personId))
  ));
}

function staffPublicationRecords(personId) {
  return activePublications().filter((pub) => pub.matchedPeople.includes(personId));
}

function staffGrantRecords(personId) {
  return activeGrants().filter((grant) => (grant.personIds || []).includes(personId));
}

function staffThesisRecords(personId) {
  return activeTheses().filter((thesis) => (thesis.roles || []).some((role) => role.personId === personId));
}

function staffEvidenceDocs(personId) {
  const pubs = staffPublicationRecords(personId).map((pub) => ({
    id: pub.id,
    type: "publication",
    year: pub.year,
    item: pub,
    text: [
      pub.title,
      pub.journal,
      pub.aipJournal,
      (pub.subjects || []).join(" "),
      (pub.evidence || []).join(" "),
    ].join(" "),
  }));
  const grants = staffGrantRecords(personId).map((grant) => ({
    id: grant.id,
    type: "grant",
    year: grant.year || 0,
    item: grant,
    text: [grant.scheme, grant.funder, grant.category, grant.title, grant.role].join(" "),
  }));
  const theses = staffThesisRecords(personId).map((thesis) => ({
    id: thesis.id,
    type: "phd",
    year: thesis.year || 0,
    item: thesis,
    text: [thesis.title, thesis.candidate, thesis.department, roleSummary(thesis, peopleById())].join(" "),
  }));
  return [...pubs, ...grants, ...theses];
}

function renderStaff() {
  if (!state.data || !els.staffList) return;
  const bundle = expertiseBundle(state.expertiseSearch);
  const rows = rankedStaff(bundle);
  const selected = ensureSelectedStaff(rows);
  renderStaffList(rows, bundle);
  renderStaffProfile(selected, bundle);
}

function rankedStaff(bundle) {
  const people = activePeople();
  const rows = people.map((person) => staffSearchStats(person, bundle));
  if (bundle.raw) {
    return rows
      .filter((row) => row.score > 0)
      .sort((a, b) => b.score - a.score || b.topicPubs - a.topicPubs || b.publications - a.publications || a.person.display.localeCompare(b.person.display));
  }
  return rows.sort((a, b) => b.publications - a.publications || b.highAip - a.highAip || a.person.display.localeCompare(b.person.display));
}

function staffSearchStats(person, bundle) {
  const pubs = staffPublicationRecords(person.id);
  const grants = staffGrantRecords(person.id);
  const theses = staffThesisRecords(person.id);
  const aipPubs = pubs.filter((pub) => isNumber(pub.aip));
  const docs = staffEvidenceDocs(person.id);
  const matchingDocs = bundle.raw ? docs
    .map((doc) => ({ ...doc, matchScore: scoreTextAgainstBundle(doc.text, bundle) }))
    .filter((doc) => doc.matchScore > 0)
    : [];
  return {
    person,
    publications: pubs.length,
    highAip: pubs.filter((pub) => isNumber(pub.aip) && pub.aip >= 95).length,
    meanAip: aipPubs.length ? aipPubs.reduce((sum, pub) => sum + pub.aip, 0) / aipPubs.length : null,
    grants: grants.length,
    phds: theses.length,
    score: matchingDocs.reduce((sum, doc) => sum + doc.matchScore, 0),
    topicPubs: matchingDocs.filter((doc) => doc.type === "publication").length,
    topicGrants: matchingDocs.filter((doc) => doc.type === "grant").length,
    topicPhds: matchingDocs.filter((doc) => doc.type === "phd").length,
    matchingDocs,
  };
}

function ensureSelectedStaff(rows) {
  if (!rows.length) {
    state.selectedStaffId = "";
    return null;
  }
  if (!state.selectedStaffId || !rows.some((row) => row.person.id === state.selectedStaffId)) {
    state.selectedStaffId = rows[0].person.id;
  }
  return rows.find((row) => row.person.id === state.selectedStaffId) || rows[0];
}

function renderStaffList(rows, bundle) {
  if (!rows.length) {
    els.staffList.innerHTML = `<div class="staff-empty">No staff matches for this expertise search.</div>`;
    return;
  }
  els.staffList.innerHTML = rows.map((row) => {
    const selected = row.person.id === state.selectedStaffId;
    const meta = bundle.raw
      ? `${row.topicPubs} matching pubs`
      : `${row.publications} pubs`;
    return `<button class="staff-row${selected ? " on" : ""}" type="button" data-staff-id="${escapeHtml(row.person.id)}">
      <span>
        <strong>${escapeHtml(row.person.display)}</strong>
        <em>${escapeHtml(row.person.name)}</em>
      </span>
      <span class="staff-row-meta">${escapeHtml(meta)}</span>
    </button>`;
  }).join("");
}

function renderStaffProfile(row, bundle) {
  if (!row) {
    els.staffProfile.innerHTML = `<div class="staff-empty">No profile selected.</div>`;
    els.staffTopics.innerHTML = "";
    els.staffRelated.innerHTML = "";
    setEmptyTable(els.staffPublicationTable, "No matching publications.");
    return;
  }
  const person = row.person;
  const queryStrip = bundle.raw ? `
    <div class="query-strip">
      <span>Matches for</span>
      <strong>${escapeHtml(bundle.raw)}</strong>
      <em>${escapeHtml(matchSummary(row))}</em>
    </div>
  ` : "";
  els.staffProfile.innerHTML = `
    <div class="staff-profile-head">
      <div>
        <p class="eye">${escapeHtml(person.display)}</p>
        <h3>${escapeHtml(person.name)}</h3>
      </div>
    </div>
    ${queryStrip}
    <div class="staff-metrics">
      ${staffMetric("Publications", row.publications)}
      ${staffMetric("AIP >= 95", row.highAip)}
      ${staffMetric("Mean AIP", isNumber(row.meanAip) ? row.meanAip.toFixed(1) : "NA")}
      ${staffMetric("Grants", row.grants)}
      ${staffMetric("PhDs", row.phds)}
    </div>
  `;
  renderStaffTopics(person.id);
  renderStaffRelated(person.id, bundle, row);
  renderStaffPublications(person.id, bundle, row);
}

function staffMetric(label, value) {
  return `<div class="staff-metric"><span>${escapeHtml(label)}</span><strong>${escapeHtml(String(value))}</strong></div>`;
}

function matchSummary(row) {
  const parts = [`${row.topicPubs} publication${row.topicPubs === 1 ? "" : "s"}`];
  if (row.topicGrants) parts.push(`${row.topicGrants} grant${row.topicGrants === 1 ? "" : "s"}`);
  if (row.topicPhds) parts.push(`${row.topicPhds} PhD${row.topicPhds === 1 ? "" : "s"}`);
  return parts.join(", ");
}

function renderStaffTopics(personId) {
  const signals = topicSignals(personId).slice(0, 12);
  if (!signals.length) {
    els.staffTopics.innerHTML = `<span class="small-muted">No topic signals in the current data window.</span>`;
    return;
  }
  els.staffTopics.innerHTML = signals.map((signal) => (
    `<span class="topic-chip">${escapeHtml(signal.label)} <b>${signal.count}</b></span>`
  )).join("");
}

function renderStaffRelated(personId, bundle, row) {
  let summaryPubs = staffPublicationRecords(personId);
  if (bundle.raw) {
    const matchingPubIds = new Set(row.matchingDocs.filter((doc) => doc.type === "publication").map((doc) => doc.id));
    summaryPubs = summaryPubs.filter((pub) => matchingPubIds.has(pub.id));
  }
  const journalItems = topStaffJournals(summaryPubs);
  const coauthorItems = topStaffCoauthors(personId, summaryPubs);
  const grants = staffGrantRecords(personId);
  const theses = staffThesisRecords(personId);
  let grantItems = grants.map((grant) => ({ type: grantDisplayLabel(grant), year: grant.year || "", title: grant.title, sourceUrl: grant.sourceUrl, sourceLabel: grant.sourceLabel }));
  let thesisItems = theses.map((thesis) => ({ type: "PhD", year: thesis.year || "", title: `${thesis.candidate}: ${thesis.title}`, sourceUrl: thesis.sourceUrl, sourceLabel: thesis.sourceLabel }));
  if (bundle.raw) {
    grantItems = row.matchingDocs
      .filter((doc) => doc.type === "grant")
      .map((doc) => ({
        type: grantDisplayLabel(doc.item),
        year: doc.year || "",
        title: doc.item.title,
        sourceUrl: doc.item.sourceUrl,
        sourceLabel: doc.item.sourceLabel,
      }));
    thesisItems = row.matchingDocs
      .filter((doc) => doc.type === "phd")
      .map((doc) => ({
        type: "PhD",
        year: doc.year || "",
        title: `${doc.item.candidate}: ${doc.item.title}`,
        sourceUrl: doc.item.sourceUrl,
        sourceLabel: doc.item.sourceLabel,
      }));
  }
  grantItems = grantItems.sort((a, b) => Number(b.year || 0) - Number(a.year || 0));
  thesisItems = thesisItems.sort((a, b) => Number(b.year || 0) - Number(a.year || 0));
  if (!journalItems.length && !coauthorItems.length && !grantItems.length && !thesisItems.length) {
    els.staffRelated.innerHTML = "";
    return;
  }
  els.staffRelated.innerHTML = [
    relatedSection(bundle.raw ? `Top journals matching "${bundle.raw}"` : "Top journals", journalItems),
    relatedSection(bundle.raw ? `Top coauthors matching "${bundle.raw}"` : "Top coauthors", coauthorItems),
    relatedSection(bundle.raw ? `Grants matching "${bundle.raw}"` : "Grants", grantItems),
    relatedSection(bundle.raw ? `PhD supervision matching "${bundle.raw}"` : "PhD supervision", thesisItems),
  ].join("");
}

function topStaffJournals(pubs) {
  const byJournal = new Map();
  pubs.forEach((pub) => {
    const journal = pub.aipJournal || pub.journal;
    if (!journal) return;
    if (!byJournal.has(journal)) {
      byJournal.set(journal, { journal, count: 0, aip: null, rankableJournal: pub.rankableJournal !== false });
    }
    const row = byJournal.get(journal);
    row.count += 1;
    if (isNumber(pub.aip)) row.aip = pub.aip;
    if (pub.rankableJournal === false) row.rankableJournal = false;
  });
  return Array.from(byJournal.values())
    .sort((a, b) => b.count - a.count || (b.aip || -1) - (a.aip || -1) || a.journal.localeCompare(b.journal))
    .slice(0, 6)
    .map((row) => ({
      type: `${row.count} ${row.count === 1 ? "pub" : "pubs"}`,
      year: "",
      title: `${row.journal}${isNumber(row.aip) ? ` (AIP ${row.aip.toFixed(1)})` : ""}`,
    }));
}

function topStaffCoauthors(personId, pubs) {
  const people = peopleById();
  const byCoauthor = new Map();
  pubs.forEach((pub) => {
    const seen = new Set();
    pub.matchedPeople.forEach((id) => {
      if (id === personId || !people.has(id)) return;
      const key = `roster:${id}`;
      if (seen.has(key)) return;
      seen.add(key);
      addCoauthorStat(byCoauthor, key, people.get(id).display, "roster", pub.id);
    });
    externalAuthorsForPublication(pub).forEach((author) => {
      const key = externalAuthorId(author);
      if (seen.has(key)) return;
      seen.add(key);
      addCoauthorStat(byCoauthor, key, externalAuthorLabel(author), "external", pub.id);
    });
  });
  return Array.from(byCoauthor.values())
    .map((row) => ({ ...row, count: row.pubIds.size }))
    .sort((a, b) => b.count - a.count || a.label.localeCompare(b.label))
    .slice(0, 8)
    .map((row) => ({
      type: `${row.count} shared`,
      year: "",
      title: `${row.label}${row.scope === "external" ? " (external)" : ""}`,
    }));
}

function addCoauthorStat(map, key, label, scope, pubId) {
  if (!map.has(key)) map.set(key, { key, label, scope, pubIds: new Set() });
  if (scope === "external" && betterExternalLabel(label, map.get(key).label)) map.get(key).label = label;
  map.get(key).pubIds.add(pubId);
}

function relatedSection(title, items) {
  if (!items.length) return "";
  return `<h3 class="sub-h2">${escapeHtml(title)}</h3>
    <div class="related-list related-list-separated">
      ${items.map((item) => `
        <div class="related-row">
          <span>${escapeHtml(item.type)} ${escapeHtml(item.year)}</span>
          <p>${escapeHtml(item.title)}</p>
          ${item.sourceUrl ? `<a class="source-link" href="${escapeHtml(item.sourceUrl)}" target="_blank" rel="noopener">${escapeHtml(item.sourceLabel || "Source")}</a>` : ""}
        </div>
      `).join("")}
    </div>`;
}

function grantDisplayLabel(grant) {
  const scheme = String(grant.scheme || "").trim();
  const funder = String(grant.funder || "").trim();
  if (/spinoza/i.test(scheme)) return "NWO Spinoza";
  if (/veni|vidi|vici/i.test(scheme) && /nwo/i.test(funder)) return `NWO ${scheme}`;
  if (/advanced grant|starting grant|consolidator grant|erc project/i.test(scheme) && /erc|european research council/i.test(funder)) return `ERC ${scheme}`;
  if (/nwo/i.test(funder) && scheme) return /^nwo/i.test(scheme) ? scheme : `NWO ${scheme}`;
  return scheme || funder || "Grant";
}

function renderStaffPublications(personId, bundle, row) {
  let pubs = staffPublicationRecords(personId).slice();
  if (bundle.raw) {
    const matchingPubIds = new Set(row.matchingDocs.filter((doc) => doc.type === "publication").map((doc) => doc.id));
    pubs = pubs.filter((pub) => matchingPubIds.has(pub.id));
    els.staffPublicationEye.textContent = "Expertise match";
    els.staffPublicationTitle.textContent = `Publications matching "${bundle.raw}"`;
  } else {
    els.staffPublicationEye.textContent = "Publications";
    els.staffPublicationTitle.textContent = "Publications";
  }
  pubs.sort((a, b) => b.year - a.year || (b.aip || -1) - (a.aip || -1));
  if (!pubs.length) {
    setEmptyTable(els.staffPublicationTable, bundle.raw ? "No publications match this query for this staff member." : "No publications for this staff member.");
    return;
  }
  const rows = pubs.map((pub) => [
    pub.year,
    publicationCell(pub),
    escapeHtml(pub.journal || "Unknown"),
    aipBadge(pub.aip, pub),
  ]);
  setTable(els.staffPublicationTable, ["Year", "Publication", "Journal", "AIP"], rows, [true, false, false, true]);
}

function topicSignals(personId) {
  const docs = staffEvidenceDocs(personId);
  return EXPERTISE_FAMILIES.map(([label, terms]) => {
    const bundle = bundleFromTerms(terms);
    const count = docs.filter((doc) => scoreTextAgainstBundle(doc.text, bundle) > 0).length;
    return { label, count };
  }).filter((signal) => signal.count > 0)
    .sort((a, b) => b.count - a.count || a.label.localeCompare(b.label));
}

function expertiseBundle(query) {
  const raw = query.trim();
  const normalized = normalizeSearchText(raw);
  const terms = new Map();
  tokenize(normalized).forEach((token) => addSearchTerm(terms, token, 1.35));
  const families = [];
  EXPERTISE_FAMILIES.forEach(([label, familyTerms]) => {
    const hit = familyTerms.some((term) => queryMatchesTerm(normalized, term));
    if (!hit) return;
    families.push(label);
    familyTerms.forEach((term) => addSearchTerm(terms, term, 0.9));
    addSearchTerm(terms, label, 1.1);
  });
  return { raw, normalized, terms: Array.from(terms.entries()), families };
}

function bundleFromTerms(sourceTerms) {
  const terms = new Map();
  sourceTerms.forEach((term) => addSearchTerm(terms, term, 1));
  return { raw: sourceTerms.join(" "), normalized: "", terms: Array.from(terms.entries()), families: [] };
}

function addSearchTerm(map, term, weight) {
  const normalized = normalizeSearchText(term);
  if (!normalized || STOPWORDS.has(normalized)) return;
  if (normalized.includes(" ")) {
    map.set(normalized, Math.max(map.get(normalized) || 0, weight));
    return;
  }
  const token = stemToken(normalized);
  if (!token || STOPWORDS.has(token)) return;
  map.set(token, Math.max(map.get(token) || 0, weight));
}

function queryMatchesTerm(queryText, term) {
  if (!queryText) return false;
  const normalized = normalizeSearchText(term);
  if (!normalized) return false;
  if (normalized.includes(" ") && queryText.includes(normalized)) return true;
  const queryTokens = new Set(tokenize(queryText));
  return tokenize(normalized).some((token) => queryTokens.has(token));
}

function scoreTextAgainstBundle(text, bundle) {
  if (!bundle.terms.length) return 0;
  const normalized = normalizeSearchText(text);
  const tokens = new Set(tokenize(normalized));
  let score = 0;
  bundle.terms.forEach(([term, weight]) => {
    if (term.includes(" ")) {
      if (normalized.includes(term)) score += weight * 2.5;
      return;
    }
    if (tokens.has(term)) score += weight;
  });
  return score;
}

function normalizeSearchText(value) {
  return String(value || "")
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function tokenize(value) {
  return normalizeSearchText(value)
    .split(" ")
    .map(stemToken)
    .filter((token) => token && !STOPWORDS.has(token));
}

function stemToken(token) {
  if (token.length > 5 && token.endsWith("ies")) return `${token.slice(0, -3)}y`;
  if (token.length > 5 && token.endsWith("ing")) return token.slice(0, -3);
  if (token.length > 4 && token.endsWith("ed")) return token.slice(0, -2);
  if (token.length > 3 && token.endsWith("s") && !token.endsWith("ss")) return token.slice(0, -1);
  return token;
}

function countedPublication(pub) {
  if (/acknowledg(e)?ment of ad hoc reviewers/i.test(String(pub.title || ""))) return false;
  if (pub.rankableJournal !== false) return true;
  const kind = String(pub.publicationKind || "").toLowerCase();
  return kind.includes("proceedings") && isNumber(pub.aip) && pub.aip > 90;
}

function renderOverview() {
  if (!state.data) return;
  const pubs = activePublications();
  const people = activePeople();
  const journals = aggregateJournals(pubs);
  const aipRankablePubs = pubs.filter((pub) => pub.rankableJournal !== false && isNumber(pub.aip));
  const highAip = pubs.filter((pub) => isNumber(pub.aip) && pub.aip >= 95);
  const meanAip = aipRankablePubs.length ? aipRankablePubs.reduce((sum, pub) => sum + pub.aip, 0) / aipRankablePubs.length : null;
  const years = publicationWindowYears();
  const avgPubsPersonYear = people.length && years ? pubs.length / people.length / years : null;
  const avgHighPersonYear = people.length && years ? highAip.length / people.length / years : null;

  els.metrics.innerHTML = [
    metric("Publications", pubs.length),
    metric("Mean AIP", isNumber(meanAip) ? meanAip.toFixed(1) : "NA"),
    metric("AIP >= 95", highAip.length),
    metric("Avg pubs/person/yr", isNumber(avgPubsPersonYear) ? avgPubsPersonYear.toFixed(2) : "NA"),
    metric("Avg >=95/person/yr", isNumber(avgHighPersonYear) ? avgHighPersonYear.toFixed(2) : "NA"),
  ].join("");

  renderJournalTable(journals);
  renderYearBars(pubs);
  renderAipBars(pubs);
  renderCategoryList(pubs);
  renderOverviewGrants(activeGrants());
  renderOverviewPhds(activeTheses());
}

function metric(label, value, sub = "") {
  return `<div class="metric">
    <p class="metric-label">${escapeHtml(label)}</p>
    <p class="metric-value">${escapeHtml(String(value))}</p>
    ${sub ? `<p class="metric-sub">${escapeHtml(sub)}</p>` : ""}
  </div>`;
}

function publicationWindowYears() {
  const [fromYear, toYear] = activeWindowYears();
  if (Number.isFinite(fromYear) && Number.isFinite(toYear) && toYear >= fromYear) return toYear - fromYear + 1;
  const years = new Set(activePublications().map((pub) => pub.year));
  return years.size;
}

function publicationWindowLabel() {
  return activeWindowLabel();
}

function activeWindow() {
  const meta = state.data?.meta || {};
  return state.recentOnly ? (meta.recentWindow || meta.publicationWindow || {}) : (meta.publicationWindow || {});
}

function activeWindowYears() {
  const window = activeWindow();
  const fromYear = Number(String(window.from || "").slice(0, 4));
  const toYear = Number(String(window.to || "").slice(0, 4));
  return [Number.isFinite(fromYear) ? fromYear : null, Number.isFinite(toYear) ? toYear : null];
}

function activeWindowLabel() {
  const [fromYear, toYear] = activeWindowYears();
  return fromYear && toYear ? `${fromYear}-${toYear}` : "All years";
}

function aggregateJournals(pubs) {
  const people = peopleById();
  const byJournal = new Map();
  pubs.forEach((pub) => {
    const name = pub.aipJournal || pub.journal || pub.publicationKind || "Unmatched journal";
    if (!byJournal.has(name)) {
      byJournal.set(name, {
        journal: name,
        count: 0,
        aip: pub.aip,
        category: journalTypeCategory(pub),
        rankableJournal: pub.rankableJournal !== false,
        people: new Set(),
        years: new Set(),
      });
    }
    const row = byJournal.get(name);
    row.count += 1;
    row.years.add(pub.year);
    if (isNumber(pub.aip)) row.aip = pub.aip;
    row.category = journalTypeCategory(pub);
    if (pub.rankableJournal === false) row.rankableJournal = false;
    pub.matchedPeople.forEach((id) => {
      if (people.has(id)) row.people.add(id);
    });
  });
  return Array.from(byJournal.values()).sort((a, b) => {
    if (state.journalSort === "pubs") {
      if (b.count !== a.count) return b.count - a.count;
      const aipA = isNumber(a.aip) ? a.aip : -1;
      const aipB = isNumber(b.aip) ? b.aip : -1;
      if (aipB !== aipA) return aipB - aipA;
      return a.journal.localeCompare(b.journal);
    }
    const aipA = isNumber(a.aip) ? a.aip : -1;
    const aipB = isNumber(b.aip) ? b.aip : -1;
    if (aipB !== aipA) return aipB - aipA;
    if (b.count !== a.count) return b.count - a.count;
    return a.journal.localeCompare(b.journal);
  });
}

function renderJournalTable(journals) {
  const people = peopleById();
  const rows = journals.slice(0, 40).map((journal, idx) => [
    idx + 1,
    `<span class="primary-text">${escapeHtml(journal.journal)}</span><br><span class="small-muted">${escapeHtml(journal.category || "Unmatched")}</span>`,
    aipBadge(journal.aip, journal),
    journal.count,
    Array.from(journal.people).map((id) => people.get(id)?.display || id).sort().join(", "),
  ]);
  setTable(els.journalTable, ["Rank", "Journal", "AIP", "Pubs", "Roster authors"], rows, [true, false, true, true, false]);
}

function renderYearBars(pubs) {
  const counts = countBy(pubs, (pub) => pub.year);
  const endYear = Math.max(2000, ...Array.from(counts.keys()).filter((year) => Number.isFinite(year)));
  const years = [];
  for (let year = 2000; year <= endYear; year += 1) years.push(year);
  const max = Math.max(1, ...years.map((year) => counts.get(year) || 0));
  els.yearBars.innerHTML = `<div class="year-histogram">
    ${years.map((year) => {
      const count = counts.get(year) || 0;
      const label = year === 2000 || year % 5 === 0 ? year : "";
      const height = count ? Math.max(8, (count / max) * 100) : 0;
      return `<span class="year-bar" title="${year}: ${count} publication${count === 1 ? "" : "s"}">
        <i style="height:${height}%"></i>
        <b>${escapeHtml(label)}</b>
      </span>`;
    }).join("")}
  </div>`;
}

function renderAipBars(pubs) {
  const bands = [
    ["AIP >= 95", (pub) => isNumber(pub.aip) && pub.aip >= 95],
    ["90-<95", (pub) => isNumber(pub.aip) && pub.aip >= 90 && pub.aip < 95],
    ["80-89", (pub) => isNumber(pub.aip) && pub.aip >= 80 && pub.aip < 90],
    ["< 80", (pub) => isNumber(pub.aip) && pub.aip < 80],
    ["Unmatched", (pub) => pub.rankableJournal !== false && !isNumber(pub.aip)],
  ];
  renderBars(els.aipBars, bands.map(([label, fn]) => [label, pubs.filter(fn).length]), String);
}

function renderCategoryList(pubs) {
  const categories = new Map();
  pubs.forEach((pub) => {
    const key = journalTypeCategory(pub);
    if (!categories.has(key)) categories.set(key, { count: 0, aips: [] });
    const row = categories.get(key);
    row.count += 1;
    if (isNumber(pub.aip)) row.aips.push(pub.aip);
  });
  const rows = Array.from(categories.entries())
    .map(([category, row]) => ({
      category,
      count: row.count,
      meanAip: row.aips.length ? row.aips.reduce((a, b) => a + b, 0) / row.aips.length : null,
    }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 8);
  els.categoryList.innerHTML = rows.map((row) => `
    <div class="list-row">
      <p class="list-title">${escapeHtml(row.category)}</p>
      <p class="list-meta">${row.count} publications${isNumber(row.meanAip) ? `, mean AIP ${row.meanAip.toFixed(1)}` : ""}</p>
    </div>
  `).join("");
}

function journalTypeCategory(pub) {
  const raw = String(pub.aipCategory || "").toUpperCase();
  const kind = String(pub.publicationKind || "").toLowerCase();
  if (raw.includes("PSYCHOLOGY") || raw.includes("PSYCHIATRY") || raw.includes("BEHAVIORAL SCIENCES")) return "Psychology";
  if (raw.includes("MANAGEMENT") || raw.includes("BUSINESS")) return "Management & Business";
  if (raw.includes("SOCIAL SCIENCES") || raw.includes("SOCIOLOGY") || raw.includes("SOCIAL ISSUES") || raw.includes("WOMENS STUDIES") || raw.includes("CRIMINOLOGY") || raw.includes("COMMUNICATION")) return "Social Sciences";
  if (raw.includes("PUBLIC ADMINISTRATION") || raw.includes("POLITICAL") || raw.includes("INTERNATIONAL RELATIONS") || raw.includes("URBAN") || raw.includes("GEOGRAPHY") || raw.includes("DEVELOPMENT STUDIES")) return "Public Policy & Administration";
  if (raw.includes("PUBLIC, ENVIRONMENTAL") || raw.includes("HEALTH") || raw.includes("MEDICINE") || raw.includes("NURSING") || raw.includes("REHABILITATION") || raw.includes("SPORT") || raw.includes("ERGONOMICS") || raw.includes("NUTRITION") || raw.includes("OTORHINOLARYNGOLOGY")) return "Health & Work";
  if (raw.includes("ECONOMICS") || raw.includes("FINANCE")) return "Economics & Finance";
  if (raw.includes("EDUCATION")) return "Education";
  if (raw.includes("COMPUTER") || raw.includes("INFORMATION SCIENCE") || raw.includes("ENGINEERING") || raw.includes("CONSTRUCTION")) return "Technology & Engineering";
  if (raw.includes("BIO") || raw.includes("NEURO") || raw.includes("EVOLUTIONARY")) return "Life Sciences";
  if (raw.includes("MULTIDISCIPLINARY")) return "Multidisciplinary";
  if (raw.includes("ENVIRONMENTAL")) return "Environment";
  if (kind.includes("book") || kind.includes("chapter") || kind.includes("conference")) return "Books & Chapters";
  if (kind.includes("repository") || kind.includes("preprint") || kind.includes("unknown") || kind.includes("out-of-scope")) return "Other";
  if (!raw || kind === "journal") return "Other";
  return titleCaseCategory(raw);
}

function titleCaseCategory(value) {
  return String(value).toLowerCase().replace(/\b[a-z]/g, (letter) => letter.toUpperCase()).replace(/\s*&\s*/g, " & ");
}

function renderOverviewGrants(grants) {
  if (!els.grantList) return;
  const people = peopleById();
  const rows = grants.slice().sort(sortGrants).slice(0, 5);
  if (!rows.length) {
    els.grantList.innerHTML = `<p class="small-muted">No source-backed grant records for the current staff filter.</p>`;
    return;
  }
  els.grantList.innerHTML = `
    ${rows.map((grant) => `
      <div class="grant-item">
        <p class="grant-kicker">${escapeHtml(formatYear(grant.year))} - ${escapeHtml(grant.scheme)}</p>
        <p class="grant-title">${escapeHtml(grant.title)}</p>
        <p class="grant-meta">${escapeHtml(grantStaff(grant, people))}</p>
      </div>
    `).join("")}
    <a class="grant-link" href="#grants">View all ${grants.length} sourced records</a>
  `;
}

function renderGrants() {
  if (!state.data || !els.grantTable) return;
  const people = peopleById();
  const grants = activeGrants().slice().sort(sortGrants);
  const note = state.grantsData?.meta?.sourceNote || "Initial source-backed grant list.";
  if (els.grantNote) els.grantNote.textContent = `${grants.length} records shown for ${fteLabel()}. ${note}`;
  const rows = grants.map((grant) => [
    formatYear(grant.year),
    grantStaff(grant, people),
    `<span class="primary-text">${escapeHtml(grant.scheme)}</span><br><span class="small-muted">${escapeHtml(grant.category || "")}</span>`,
    escapeHtml(grant.funder || ""),
    grantTitleCell(grant),
    escapeHtml(grant.amount || ""),
    sourceCell(grant),
  ]);
  setTable(els.grantTable, ["Year", "Staff", "Scheme", "Funder", "Project", "Amount", "Source"], rows, [true, false, false, false, false, false, false]);
}

function renderOverviewPhds(theses) {
  if (!els.phdList) return;
  const people = peopleById();
  const rows = theses.slice().sort(sortTheses).slice(0, 5);
  if (!rows.length) {
    els.phdList.innerHTML = `<p class="small-muted">No source-backed defended PhD records for the current staff filter.</p>`;
    return;
  }
  els.phdList.innerHTML = `
    ${rows.map((thesis) => `
      <div class="grant-item">
        <p class="grant-kicker">${escapeHtml(formatYear(thesis.year))} - ${escapeHtml(thesis.candidate)}</p>
        <p class="grant-title">${escapeHtml(thesis.title)}</p>
        <p class="grant-meta">${escapeHtml(roleSummary(thesis, people))}</p>
      </div>
    `).join("")}
    <a class="grant-link" href="#phds">View all ${theses.length} sourced records</a>
  `;
}

function renderPhds() {
  if (!state.data || !els.phdTable) return;
  const people = peopleById();
  const theses = activeTheses().slice().sort(sortTheses);
  const note = state.phdsData?.meta?.sourceNote || "Initial source-backed defended PhD list.";
  if (els.phdNote) els.phdNote.textContent = `${theses.length} records shown for ${fteLabel()}. ${note}`;
  const rows = theses.map((thesis) => [
    formatYear(thesis.year),
    escapeHtml(formatDefenseDate(thesis)),
    thesisCell(thesis),
    roleSummary(thesis, people),
    escapeHtml(thesis.department || ""),
    sourceCell(thesis),
  ]);
  setTable(els.phdTable, ["Year", "Defense", "Thesis", "Roster supervisor roles", "Area", "Source"], rows, [true, false, false, false, false, false]);
}

function thesisCell(thesis) {
  return `<span class="primary-text">${escapeHtml(thesis.title || "Untitled thesis")}</span><br>
    <span class="small-muted">${escapeHtml(thesis.candidate || "Unknown candidate")}, ${escapeHtml(thesis.institution || "")}</span>`;
}

function roleSummary(thesis, people) {
  return (thesis.roles || [])
    .map((role) => `${people.get(role.personId)?.display || role.personId} (${role.role || "Supervisor"})`)
    .sort()
    .join(", ");
}

function sortTheses(a, b) {
  const dateA = Date.parse(a.defenseDate || `${a.year || 0}-01-01`) || 0;
  const dateB = Date.parse(b.defenseDate || `${b.year || 0}-01-01`) || 0;
  if (dateB !== dateA) return dateB - dateA;
  return String(a.candidate || "").localeCompare(String(b.candidate || ""));
}

function grantTitleCell(grant) {
  const role = grant.role ? `<br><span class="small-muted">${escapeHtml(grant.role)}</span>` : "";
  return `<span class="primary-text">${escapeHtml(grant.title || "Untitled grant")}</span>${role}`;
}

function grantStaff(grant, people) {
  return (grant.personIds || [])
    .map((id) => people.get(id)?.display || id)
    .sort()
    .join(", ");
}

function sourceCell(grant) {
  if (!grant.sourceUrl) return `<span class="small-muted">not listed</span>`;
  return `<a class="source-link" href="${escapeHtml(grant.sourceUrl)}" target="_blank" rel="noopener">${escapeHtml(grant.sourceLabel || "Source")}</a>`;
}

function sortGrants(a, b) {
  const yearA = isNumber(a.year) ? a.year : -Infinity;
  const yearB = isNumber(b.year) ? b.year : -Infinity;
  if (yearB !== yearA) return yearB - yearA;
  const categoryA = grantCategoryRank(a.category);
  const categoryB = grantCategoryRank(b.category);
  if (categoryB !== categoryA) return categoryB - categoryA;
  return String(a.title || "").localeCompare(String(b.title || ""));
}

function grantCategoryRank(category) {
  const ranks = {
    "ERC grant": 5,
    "Talent scheme": 4,
    "Competitive project grant": 3,
    "Major prize funding": 2,
  };
  return ranks[category] || 1;
}

function formatYear(year) {
  return isNumber(year) ? String(year) : "Year n/a";
}

function formatDefenseDate(thesis) {
  if (!thesis.defenseDate) return "date n/a";
  const parsed = new Date(`${thesis.defenseDate}T00:00:00`);
  if (Number.isNaN(parsed.getTime())) return thesis.defenseDate;
  return parsed.toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" });
}

function renderBars(container, entries, labeler) {
  const max = Math.max(1, ...entries.map(([, value]) => value));
  container.innerHTML = entries.map(([label, value]) => `
    <div class="bar-row">
      <span>${escapeHtml(labeler(label))}</span>
      <span class="bar-track"><i class="bar-fill" style="width:${Math.max(4, (value / max) * 100)}%"></i></span>
      <span class="bar-count">${value}</span>
    </div>
  `).join("");
}

function renderPublications() {
  if (!state.data) return;
  const people = peopleById();
  let pubs = activePublications();
  if (state.search) {
    pubs = pubs.filter((pub) => {
      const haystack = [
        pub.title,
        pub.journal,
        pub.aipJournal,
        pub.authors.join(" "),
        pub.matchedPeople.map((id) => people.get(id)?.display || id).join(" "),
      ].join(" ").toLowerCase();
      return haystack.includes(state.search);
    });
  }
  pubs = pubs.filter((pub) => {
    if (state.aipFilter === "gte95") return isNumber(pub.aip) && pub.aip >= 95;
    if (state.aipFilter === "90-95") return isNumber(pub.aip) && pub.aip >= 90 && pub.aip < 95;
    if (state.aipFilter === "lt90") return isNumber(pub.aip) && pub.aip < 90;
    return true;
  });
  pubs = pubs.slice().sort((a, b) => b.year - a.year || (b.aip || -1) - (a.aip || -1));

  const rows = pubs.map((pub) => [
    pub.year,
    publicationCell(pub),
    escapeHtml(pub.journal || "Unknown"),
    aipBadge(pub.aip, pub),
    pub.matchedPeople.map((id) => people.get(id)?.display || id).sort().join(", "),
  ]);
  setTable(els.publicationTable, ["Year", "Publication", "Journal", "AIP", "Roster authors"], rows, [true, false, false, true, false]);
}

function publicationCell(pub) {
  const doi = pub.doi ? `<a class="doi" href="https://doi.org/${encodeURIComponent(pub.doi)}" target="_blank" rel="noopener">doi</a>` : "";
  return `<span class="primary-text">${escapeHtml(pub.title)}</span> ${doi}<br>
    <span class="small-muted">${escapeHtml(pub.authors.slice(0, 8).join(", "))}${pub.authors.length > 8 ? ", ..." : ""}</span>`;
}

function buildExternalCollaboration(pubs, activeIds) {
  const stats = new Map();
  const edgeMap = new Map();
  pubs.forEach((pub) => {
    const internalIds = [...new Set(pub.matchedPeople.filter((id) => activeIds.has(id)))].sort();
    if (!internalIds.length) return;
    const externalAuthors = externalAuthorsForPublication(pub);
    if (!externalAuthors.length) return;
    internalIds.forEach((id) => {
      externalAuthors.forEach((author) => {
        const target = externalAuthorId(author);
        const label = externalAuthorLabel(author);
        if (!stats.has(target)) stats.set(target, { id: target, label, pubIds: new Set(), strength: 0 });
        const stat = stats.get(target);
        if (betterExternalLabel(label, stat.label)) stat.label = label;
        stat.pubIds.add(pub.id);
        stat.strength += 1;
        const key = `${id}|${target}`;
        if (!edgeMap.has(key)) edgeMap.set(key, { source: id, target, count: 0, pubIds: [] });
        const edge = edgeMap.get(key);
        edge.count += 1;
        edge.pubIds.push(pub.id);
      });
    });
  });

  const selectedEdges = Array.from(edgeMap.values())
    .filter((edge) => edge.count >= 2)
    .sort((a, b) => b.count - a.count);
  const selectedIds = new Set(selectedEdges.map((edge) => edge.target));
  const labelIds = new Set();
  const edgesBySource = new Map();
  selectedEdges.forEach((edge) => {
    if (!edgesBySource.has(edge.source)) edgesBySource.set(edge.source, []);
    edgesBySource.get(edge.source).push(edge);
  });
  edgesBySource.forEach((sourceEdges) => {
    sourceEdges
      .slice()
      .sort((a, b) => b.count - a.count)
      .slice(0, 4)
      .forEach((edge) => labelIds.add(edge.target));
  });
  const ranked = Array.from(stats.values())
    .filter((node) => selectedIds.has(node.id))
    .map((node) => ({
      id: node.id,
      label: node.label,
      shortLabel: shortExternalLabel(node.label),
      count: node.pubIds.size,
      strength: node.strength,
      aggregate: false,
      priority: labelIds.has(node.id),
    }))
    .sort((a, b) => b.count - a.count || b.strength - a.strength || a.label.localeCompare(b.label));

  return {
    nodes: ranked,
    edges: selectedEdges,
  };
}

function externalAuthorsForPublication(pub) {
  const roster = state.data?.people || [];
  const authors = new Map();
  (pub.authors || []).forEach((rawAuthor) => {
    const author = canonicalExternalAuthor(rawAuthor);
    if (!author || authorIsRosterMember(author, roster)) return;
    authors.set(externalAuthorId(author), author);
  });
  return Array.from(authors.values());
}

function canonicalExternalAuthor(value) {
  const author = String(value || "").replace(/\s+/g, " ").trim();
  if (!author || /^anonymous$/i.test(author)) return "";
  return author;
}

function externalAuthorId(author) {
  const parts = externalAuthorParts(author);
  if (!parts.family) return `external:${normalizeSearchText(author)}`;
  return `external:${parts.family}|${parts.initials || "unknown"}`;
}

function externalAuthorLabel(author) {
  return canonicalExternalAuthor(author);
}

function externalAuthorParts(author) {
  const raw = canonicalExternalAuthor(author);
  const normalized = normalizeSearchText(raw);
  if (!normalized) return { family: "", initials: "" };
  const commaParts = raw.split(",");
  if (commaParts.length > 1) {
    const family = normalizeSearchText(commaParts[0]);
    const given = normalizeSearchText(commaParts.slice(1).join(" "));
    return { family, initials: initialsFromGivenText(given) };
  }
  const tokens = normalized.split(" ").filter(Boolean);
  if (!tokens.length) return { family: "", initials: "" };
  const particles = new Set(["de", "der", "van", "von", "den", "ten", "ter", "da", "di", "la", "le"]);
  let familyStart = tokens.length - 1;
  while (familyStart > 0 && particles.has(tokens[familyStart - 1])) familyStart -= 1;
  const family = tokens.slice(familyStart).join(" ");
  const given = tokens.slice(0, familyStart).join(" ");
  return { family, initials: initialsFromGivenText(given) };
}

function initialsFromGivenText(text) {
  return normalizeSearchText(text)
    .split(" ")
    .filter(Boolean)
    .map((token) => {
      if (token.length <= 3) return token.replace(/[^a-z]/g, "");
      return token[0];
    })
    .join("")
    .slice(0, 4);
}

function betterExternalLabel(candidate, current) {
  const next = canonicalExternalAuthor(candidate);
  const prev = canonicalExternalAuthor(current);
  if (!next) return false;
  if (!prev) return true;
  const nextComma = next.includes(",");
  const prevComma = prev.includes(",");
  if (nextComma !== prevComma) return !nextComma;
  const nextTokens = normalizeSearchText(next).split(" ").filter(Boolean).length;
  const prevTokens = normalizeSearchText(prev).split(" ").filter(Boolean).length;
  if (nextTokens !== prevTokens) return nextTokens > prevTokens;
  return next.length > prev.length;
}

function authorIsRosterMember(author, roster) {
  return roster.some((person) => authorMatchesPerson(author, person));
}

function authorMatchesPerson(author, person) {
  const normalized = normalizeSearchText(author);
  if (!normalized) return false;
  const families = (person.families || [])
    .map(normalizeSearchText)
    .filter(Boolean)
    .sort((a, b) => b.length - a.length);
  const matchedFamily = families.find((family) => normalizedHasPhrase(normalized, family));
  if (!matchedFamily) return false;
  const initials = authorInitials(author, families);
  const firstInitials = new Set((person.firstInitials || []).map((initial) => String(initial).toLowerCase()));
  if (!firstInitials.size || !initials.size) return true;
  return Array.from(firstInitials).some((initial) => initials.has(initial));
}

function authorInitials(author, families) {
  let normalized = normalizeSearchText(author);
  families.forEach((family) => {
    normalized = removeNormalizedPhrase(normalized, family);
  });
  normalized = normalized.replace(/\b(de|der|van|von|den|the|and)\b/g, " ").replace(/\s+/g, " ").trim();
  const initials = new Set();
  normalized.split(" ").filter(Boolean).forEach((token) => {
    if (token.length <= 3) {
      token.split("").forEach((letter) => initials.add(letter));
    } else {
      initials.add(token[0]);
    }
  });
  return initials;
}

function normalizedHasPhrase(text, phrase) {
  return ` ${text} `.includes(` ${phrase} `);
}

function removeNormalizedPhrase(text, phrase) {
  return ` ${text} `.replaceAll(` ${phrase} `, " ").replace(/\s+/g, " ").trim();
}

function shortExternalLabel(name) {
  const trimmed = String(name || "").replace(/\s+/g, " ").trim();
  if (trimmed.length <= 20) return trimmed;
  const commaParts = trimmed.split(",");
  if (commaParts.length > 1) {
    return `${commaParts[0].trim()}, ${commaParts[1].trim().slice(0, 4)}`.slice(0, 22);
  }
  const tokens = trimmed.split(" ").filter(Boolean);
  if (tokens.length > 1) return `${tokens[tokens.length - 1]}, ${tokens[0][0]}.`.slice(0, 22);
  return trimmed.slice(0, 20);
}

function renderNetwork() {
  if (!state.data || !els.networkSvg) return;
  const people = activePeople();
  const activeIds = new Set(people.map((person) => person.id));
  let pubs = activePublications();
  if (state.networkAipFilter === "gt90") pubs = pubs.filter((pub) => isNumber(pub.aip) && pub.aip > 90);
  if (state.networkAipFilter === "gte95") pubs = pubs.filter((pub) => isNumber(pub.aip) && pub.aip >= 95);

  const nodeStats = new Map(people.map((person) => [person.id, { count: 0, degree: 0, strength: 0 }]));
  const edgeMap = new Map();
  pubs.forEach((pub) => {
    const ids = [...new Set(pub.matchedPeople.filter((id) => activeIds.has(id)))].sort();
    ids.forEach((id) => {
      const stat = nodeStats.get(id);
      if (stat) stat.count += 1;
    });
    for (let i = 0; i < ids.length; i += 1) {
      for (let j = i + 1; j < ids.length; j += 1) {
        const key = `${ids[i]}|${ids[j]}`;
        if (!edgeMap.has(key)) edgeMap.set(key, { source: ids[i], target: ids[j], count: 0, pubIds: [] });
        const edge = edgeMap.get(key);
        edge.count += 1;
        edge.pubIds.push(pub.id);
      }
    }
  });
  const edges = Array.from(edgeMap.values()).sort((a, b) => b.count - a.count);
  edges.forEach((edge) => {
    const source = nodeStats.get(edge.source);
    const target = nodeStats.get(edge.target);
    if (source) {
      source.degree += 1;
      source.strength += edge.count;
    }
    if (target) {
      target.degree += 1;
      target.strength += edge.count;
    }
  });

  const nodes = people.map((person) => ({
    id: person.id,
    label: person.display,
    name: person.name,
    fte: person.fte,
    count: nodeStats.get(person.id)?.count || 0,
    degree: nodeStats.get(person.id)?.degree || 0,
    strength: nodeStats.get(person.id)?.strength || 0,
  }));
  const external = state.networkExternal
    ? buildExternalCollaboration(pubs, activeIds)
    : { nodes: [], edges: [] };
  els.networkEmpty.hidden = edges.length > 0 || external.edges.length > 0;
  drawNetwork(nodes, edges, external.nodes, external.edges);
  renderNetworkTable(edges, pubs);
}

function drawNetwork(nodes, edges, externalNodes = [], externalEdges = []) {
  const svg = els.networkSvg;
  const rect = svg.getBoundingClientRect();
  const width = Math.max(560, rect.width || svg.clientWidth || 900);
  const height = Math.max(480, rect.height || 620);
  svg.setAttribute("viewBox", `0 0 ${width} ${height}`);
  svg.innerHTML = "";
  const placed = layoutNetwork(nodes, edges, width, height);
  const byId = new Map(placed.map((node) => [node.id, node]));
  const maxEdgeCount = Math.max(1, ...edges.map((edge) => edge.count));
  const placedExternal = layoutExternalNodes(externalNodes, externalEdges, placed, width, height);
  const externalById = new Map(placedExternal.map((node) => [node.id, node]));
  const maxExternalEdgeCount = Math.max(1, ...externalEdges.map((edge) => edge.count));

  externalEdges.forEach((edge) => {
    const a = byId.get(edge.source);
    const b = externalById.get(edge.target);
    if (!a || !b) return;
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", externalEdgePath(a, b, width, height));
    path.setAttribute("class", "external-edge");
    path.setAttribute("stroke-width", String((0.45 + Math.sqrt(edge.count / maxExternalEdgeCount) * 1.9).toFixed(2)));
    const title = edge.aggregate
      ? `${a.label}: ${edge.pubIds.length} publications with ${edge.authorCount} other external coauthors`
      : `${a.label} + ${b.label}: ${edge.count} shared publications`;
    path.appendChild(svgTitle(title));
    svg.appendChild(path);
  });

  edges.forEach((edge) => {
    const a = byId.get(edge.source);
    const b = byId.get(edge.target);
    if (!a || !b) return;
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", edgePath(edge, a, b, placed));
    path.setAttribute("class", "edge");
    path.setAttribute("stroke-width", String((1.8 + (edge.count / maxEdgeCount) * 13).toFixed(2)));
    path.appendChild(svgTitle(`${a.label} + ${b.label}: ${edge.count} shared publications`));
    svg.appendChild(path);
  });

  placedExternal.forEach((node) => {
    const group = document.createElementNS("http://www.w3.org/2000/svg", "g");
    const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    const radius = Math.max(3.5, Math.min(8, 3 + Math.sqrt(node.count || 0) * 1.4));
    circle.setAttribute("cx", node.x);
    circle.setAttribute("cy", node.y);
    circle.setAttribute("r", String(radius.toFixed(1)));
    circle.setAttribute("class", `external-node${node.aggregate ? " aggregate" : ""}`);
    const nodeTitle = node.aggregate
      ? `${node.label}: ${node.count} publications with ${node.authorCount} outside coauthors`
      : `${node.label}: ${node.count} shared publications with roster members`;
    circle.appendChild(svgTitle(nodeTitle));
    group.appendChild(circle);

    if (node.aggregate || node.priority) {
      const label = document.createElementNS("http://www.w3.org/2000/svg", "text");
      label.setAttribute("x", node.x);
      label.setAttribute("y", node.y + radius + 10);
      label.setAttribute("text-anchor", "middle");
      label.setAttribute("class", `external-label${node.aggregate ? " aggregate" : ""}`);
      label.textContent = node.shortLabel;
      group.appendChild(label);
    }
    svg.appendChild(group);
  });

  placed.forEach((node) => {
    const group = document.createElementNS("http://www.w3.org/2000/svg", "g");
    const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    const radius = Math.max(10, Math.min(38, 8 + Math.sqrt(node.count || 0) * 3.8));
    circle.setAttribute("cx", node.x);
    circle.setAttribute("cy", node.y);
    circle.setAttribute("r", String(radius));
    circle.setAttribute("class", `node${node.count ? "" : " low"}`);
    circle.appendChild(svgTitle(`${node.label}: ${node.count} publications, FTE ${node.fte}`));
    group.appendChild(circle);

    const countLabel = document.createElementNS("http://www.w3.org/2000/svg", "text");
    countLabel.setAttribute("x", node.x);
    countLabel.setAttribute("y", node.y);
    countLabel.setAttribute("class", "node-count");
    countLabel.textContent = String(node.count || 0);
    group.appendChild(countLabel);

    const label = document.createElementNS("http://www.w3.org/2000/svg", "text");
    label.setAttribute("x", node.x);
    label.setAttribute("y", node.y + radius + 15);
    label.setAttribute("text-anchor", "middle");
    label.setAttribute("class", "node-label");
    label.textContent = node.label;
    group.appendChild(label);
    svg.appendChild(group);
  });
}

function layoutNetwork(nodes, edges, width, height) {
  const cx = width / 2;
  const cy = height / 2;
  const innerRx = Math.max(115, width * 0.18);
  const innerRy = Math.max(90, height * 0.16);
  const outerRx = Math.max(235, width * 0.39);
  const outerRy = Math.max(180, height * 0.34);
  const sorted = nodes.slice().sort((a, b) => {
    const scoreA = a.count + a.strength * 1.8 + a.degree * 3;
    const scoreB = b.count + b.strength * 1.8 + b.degree * 3;
    if (scoreB !== scoreA) return scoreB - scoreA;
    return a.label.localeCompare(b.label);
  });
  if (!sorted.length) return [];
  const placed = [{ ...sorted[0], x: cx, y: cy }];
  const inner = sorted.slice(1, Math.min(sorted.length, 7));
  const outer = sorted.slice(7);
  inner.forEach((node, index) => {
    const angle = -Math.PI / 2 + (Math.PI * 2 * index) / Math.max(1, inner.length);
    placed.push({
      ...node,
      x: cx + Math.cos(angle) * innerRx,
      y: cy + Math.sin(angle) * innerRy,
    });
  });
  outer.forEach((node, index) => {
    const angle = -Math.PI / 2 + Math.PI / Math.max(1, outer.length) + (Math.PI * 2 * index) / Math.max(1, outer.length);
    placed.push({
      ...node,
      x: cx + Math.cos(angle) * outerRx,
      y: cy + Math.sin(angle) * outerRy,
    });
  });
  return placed;
}

function layoutExternalNodes(externalNodes, externalEdges, internalNodes, width, height) {
  if (!externalNodes.length) return [];
  const cx = width / 2;
  const cy = height / 2;
  const internalById = new Map(internalNodes.map((node) => [node.id, node]));
  const edgesByExternal = new Map();
  externalEdges.forEach((edge) => {
    if (!edgesByExternal.has(edge.target)) edgesByExternal.set(edge.target, []);
    edgesByExternal.get(edge.target).push(edge);
  });
  const groups = new Map();
  externalNodes.forEach((node) => {
    const strongest = (edgesByExternal.get(node.id) || [])
      .slice()
      .sort((a, b) => b.count - a.count)[0];
    const anchorId = strongest?.source || "_unanchored";
    if (!groups.has(anchorId)) groups.set(anchorId, []);
    groups.get(anchorId).push(node);
  });

  const rx = width * 0.47;
  const ry = height * 0.43;
  const placed = [];
  Array.from(groups.entries()).forEach(([anchorId, group], groupIndex) => {
    const anchor = internalById.get(anchorId);
    const baseAngle = anchor
      ? Math.atan2(anchor.y - cy, anchor.x - cx)
      : -Math.PI / 2 + (Math.PI * 2 * groupIndex) / Math.max(1, groups.size);
    const aggregate = group.filter((node) => node.aggregate);
    const named = group.filter((node) => !node.aggregate)
      .sort((a, b) => Number(b.priority) - Number(a.priority) || b.count - a.count || a.label.localeCompare(b.label));
    [...aggregate, ...named].forEach((node, index) => {
      let spread = 0;
      let radialStep = 0;
      if (!node.aggregate) {
        const ring = Math.floor(index / 8);
        const lane = index % 8;
        spread = (lane - 3.5) * 0.07 + ring * 0.012;
        radialStep = ring * 13;
      }
      const jitter = hashNumber(node.id) * 0.05;
      const angle = baseAngle + spread + jitter;
      const localRx = Math.max(width * 0.34, rx - radialStep);
      const localRy = Math.max(height * 0.32, ry - radialStep * 0.75);
      placed.push({
        ...node,
        x: clamp(cx + Math.cos(angle) * localRx, 18, width - 18),
        y: clamp(cy + Math.sin(angle) * localRy, 18, height - 18),
      });
    });
  });
  return placed;
}

function edgePath(edge, a, b, nodes) {
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  const len = Math.hypot(dx, dy) || 1;
  const nx = -dy / len;
  const ny = dx / len;
  let sign = hashSign(`${edge.source}|${edge.target}`);
  let bend = 18 + Math.min(38, edge.count * 5);

  nodes.forEach((node) => {
    if (node.id === edge.source || node.id === edge.target) return;
    const distance = distancePointToSegment(node.x, node.y, a.x, a.y, b.x, b.y);
    const radius = Math.max(18, Math.min(45, 12 + Math.sqrt(node.count || 0) * 4));
    if (distance < radius + 14) {
      const side = Math.sign((node.x - a.x) * nx + (node.y - a.y) * ny) || sign;
      sign = -side;
      bend += radius + 20;
    }
  });

  const cx = (a.x + b.x) / 2 + nx * bend * sign;
  const cy = (a.y + b.y) / 2 + ny * bend * sign;
  return `M ${a.x.toFixed(1)} ${a.y.toFixed(1)} Q ${cx.toFixed(1)} ${cy.toFixed(1)} ${b.x.toFixed(1)} ${b.y.toFixed(1)}`;
}

function externalEdgePath(a, b, width, height) {
  const cx = width / 2;
  const cy = height / 2;
  const dx = b.x - cx;
  const dy = b.y - cy;
  const len = Math.hypot(dx, dy) || 1;
  const outX = dx / len;
  const outY = dy / len;
  const mx = (a.x + b.x) / 2;
  const my = (a.y + b.y) / 2;
  const bend = 22 + Math.min(28, Math.max(0, (Math.hypot(b.x - a.x, b.y - a.y) - 180) * 0.08));
  const qx = mx + outX * bend;
  const qy = my + outY * bend;
  return `M ${a.x.toFixed(1)} ${a.y.toFixed(1)} Q ${qx.toFixed(1)} ${qy.toFixed(1)} ${b.x.toFixed(1)} ${b.y.toFixed(1)}`;
}

function distancePointToSegment(px, py, ax, ay, bx, by) {
  const dx = bx - ax;
  const dy = by - ay;
  const lenSq = dx * dx + dy * dy || 1;
  const t = Math.max(0, Math.min(1, ((px - ax) * dx + (py - ay) * dy) / lenSq));
  const x = ax + t * dx;
  const y = ay + t * dy;
  return Math.hypot(px - x, py - y);
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function hashSign(value) {
  let hash = 0;
  for (let idx = 0; idx < value.length; idx += 1) {
    hash = (hash * 31 + value.charCodeAt(idx)) | 0;
  }
  return hash % 2 === 0 ? 1 : -1;
}

function hashNumber(value) {
  let hash = 0;
  for (let idx = 0; idx < value.length; idx += 1) {
    hash = (hash * 31 + value.charCodeAt(idx)) | 0;
  }
  return ((Math.abs(hash) % 2000) / 1000) - 1;
}

function renderNetworkTable(edges, pubs) {
  const people = peopleById();
  const pubById = new Map(pubs.map((pub) => [pub.id, pub]));
  const rows = edges.slice(0, 25).map((edge) => [
    `${people.get(edge.source)?.display || edge.source} + ${people.get(edge.target)?.display || edge.target}`,
    edge.count,
    edge.pubIds.slice(0, 4).map((id) => pubById.get(id)?.title).filter(Boolean).join("; "),
  ]);
  els.networkTableWrap.innerHTML = `<table id="network-table"></table>`;
  setTable(document.getElementById("network-table"), ["Pair", "Shared pubs", "Examples"], rows, [false, true, false]);
}

function setTable(table, headers, rows, numeric = []) {
  table.innerHTML = `
    <thead><tr>${headers.map((header, idx) => `<th class="${numeric[idx] ? "num" : ""}">${escapeHtml(header)}</th>`).join("")}</tr></thead>
    <tbody>${rows.map((row) => `<tr>${row.map((cell, idx) => `<td class="${numeric[idx] ? "num" : ""}">${cell}</td>`).join("")}</tr>`).join("")}</tbody>
  `;
}

function setEmptyTable(table, message) {
  table.innerHTML = `<tbody><tr><td>${escapeHtml(message)}</td></tr></tbody>`;
}

function aipBadge(value, source = {}) {
  if (!isNumber(value)) {
    if (source.rankableJournal === false) return `<span class="tag">Not ranked</span>`;
    return `<span class="tag">NA</span>`;
  }
  const cls = value >= 95 ? "red" : value >= 90 ? "teal" : "";
  return `<span class="tag ${cls}">${value.toFixed(1)}</span>`;
}

function countBy(items, keyFn) {
  const counts = new Map();
  items.forEach((item) => {
    const key = keyFn(item);
    counts.set(key, (counts.get(key) || 0) + 1);
  });
  return counts;
}

function svgTitle(text) {
  const title = document.createElementNS("http://www.w3.org/2000/svg", "title");
  title.textContent = text;
  return title;
}

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, (ch) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#39;",
  }[ch]));
}

function isNumber(value) {
  return typeof value === "number" && Number.isFinite(value);
}

function percent(part, whole) {
  if (!whole) return "0%";
  return `${Math.round((part / whole) * 100)}%`;
}

function debounce(fn, wait) {
  let timer = null;
  return (...args) => {
    window.clearTimeout(timer);
    timer = window.setTimeout(() => fn(...args), wait);
  };
}
