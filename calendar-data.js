// calendar-data.js — Aditya's MSc Application Calendar Data
// Edit this file to add/modify events. Push to GitHub to update the live site.
// Deadlines are best-effort based on university portals — always verify directly.

const CAL_COLORS = {
  'preparation':'#7B8EC8',
  'de-saarland-dsai':'#4A7EC8','de-saarland-cs':'#4A7EC8','de-rwth-ds':'#4A7EC8',
  'de-hamburg-ias':'#4A7EC8','de-bonn-ai':'#4A7EC8','de-freiburg-cs':'#4A7EC8',
  'de-dresden-cs':'#4A7EC8','de-stuttgart-cs':'#4A7EC8','de-tu-berlin':'#4A7EC8',
  'at-tuwien-ds':'#E05A4E','at-jku-ai':'#E05A4E','at-tugraz-cs':'#E05A4E','at-tugraz-ds':'#E05A4E',
  'ch-eth-robotics':'#8E3A59','ch-epfl-robotics':'#8E3A59',
  'be-kuleuven-ai':'#B8860B','it-polimi-cse':'#2E8B57','dk-dtu-auto':'#C84A4A',
  'se-kth-ml':'#1565C0','se-chalmers-dsai':'#1A78C0','fi-aalto-ml':'#0D7EA0',
  'nl-tue-dsai':'#D4711A','nl-tudelft-robotics':'#D4711A','nl-uva-ai':'#D4711A',
  'ie-dcu-ai':'#2E9B5F','ie-tcd-cs':'#2E9B5F','ie-ucd-ai':'#2E9B5F',
  'au-uq-cs':'#7B4AC8','au-monash-ai':'#7B4AC8','au-adelaide-ai':'#7B4AC8',
  'au-anu-mlcv':'#7B4AC8','au-sydney-cs':'#7B4AC8','au-unimelb-cs':'#7B4AC8','au-unsw-it':'#7B4AC8',
  'sg-ntu-msai':'#C84A8E','sg-nus-ai':'#C84A8E'
};

const CAL_NAMES = {
  'preparation':'Preparation',
  'de-saarland-dsai':'Saarland DSAI','de-saarland-cs':'Saarland CS','de-rwth-ds':'RWTH Aachen',
  'de-hamburg-ias':'Hamburg IAS','de-bonn-ai':'Bonn AI','de-freiburg-cs':'Freiburg',
  'de-dresden-cs':'TU Dresden','de-stuttgart-cs':'Stuttgart','de-tu-berlin':'TU Berlin',
  'at-tuwien-ds':'TU Wien','at-jku-ai':'JKU Linz','at-tugraz-cs':'TU Graz (Robotics)','at-tugraz-ds':'TU Graz (DS)',
  'ch-eth-robotics':'ETH Zurich','ch-epfl-robotics':'EPFL',
  'be-kuleuven-ai':'KU Leuven','it-polimi-cse':'PoliMi Milan','dk-dtu-auto':'DTU Denmark',
  'se-kth-ml':'KTH Sweden','se-chalmers-dsai':'Chalmers','fi-aalto-ml':'Aalto Finland',
  'nl-tue-dsai':'TU/e','nl-tudelft-robotics':'TU Delft','nl-uva-ai':'UvA Amsterdam',
  'ie-dcu-ai':'DCU Ireland','ie-tcd-cs':'Trinity Dublin','ie-ucd-ai':'UCD Ireland',
  'au-uq-cs':'UQ','au-monash-ai':'Monash','au-adelaide-ai':'Adelaide',
  'au-anu-mlcv':'ANU','au-sydney-cs':'Univ Sydney','au-unimelb-cs':'Melbourne','au-unsw-it':'UNSW',
  'sg-ntu-msai':'NTU','sg-nus-ai':'NUS'
};

// type: 'deadline' | 'task' | 'exam' | 'milestone'
// priority: 'urgent' | 'high' | 'normal'
const CAL_EVENTS = [

  // ── PREPARATION (applies to all) ──
  {id:'prep-aps',uni:'preparation',title:'Apply for APS Certificate',date:'2026-06-20',type:'deadline',priority:'urgent',
    note:'Mandatory for ALL German university applications. Costs ~€165, takes 3–5 months. Apply at German Embassy New Delhi or consulate. See: aps-india.de'},
  {id:'prep-gre-diag',uni:'preparation',title:'GRE Diagnostic Test',date:'2026-06-25',type:'task',priority:'high',
    note:'Take free GRE practice test at ets.org to get your baseline before starting prep. Identifies your weak areas.'},
  {id:'prep-gre-prep',uni:'preparation',title:'Begin GRE Preparation',date:'2026-07-01',type:'task',priority:'high',
    note:'4–6 weeks focused prep. Target: Quant 164+ (168+ for ETH), AW 4.0+. Resources: ETS Official Guide, Magoosh, Kaplan.'},
  {id:'prep-ielts-prep',uni:'preparation',title:'Begin IELTS/TOEFL Preparation',date:'2026-07-01',type:'task',priority:'high',
    note:'Most programs require IELTS 6.5–7.0 overall. Book coaching class. TOEFL iBT 90–100+ also accepted at most.'},
  {id:'prep-lor',uni:'preparation',title:'Request Letters of Recommendation',date:'2026-08-01',type:'task',priority:'high',
    note:'Approach 3 professors at VIT Chennai. Provide your CV, SOP draft, program list, and give 2+ months notice. Ask for strong academic + research recommendations.'},
  {id:'prep-transcript',uni:'preparation',title:'Get Official VIT Transcripts',date:'2026-08-15',type:'task',priority:'normal',
    note:'Request certified/sealed transcripts from VIT registrar. For Germany: also prepare VPD-ready copies via uni-assist.de (4–6 weeks).'},
  {id:'prep-gre-exam',uni:'preparation',title:'GRE Exam — 1st Attempt',date:'2026-09-10',type:'exam',priority:'urgent',
    note:'Book at ereg.ets.org. Cost ~$220 (~₹18,000). Test centers in Chennai and Bangalore. Leaving Nov window for retake if needed.'},
  {id:'prep-ielts-exam',uni:'preparation',title:'IELTS Exam',date:'2026-09-20',type:'exam',priority:'high',
    note:'Book at IDP or British Council Chennai. Results in 13 days. Target: 7.0 overall, no band below 6.0. Score valid 2 years.'},
  {id:'prep-aps-check',uni:'preparation',title:'Follow Up: APS Certificate Status',date:'2026-09-30',type:'task',priority:'high',
    note:'APS Certificate should arrive ~3 months after applying. Email aps-india.de if not received. Required before applying to any German university.'},
  {id:'prep-sop',uni:'preparation',title:'Draft SOP / Motivation Letter',date:'2026-10-01',type:'task',priority:'high',
    note:'Write your Statement of Purpose: why this field, your AI/Robotics projects at VIT, career goals, why each specific university. Tailor per university.'},
  {id:'prep-cv',uni:'preparation',title:'Finalize Academic CV',date:'2026-10-10',type:'task',priority:'high',
    note:'Include: education, research projects, internships, publications, skills, awards. Keep to 2 pages. Use LaTeX or clean template.'},
  {id:'prep-curr',uni:'preparation',title:'Curricular Analysis (German Unis)',date:'2026-10-15',type:'task',priority:'normal',
    note:'RWTH Aachen and some German unis require you to compare your VIT coursework with their requirements. Ask VIT for course descriptions/syllabi.'},
  {id:'prep-gre-retake',uni:'preparation',title:'GRE Retake (if score below target)',date:'2026-11-10',type:'task',priority:'normal',
    note:'If Quant < 164 in September attempt, retake now. Scores valid 5 years. ETH needs 168+, RWTH needs 75th percentile.'},
  {id:'prep-uniassist',uni:'preparation',title:'Submit to uni-assist (Germany)',date:'2026-11-15',type:'deadline',priority:'high',
    note:'Register at uni-assist.de and submit VPD documents for German universities (RWTH Aachen, Saarland). Processing takes 4–6 weeks.'},
  {id:'prep-docs-final',uni:'preparation',title:'All Documents Ready — Checklist',date:'2026-11-20',type:'deadline',priority:'urgent',
    note:'Must have ready: APS Certificate ✓ GRE scores ✓ IELTS scores ✓ Transcripts ✓ 3× LORs ✓ SOP (tailored) ✓ CV ✓ Passport copy ✓'},
  {id:'prep-graduate',uni:'preparation',title:'Graduate from VIT Chennai 🎓',date:'2027-05-15',type:'milestone',priority:'normal',
    note:'Complete BTech CSE (AI & Robotics). Obtain final transcripts and provisional degree certificate immediately — needed for enrollment.'},
  {id:'prep-visa',uni:'preparation',title:'Apply for Student Visa',date:'2027-06-01',type:'task',priority:'urgent',
    note:'Apply immediately after accepting an offer. Germany/Austria: 8–12 weeks. Ireland: 4–6 weeks. Singapore: 4–6 weeks. Australia: 4–8 weeks.'},
  {id:'prep-accom',uni:'preparation',title:'Book Student Accommodation',date:'2027-07-01',type:'task',priority:'high',
    note:'Apply for university dormitory as early as possible — European cities have long waiting lists. Check Studierendenwerk for Germany.'},
  {id:'prep-insurance',uni:'preparation',title:'Health Insurance for Enrollment',date:'2027-08-01',type:'task',priority:'normal',
    note:'Mandatory for European university enrollment. Germany: TK / AOK / BARMER (~€110/mo). Austria: ÖGK. Verify requirements with specific university.'},
  {id:'prep-start',uni:'preparation',title:'🎉 Start MSc — Winter 2027',date:'2027-10-01',type:'milestone',priority:'normal',
    note:'Begin your Master\'s program! For Australia / Singapore July 2027 intake, this milestone is July 2027.'},

  // ── ETH ZURICH ──
  {id:'eth-prep',uni:'ch-eth-robotics',title:'Prepare ETH Application Materials',date:'2026-11-01',type:'task',priority:'high',
    note:'Needed: Bachelor transcripts, GRE (Quant 168+ required), 2 LORs, motivation letter, CV. Portal: apply.ethz.ch. Very competitive.'},
  {id:'eth-deadline',uni:'ch-eth-robotics',title:'ETH Zurich — Application DEADLINE',date:'2026-12-01',type:'deadline',priority:'urgent',
    note:'MSc Robotics, Cognition & Intelligence. QS #7 globally. GRE required (Quant ~168+). ~€9,200 total tuition (new 2025 fee structure). Source: ethz.ch/en/studies/master'},

  // ── EPFL ──
  {id:'epfl-fellowship-prep',uni:'ch-epfl-robotics',title:'Prepare EPFL Excellence Fellowship',date:'2026-11-15',type:'task',priority:'urgent',
    note:'Separate application for CHF 10,000/semester + full tuition waiver. Very competitive. Requires exceptional academic record. See: epfl.ch/education/master/excellence-fellowships'},
  {id:'epfl-fellowship',uni:'ch-epfl-robotics',title:'EPFL Excellence Fellowship — DEADLINE',date:'2026-12-15',type:'deadline',priority:'urgent',
    note:'CHF 10,000/semester + full tuition waiver. QS #17. Apply THIS deadline for fellowship — regular application deadline is April. Source: epfl.ch admissions'},
  {id:'epfl-main-prep',uni:'ch-epfl-robotics',title:'Start EPFL Main Application',date:'2027-03-15',type:'task',priority:'high',
    note:'GRE optional but recommended. Apply via IS-Academia portal at epfl.ch. Include research experience and motivation.'},
  {id:'epfl-deadline',uni:'ch-epfl-robotics',title:'EPFL — Main Application DEADLINE',date:'2027-04-15',type:'deadline',priority:'high',
    note:'MSc Robotics. QS #17. ~€9,200 total tuition. GRE optional. Source: epfl.ch/education/master/programs/robotics'},

  // ── STUTTGART (early for a German uni!) ──
  {id:'stuttgart-prep',uni:'de-stuttgart-cs',title:'Start Stuttgart Application',date:'2026-11-15',type:'task',priority:'high',
    note:'January 15 is early for a German university. No GRE required. English-taught Autonomous Systems track in CS program.'},
  {id:'stuttgart-deadline',uni:'de-stuttgart-cs',title:'Stuttgart — Application DEADLINE',date:'2027-01-15',type:'deadline',priority:'high',
    note:'MSc CS (Autonomous Systems track). QS #310. ~€6,736 total (includes semester contribution). No GRE. Source: uni-stuttgart.de/en/study/programs'},

  // ── AALTO (Jan 2 — earliest deadline!) ──
  {id:'aalto-prep',uni:'fi-aalto-ml',title:'Start Aalto Application — EARLY START',date:'2026-12-01',type:'task',priority:'urgent',
    note:'Aalto closes January 2nd — the earliest of all 36 programs. Must submit BEFORE New Year. Apply via aalto.fi/en/admissions/masters-admissions'},
  {id:'aalto-deadline',uni:'fi-aalto-ml',title:'Aalto Finland — Application DEADLINE',date:'2027-01-02',type:'deadline',priority:'urgent',
    note:'MSc ML, DS & AI (Macadamia programme). QS #115. €34,000 total. GRE required. 2-year post-study work permit. Source: aalto.fi/en/admissions'},

  // ── KTH ──
  {id:'kth-prep',uni:'se-kth-ml',title:'Start KTH Application',date:'2026-12-15',type:'task',priority:'high',
    note:'Apply via universityadmissions.se (Swedish national portal). Upload: transcripts, CV, personal letter, English proficiency. Swedish Institute Scholarship for Indians.'},
  {id:'kth-deadline',uni:'se-kth-ml',title:'KTH Sweden — Application DEADLINE',date:'2027-01-15',type:'deadline',priority:'high',
    note:'MSc Machine Learning. QS #74. €32,000 total tuition. No GRE required. Swedish Institute Scholarship targets Indian students. Source: kth.se/en/studies/master'},

  // ── CHALMERS ──
  {id:'chalmers-prep',uni:'se-chalmers-dsai',title:'Start Chalmers Application',date:'2026-12-15',type:'task',priority:'high',
    note:'Same national portal as KTH: universityadmissions.se. IPOET Scholarship covers full 2-year tuition for Indian students.'},
  {id:'chalmers-deadline',uni:'se-chalmers-dsai',title:'Chalmers — Application DEADLINE',date:'2027-01-15',type:'deadline',priority:'high',
    note:'MSc DSAI. QS #139. €28,600 total. IPOET Scholarship covers full 2-year tuition for Indian students. Source: chalmers.se/en/education/master'},

  // ── DTU ──
  {id:'dtu-prep',uni:'dk-dtu-auto',title:'Start DTU Denmark Application',date:'2026-12-15',type:'task',priority:'high',
    note:'Apply at apply.dtu.dk. Best post-study work visa: 3 years establishment card in Denmark.'},
  {id:'dtu-deadline',uni:'dk-dtu-auto',title:'DTU Denmark — Application DEADLINE',date:'2027-01-15',type:'deadline',priority:'high',
    note:'MSc Autonomous Systems. QS #109. €30,000 total. No GRE. Best post-study work rights: 3-year job search visa. Source: dtu.dk/english/education/msc'},

  // ── UVA ──
  {id:'uva-prep',uni:'nl-uva-ai',title:'Start UvA Amsterdam Application',date:'2026-12-15',type:'task',priority:'high',
    note:'Apply via uva.nl/en/education/master-s. No GRE. Strong AI research group. Check if Orange Tulip Scholarship applies.'},
  {id:'uva-deadline',uni:'nl-uva-ai',title:'UvA Amsterdam — Application DEADLINE',date:'2027-01-15',type:'deadline',priority:'high',
    note:'MSc Artificial Intelligence. QS #55. ~€52,000 total. No GRE. Source: uva.nl/en/programmes/masters/artificial-intelligence'},

  // ── NUS ──
  {id:'nus-prep',uni:'sg-nus-ai',title:'Start NUS Singapore Application',date:'2026-12-01',type:'task',priority:'high',
    note:'GATE scores accepted instead of GRE — unique advantage for Indian students. NUS GRTII Scholarship: SGD 45,000 toward tuition. Portal: nus.edu.sg/oam'},
  {id:'nus-deadline',uni:'sg-nus-ai',title:'NUS Singapore — Application DEADLINE',date:'2027-01-31',type:'deadline',priority:'high',
    note:'MComp (AI Specialisation). QS #8. ~€45,087 total. GATE accepted in lieu of GRE. GRTII Scholarship SGD 45k. Source: comp.nus.edu.sg/programmes/pg/mcomp'},

  // ── RWTH AACHEN ──
  {id:'rwth-prep',uni:'de-rwth-ds',title:'Start RWTH Aachen Application',date:'2027-01-01',type:'task',priority:'high',
    note:'Apply via RWTH campus portal. APS Certificate mandatory (should be ready by now). GRE Quant 75th percentile required (~159+). Also submit via uni-assist.'},
  {id:'rwth-deadline',uni:'de-rwth-ds',title:'RWTH Aachen — Application DEADLINE',date:'2027-03-01',type:'deadline',priority:'high',
    note:'MSc Data Science. QS #99. ~€1,316 total tuition. GRE required (Quant 75th %ile). APS Certificate needed. Source: rwth-aachen.de/go/id/evve'},

  // ── KU LEUVEN ──
  {id:'leuven-prep',uni:'be-kuleuven-ai',title:'Start KU Leuven Application',date:'2027-01-01',type:'task',priority:'high',
    note:'Dedicated 1-year AI master\'s at QS #73 — excellent value. Apply at kuleuven.be/admissions. Note: check if March 1 deadline is for Winter 2027 or earlier.'},
  {id:'leuven-deadline',uni:'be-kuleuven-ai',title:'KU Leuven Belgium — Application DEADLINE',date:'2027-03-01',type:'deadline',priority:'high',
    note:'Master of Artificial Intelligence (1 year). QS #73. ~€9,494 total. Verify deadline at kuleuven.be/en/programmes/master-of-artificial-intelligence'},

  // ── NTU SINGAPORE ──
  {id:'ntu-prep',uni:'sg-ntu-msai',title:'Start NTU Singapore Application',date:'2027-01-01',type:'task',priority:'high',
    note:'GRE entirely optional. Apply at admissions.ntu.edu.sg. QS #5 in AI by subject ranking. 1-year fast-track program.'},
  {id:'ntu-deadline',uni:'sg-ntu-msai',title:'NTU Singapore — Application DEADLINE',date:'2027-03-31',type:'deadline',priority:'normal',
    note:'MSc Artificial Intelligence (MSAI). QS #15 overall (#5 AI subject). ~€42,458 total. GRE optional. 1 year. Source: ntu.edu.sg/education/graduate-programme/msai'},

  // ── TU DELFT ──
  {id:'delft-prep',uni:'nl-tudelft-robotics',title:'Start TU Delft Application',date:'2027-02-01',type:'task',priority:'high',
    note:'Apply via apply.tudelft.nl. No GRE. Strong robotics research group. Check April 1 vs rolling deadline.'},
  {id:'delft-deadline',uni:'nl-tudelft-robotics',title:'TU Delft — Application DEADLINE',date:'2027-04-01',type:'deadline',priority:'high',
    note:'MSc Robotics / CS. QS #49. ~€51,000 total. No GRE. Source: tudelft.nl/en/education/programmes/masters'},

  // ── DCU ──
  {id:'dcu-prep',uni:'ie-dcu-ai',title:'Start DCU Ireland Application',date:'2027-02-15',type:'task',priority:'high',
    note:'€5,000 auto-scholarship applied at application. 24-month post-study Stamp 1G work visa for Irish graduates. Apply: dcu.ie/registry/apply'},
  {id:'dcu-deadline',uni:'ie-dcu-ai',title:'DCU Ireland — Application DEADLINE',date:'2027-04-06',type:'deadline',priority:'high',
    note:'MSc Computing (AI). QS #410. ~€20,000 total (after auto €5k scholarship). 24-month post-study work visa. Source: dcu.ie/computing/courses/postgraduate'},

  // ── POLIMI ──
  {id:'polimi-prep',uni:'it-polimi-cse',title:'Start PoliMi Milan Application',date:'2027-03-01',type:'task',priority:'high',
    note:'Multiple intake rounds (typically Jan, Apr, Jul). Apply at polimi.it/en/programmes. Check current round deadlines — dates vary each year.'},
  {id:'polimi-deadline',uni:'it-polimi-cse',title:'PoliMi Milan — Application Round Deadline',date:'2027-05-31',type:'deadline',priority:'normal',
    note:'MSc CSE (AI Specialisation). QS #98. ~€8,000 total. VERIFY current round deadline at polimi.it — multiple rounds available.'},

  // ── TU/e ──
  {id:'tue-prep',uni:'nl-tue-dsai',title:'Start TU/e Netherlands Application',date:'2027-03-01',type:'task',priority:'high',
    note:'Orange Tulip Scholarship available for Indian students. Apply at tue.nl/en/education/graduate-school. No GRE required.'},
  {id:'tue-deadline',uni:'nl-tue-dsai',title:'TU/e Netherlands — Application DEADLINE',date:'2027-05-01',type:'deadline',priority:'high',
    note:'MSc DSAI. QS #179. ~€40,000 total. Orange Tulip Scholarship for Indians. Source: tue.nl/en/education/graduate-school/master-programs'},

  // ── SAARLAND DSAI ──
  {id:'saarland-dsai-prep',uni:'de-saarland-dsai',title:'Start Saarland DSAI Application',date:'2027-03-15',type:'task',priority:'normal',
    note:'GATE accepted instead of GRE — unique advantage! Home of DFKI (world\'s largest AI research center). Apply via uni-saarland.de.'},
  {id:'saarland-dsai-deadline',uni:'de-saarland-dsai',title:'Saarland DSAI — Application DEADLINE',date:'2027-05-15',type:'deadline',priority:'normal',
    note:'MSc Data Science & AI. QS #601. ~€20,320 total. GATE accepted. DFKI on campus. Source: saarland-informatics-campus.de/en'},

  // ── SAARLAND CS ──
  {id:'saarland-cs-prep',uni:'de-saarland-cs',title:'Start Saarland CS Application',date:'2027-03-15',type:'task',priority:'normal',
    note:'Same campus as DSAI. GATE accepted instead of GRE. Apply alongside Saarland DSAI for dual shot.'},
  {id:'saarland-cs-deadline',uni:'de-saarland-cs',title:'Saarland CS — Application DEADLINE',date:'2027-05-15',type:'deadline',priority:'normal',
    note:'MSc Computer Science. QS #601. ~€21,976 total. GATE accepted. Source: uni-saarland.de/en/study'},

  // ── FREIBURG ──
  {id:'freiburg-prep',uni:'de-freiburg-cs',title:'Start Freiburg Application',date:'2027-04-01',type:'task',priority:'normal',
    note:'No GRE required. AI specialisation available within CS program. APS Certificate needed. Apply: uni-freiburg.de/en/university/study'},
  {id:'freiburg-deadline',uni:'de-freiburg-cs',title:'Freiburg — Application DEADLINE',date:'2027-05-31',type:'deadline',priority:'normal',
    note:'MSc CS (AI Specialization). QS #212. ~€6,760 total (semester contribution). No GRE. Source: uni-freiburg.de/en/university/study'},

  // ── BONN ──
  {id:'bonn-prep',uni:'de-bonn-ai',title:'Start Bonn AI Application',date:'2027-04-01',type:'task',priority:'normal',
    note:'Dedicated AI MSc (not a CS track). No GRE. APS Certificate needed. Apply via uni-bonn.de/en.'},
  {id:'bonn-deadline',uni:'de-bonn-ai',title:'Bonn AI — Application DEADLINE',date:'2027-06-01',type:'deadline',priority:'normal',
    note:'MSc Artificial Intelligence. QS #227. ~€1,380 total tuition. No GRE. Source: uni-bonn.de/en/studying/degree-programs/master-programs'},

  // ── HAMBURG ──
  {id:'hamburg-prep',uni:'de-hamburg-ias',title:'Start Hamburg IAS Application',date:'2027-04-15',type:'task',priority:'normal',
    note:'Unique Intelligent Adaptive Systems program integrating robotics + AI. No GRE. APS needed. Apply: uni-hamburg.de/en'},
  {id:'hamburg-deadline',uni:'de-hamburg-ias',title:'Hamburg IAS — Application DEADLINE',date:'2027-06-15',type:'deadline',priority:'normal',
    note:'MSc Intelligent Adaptive Systems. QS #191. ~€1,340 total tuition. No GRE. Robotics + AI profile fit. Source: uni-hamburg.de/en/studies'},

  // ── TRINITY COLLEGE DUBLIN ──
  {id:'trinity-prep',uni:'ie-tcd-cs',title:'Start Trinity College Dublin Application',date:'2027-04-01',type:'task',priority:'normal',
    note:'24-month post-study Stamp 1G visa. QS #87. Apply at tcd.ie/courses. References and personal statement required.'},
  {id:'trinity-deadline',uni:'ie-tcd-cs',title:'Trinity Dublin — Application DEADLINE',date:'2027-06-30',type:'deadline',priority:'normal',
    note:'MSc CS (Intelligent Systems). QS #87. ~€27,790 total. 24-month post-study work visa. Source: tcd.ie/courses'},

  // ── UCD ──
  {id:'ucd-prep',uni:'ie-ucd-ai',title:'Start UCD Ireland Application',date:'2027-03-01',type:'task',priority:'normal',
    note:'24-month post-study Stamp 1G work visa. Advanced AI MSc. Apply via ucd.ie/graduateadmissions'},
  {id:'ucd-deadline',uni:'ie-ucd-ai',title:'UCD Ireland — Application DEADLINE',date:'2027-05-31',type:'deadline',priority:'normal',
    note:'MSc Advanced AI. QS #118. ~€31,780 total. 24-month post-study work visa. VERIFY at ucd.ie — rolling deadlines may apply.'},

  // ── TU DRESDEN ──
  {id:'dresden-prep',uni:'de-dresden-cs',title:'Start TU Dresden Application',date:'2027-05-01',type:'task',priority:'normal',
    note:'Latest July 15 deadline — good safety option. No GRE. APS Certificate needed. Apply via tu-dresden.de/en'},
  {id:'dresden-deadline',uni:'de-dresden-cs',title:'TU Dresden — Application DEADLINE',date:'2027-07-15',type:'deadline',priority:'normal',
    note:'MSc Computer Science. QS #218. ~€1,200 total tuition. No GRE. Latest winter intake deadline in Germany. Source: tu-dresden.de/en'},

  // ── TU BERLIN ──
  {id:'berlin-prep',uni:'de-tu-berlin',title:'Start TU Berlin Application',date:'2027-06-01',type:'task',priority:'normal',
    note:'Rolling admissions with August 31 deadline — latest among all programs. No GRE. APS Certificate needed. Apply at tu.berlin/en'},
  {id:'berlin-deadline',uni:'de-tu-berlin',title:'TU Berlin — Application DEADLINE',date:'2027-08-31',type:'deadline',priority:'normal',
    note:'MSc Computer Science. QS #147. ~€1,280 total tuition. No GRE. Latest deadline of all 36 programs. Source: tu.berlin/en/studies/master'},

  // ── AUSTRALIA — July 2027 Intake ──
  {id:'au-research',uni:'au-uq-cs',title:'Finalize Australian University Shortlist',date:'2027-01-15',type:'task',priority:'high',
    note:'Decide which Australian unis to apply to for July 2027 intake. No GRE required for any Australian program. All allow unlimited work rights during study.'},
  {id:'au-start',uni:'au-monash-ai',title:'Start All Australian Applications',date:'2027-02-01',type:'task',priority:'high',
    note:'Apply to all Australian universities simultaneously for July 2027 intake. No GRE needed. Most have rolling admissions — apply early for scholarship consideration.'},
  {id:'uq-deadline',uni:'au-uq-cs',title:'UQ — Application Deadline (July intake)',date:'2027-04-30',type:'deadline',priority:'normal',
    note:'Master of CS. QS #40. ~€35,414 total. 1–1.5 years. 2-year post-study Graduate Visa (485). Source: uq.edu.au/study/program.html'},
  {id:'monash-deadline',uni:'au-monash-ai',title:'Monash — Application Deadline (July intake)',date:'2027-04-30',type:'deadline',priority:'normal',
    note:'Master of AI. QS #37. ~€56,700 total. 1.5 years. Merit Scholarship AUD 15,000/yr. Unlimited work rights. Source: monash.edu/study/courses/find-a-course'},
  {id:'adelaide-deadline',uni:'au-adelaide-ai',title:'Adelaide — Application Deadline (July intake)',date:'2027-04-30',type:'deadline',priority:'normal',
    note:'Master of AI & ML. QS #82. ~€66,978 total. 2 years. Source: adelaide.edu.au/study/find-a-course'},
  {id:'anu-deadline',uni:'au-anu-mlcv',title:'ANU — Application Deadline (July intake)',date:'2027-04-30',type:'deadline',priority:'normal',
    note:'Master of ML & CV. QS #30. ~€68,466 total. 2 years. Chancellor\'s Scholarship 25–50% auto-award. Source: anu.edu.au/study/courses'},
  {id:'sydney-deadline',uni:'au-sydney-cs',title:'Sydney — Application Deadline (July intake)',date:'2027-04-30',type:'deadline',priority:'normal',
    note:'Master of CS (DS & AI track). QS #18. ~€67,222 total. 2 years. Source: sydney.edu.au/courses/courses/pc/master-of-computer-science'},
  {id:'melbourne-deadline',uni:'au-unimelb-cs',title:'Melbourne — Application Deadline (July intake)',date:'2027-04-30',type:'deadline',priority:'normal',
    note:'Master of CS. QS #13. ~€76,830 total. 2 years. Australia\'s top-ranked university. Source: unimelb.edu.au/study'},
  {id:'unsw-deadline',uni:'au-unsw-it',title:'UNSW — Application Deadline (July intake)',date:'2027-04-30',type:'deadline',priority:'normal',
    note:'Master of IT (AI specialisation). QS #19. ~€79,605 total. 2 years. 20% auto International Student Award. Source: unsw.edu.au/study'},

  // ── JKU LINZ ──
  {id:'jku-prep',uni:'at-jku-ai',title:'Start JKU Linz Application',date:'2027-07-01',type:'task',priority:'normal',
    note:'4 AI specialisation tracks. OeAD Ernst Mach Grant available (€1,050–1,300/month — covers living costs). No APS needed for Austria. Apply: jku.at/en/studying'},
  {id:'jku-deadline',uni:'at-jku-ai',title:'JKU Linz — Application DEADLINE',date:'2027-09-01',type:'deadline',priority:'normal',
    note:'MSc Artificial Intelligence. QS #801. ~€3,007 total. 4 specialisation tracks. OeAD Ernst Mach Grant. VERIFY exact date at jku.at/en/studying'},

  // ── TU WIEN ──
  {id:'tuwien-prep',uni:'at-tuwien-ds',title:'Start TU Wien Application',date:'2027-08-01',type:'task',priority:'normal',
    note:'Very late deadline — good safety option. QS #91 in CS. No APS for Austria. Apply at tuwien.ac.at/en/studies/admission'},
  {id:'tuwien-deadline',uni:'at-tuwien-ds',title:'TU Wien — Application DEADLINE',date:'2027-10-31',type:'deadline',priority:'normal',
    note:'MSc Data Science. QS #190 (#91 CS subject). ~€3,007 total. No GRE. Very late deadline. Source: tuwien.ac.at/en/studies/master-programmes'},

  // ── TU GRAZ ──
  {id:'tugraz-prep',uni:'at-tugraz-cs',title:'Start TU Graz Application',date:'2027-10-01',type:'task',priority:'normal',
    note:'VFS Global competence check for Indian applicants. No APS needed for Austria. OeAD scholarship available. Apply: tugraz.at/en/studying'},
  {id:'tugraz-cs-deadline',uni:'at-tugraz-cs',title:'TU Graz Robotics — Application DEADLINE',date:'2027-12-15',type:'deadline',priority:'normal',
    note:'MSc Computer Science (Robotics/ML track). QS #413. ~€6,100 total. No GRE. Latest deadline of all 36 programs. Source: tugraz.at/en/studying'},
  {id:'tugraz-ds-deadline',uni:'at-tugraz-ds',title:'TU Graz DS — Application DEADLINE',date:'2027-12-15',type:'deadline',priority:'normal',
    note:'MSc Data Science. QS #413. ~€6,100 total. No GRE. Source: tugraz.at/en/studying/master-programs/data-science'},
];
