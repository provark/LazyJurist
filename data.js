/* Motion IDs are permanent. Preserve legacyTitles when editing a title.
 * lastReviewed is null until a substantive legal review is recorded. */
const TRACKS = {
  "evidence": {
    "name": "EVIDENCE",
    "headerClass": "ev",
    "cardClass": "",
    "motions": [
      {
        "title": "Motion to Admit Prior Conviction — Propensity Theory",
        "difficulty": "easy",
        "party": "defendant",
        "flavor": "In a civil negligence trial, defendant moves to introduce plaintiff's ten-year-old assault conviction to suggest plaintiff is generally prone to violence and was therefore the 'true aggressor' in the incident.",
        "explanation": "Evidence offered solely to prove a person acted in conformity with a character trait on a particular occasion is inadmissible propensity proof.",
        "citation": "Fed. R. Evid. 404(a)–(b)",
        "correctRuling": "deny",
        "ruling": {
          "grant": "conviction admitted",
          "deny": "conviction excluded"
        },
        "consequence": {
          "grant": "The jury hears a decade-old conviction on a forbidden character theory.",
          "deny": "Motion denied. The propensity inference is precisely what Rule 404 forbids."
        },
        "repEffect": {
          "grant": -12,
          "deny": 10
        },
        "id": "evidence-001",
        "legacyTitles": [
          "Motion to Admit Prior Conviction — Propensity Theory"
        ],
        "topic": "character",
        "jurisdiction": "U.S. federal",
        "lastReviewed": null,
        "ambiguous": false,
        "ambiguityReason": null,
        "authorities": [
          {
            "label": "Evidence Rule 404",
            "url": "https://www.law.cornell.edu/rules/fre/rule_404"
          }
        ]
      },
      {
        "title": "Motion to Admit Dying Declaration",
        "difficulty": "easy",
        "party": "prosecution",
        "flavor": "In a homicide prosecution, the victim told paramedics 'Delgado stabbed me' while bleeding out. He stated he knew he was dying and lost consciousness moments later. The declarant is unavailable.",
        "explanation": "A statement about the cause or circumstances of an impending death, made by a declarant who believed death was imminent, is a recognized hearsay exception in homicide and civil cases.",
        "citation": "Fed. R. Evid. 804(b)(2)",
        "correctRuling": "grant",
        "ruling": {
          "grant": "statement admitted",
          "deny": "statement excluded"
        },
        "consequence": {
          "grant": "Dying declaration admitted. The foundational elements are squarely met.",
          "deny": "A textbook hearsay exception is rejected despite facts that clearly satisfy it."
        },
        "repEffect": {
          "grant": 10,
          "deny": -12
        },
        "id": "evidence-002",
        "legacyTitles": [
          "Motion to Admit Dying Declaration"
        ],
        "topic": "hearsay",
        "jurisdiction": "U.S. federal",
        "lastReviewed": null,
        "ambiguous": false,
        "ambiguityReason": null,
        "authorities": [
          {
            "label": "Evidence Rule 804",
            "url": "https://www.law.cornell.edu/rules/fre/rule_804"
          }
        ]
      },
      {
        "title": "Motion to Admit Subsequent Remedial Measures",
        "difficulty": "easy",
        "party": "plaintiff",
        "flavor": "After a customer's fall, defendant replaced the flooring and added warning signs. Plaintiff moves to introduce the post-incident improvements as proof the old floor was dangerously slippery.",
        "explanation": "Subsequent remedial measures are not admissible to prove negligence, culpable conduct, a defect, or a need for warning, but they may be admissible for other purposes such as ownership, control, or feasibility if disputed.",
        "citation": "Fed. R. Evid. 407",
        "correctRuling": "deny",
        "ruling": {
          "grant": "repairs admitted",
          "deny": "repairs excluded"
        },
        "consequence": {
          "grant": "Post-incident remediation is used to imply the original condition was dangerous.",
          "deny": "Motion denied. Safety improvements stay out as proof of prior negligence under Rule 407."
        },
        "repEffect": {
          "grant": -10,
          "deny": 10
        },
        "id": "evidence-003",
        "legacyTitles": [
          "Motion to Admit Subsequent Remedial Measures"
        ],
        "topic": "relevance",
        "jurisdiction": "U.S. federal",
        "lastReviewed": null,
        "ambiguous": false,
        "ambiguityReason": null,
        "authorities": [
          {
            "label": "Evidence Rule 407",
            "url": "https://www.law.cornell.edu/rules/fre/rule_407"
          }
        ]
      },
      {
        "title": "Motion to Admit Settlement Discussions",
        "difficulty": "easy",
        "party": "defendant",
        "flavor": "During early settlement talks, plaintiff offered to accept a reduced payment. Negotiations collapsed. At trial, defendant moves to introduce plaintiff's prior offer to prove plaintiff knew the claim was weak.",
        "explanation": "Statements made during compromise negotiations are inadmissible when offered to prove or disprove liability for, or the amount of, a disputed claim. They may still be admissible for other purposes.",
        "citation": "Fed. R. Evid. 408",
        "correctRuling": "deny",
        "ruling": {
          "grant": "offer admitted",
          "deny": "offer excluded"
        },
        "consequence": {
          "grant": "Compromise discussions are weaponized as trial admissions.",
          "deny": "Motion denied. Rule 408 protects candid settlement negotiations from trial use."
        },
        "repEffect": {
          "grant": -10,
          "deny": 8
        },
        "id": "evidence-004",
        "legacyTitles": [
          "Motion to Admit Settlement Discussions"
        ],
        "topic": "relevance",
        "jurisdiction": "U.S. federal",
        "lastReviewed": null,
        "ambiguous": false,
        "ambiguityReason": null,
        "authorities": [
          {
            "label": "Evidence Rule 408",
            "url": "https://www.law.cornell.edu/rules/fre/rule_408"
          }
        ]
      },
      {
        "title": "Motion to Admit Liability Insurance",
        "difficulty": "easy",
        "party": "plaintiff",
        "flavor": "In a negligence suit, plaintiff moves to introduce evidence that defendant carries a $2 million liability insurance policy, offered to show defendant 'was acting negligently because he knew insurance would cover it.'",
        "explanation": "Evidence of liability insurance is inadmissible when offered to prove negligence or wrongful conduct, though it may be admissible for another purpose such as ownership, control, agency, or witness bias.",
        "citation": "Fed. R. Evid. 411",
        "correctRuling": "deny",
        "ruling": {
          "grant": "insurance admitted",
          "deny": "insurance excluded"
        },
        "consequence": {
          "grant": "The jury hears about insurance coverage on a forbidden propensity-to-negligence theory.",
          "deny": "Motion denied. Rule 411 bars the insurance inference."
        },
        "repEffect": {
          "grant": -10,
          "deny": 10
        },
        "id": "evidence-005",
        "legacyTitles": [
          "Motion to Admit Liability Insurance"
        ],
        "topic": "relevance",
        "jurisdiction": "U.S. federal",
        "lastReviewed": null,
        "ambiguous": false,
        "ambiguityReason": null,
        "authorities": [
          {
            "label": "Evidence Rule 411",
            "url": "https://www.law.cornell.edu/rules/fre/rule_411"
          }
        ]
      },
      {
        "title": "Motion to Admit Plea Discussions",
        "difficulty": "easy",
        "party": "prosecution",
        "flavor": "During failed plea negotiations, defendant told prosecutors 'I'd accept three years if you drop the weapons count.' Negotiations collapsed. At trial, the prosecution moves to introduce the statement as an admission of guilt.",
        "explanation": "Statements made during plea negotiations with a prosecuting authority are inadmissible against the defendant who made them, to encourage candid plea discussions.",
        "citation": "Fed. R. Evid. 410; Fed. R. Crim. P. 11(f)",
        "correctRuling": "deny",
        "ruling": {
          "grant": "statement admitted",
          "deny": "statement excluded"
        },
        "consequence": {
          "grant": "Candid plea-negotiation admissions are introduced at trial — exactly what Rule 410 forbids.",
          "deny": "Motion denied. Rule 410 protects plea negotiations from trial use."
        },
        "repEffect": {
          "grant": -12,
          "deny": 10
        },
        "id": "evidence-006",
        "legacyTitles": [
          "Motion to Admit Plea Discussions"
        ],
        "topic": "relevance",
        "jurisdiction": "U.S. federal",
        "lastReviewed": null,
        "ambiguous": false,
        "ambiguityReason": null,
        "authorities": [
          {
            "label": "Evidence Rule 410",
            "url": "https://www.law.cornell.edu/rules/fre/rule_410"
          }
        ]
      },
      {
        "title": "Motion to Exclude 911 Recording — Hearsay",
        "difficulty": "easy",
        "party": "defendant",
        "flavor": "During a 911 call, the caller screamed 'He's breaking in — he has a gun — he's coming up the stairs!' while audibly crying. The caller cannot now be located. Prosecution seeks to offer the recording; defendant moves to exclude it as inadmissible hearsay.",
        "explanation": "A statement relating to a startling event, made while the declarant is still under the stress of excitement it caused, is admissible under the excited utterance exception regardless of availability.",
        "citation": "Fed. R. Evid. 803(2)",
        "correctRuling": "deny",
        "ruling": {
          "grant": "call excluded",
          "deny": "call admitted"
        },
        "consequence": {
          "grant": "A textbook excited utterance is excluded despite facts squarely satisfying Rule 803(2).",
          "deny": "Motion denied. Classic excited utterance made under contemporaneous stress — squarely admissible."
        },
        "repEffect": {
          "grant": -12,
          "deny": 10
        },
        "id": "evidence-007",
        "legacyTitles": [
          "Motion to Exclude 911 Recording — Hearsay"
        ],
        "topic": "hearsay",
        "jurisdiction": "U.S. federal",
        "lastReviewed": null,
        "ambiguous": false,
        "ambiguityReason": null,
        "authorities": [
          {
            "label": "Evidence Rule 803",
            "url": "https://www.law.cornell.edu/rules/fre/rule_803"
          }
        ]
      },
      {
        "title": "Motion to Exclude Bank Records — Hearsay",
        "difficulty": "easy",
        "party": "defendant",
        "flavor": "Plaintiff offers bank transaction logs through the bank's records custodian, who testifies the logs were made in the regular course of business at or near the time of each transaction by someone with knowledge, and that it is the bank's regular practice to keep them. Defendant moves to exclude the logs as inadmissible hearsay.",
        "explanation": "Records of a regularly conducted activity are admissible when the foundational elements are laid by a qualified witness — including that the records were kept in the regular course and made at or near the time of the event.",
        "citation": "Fed. R. Evid. 803(6)",
        "correctRuling": "deny",
        "ruling": {
          "grant": "records excluded",
          "deny": "records admitted"
        },
        "consequence": {
          "grant": "Properly authenticated business records are improperly excluded.",
          "deny": "Motion denied. Custodian's foundation satisfies Rule 803(6)."
        },
        "repEffect": {
          "grant": -10,
          "deny": 10
        },
        "id": "evidence-008",
        "legacyTitles": [
          "Motion to Exclude Bank Records — Hearsay"
        ],
        "topic": "hearsay",
        "jurisdiction": "U.S. federal",
        "lastReviewed": null,
        "ambiguous": false,
        "ambiguityReason": null,
        "authorities": [
          {
            "label": "Evidence Rule 803",
            "url": "https://www.law.cornell.edu/rules/fre/rule_803"
          }
        ]
      },
      {
        "title": "Motion to Admit Prior Bar Fights for Propensity",
        "difficulty": "easy",
        "party": "prosecution",
        "flavor": "Defendant is charged with assault. Prosecution seeks to introduce two prior bar-fight convictions, arguing they show defendant 'has a tendency to start fights' and therefore started this one.",
        "explanation": "Propensity reasoning — that prior acts prove a character trait that caused the charged act — is exactly what Rule 404(b) prohibits when that is the only theory of relevance.",
        "citation": "Fed. R. Evid. 404(b)",
        "correctRuling": "deny",
        "ruling": {
          "grant": "priors admitted",
          "deny": "priors excluded"
        },
        "consequence": {
          "grant": "The jury hears forbidden propensity evidence.",
          "deny": "Correctly excluded. Rule 404(b) bars this character-to-propensity chain."
        },
        "repEffect": {
          "grant": -12,
          "deny": 10
        },
        "id": "evidence-009",
        "legacyTitles": [
          "Motion to Admit Prior Bar Fights for Propensity"
        ],
        "topic": "character",
        "jurisdiction": "U.S. federal",
        "lastReviewed": null,
        "ambiguous": false,
        "ambiguityReason": null,
        "authorities": [
          {
            "label": "Evidence Rule 404",
            "url": "https://www.law.cornell.edu/rules/fre/rule_404"
          }
        ]
      },
      {
        "title": "Motion to Admit Victim's Sexual History",
        "difficulty": "easy",
        "party": "defendant",
        "flavor": "In a sexual-assault prosecution, defense seeks to introduce evidence that the complainant had consensual relationships with other partners, offered to support a general consent theory.",
        "explanation": "Rape-shield rules bar evidence of a victim's other sexual behavior when offered to prove consent or to attack credibility on a propensity basis.",
        "citation": "Fed. R. Evid. 412",
        "correctRuling": "deny",
        "ruling": {
          "grant": "history admitted",
          "deny": "history excluded"
        },
        "consequence": {
          "grant": "Protected sexual-history evidence reaches the jury on an impermissible theory.",
          "deny": "The rape-shield rule is correctly enforced. The evidence stays out."
        },
        "repEffect": {
          "grant": -18,
          "deny": 12
        },
        "id": "evidence-010",
        "legacyTitles": [
          "Motion to Admit Victim's Sexual History"
        ],
        "topic": "character",
        "jurisdiction": "U.S. federal",
        "lastReviewed": null,
        "ambiguous": false,
        "ambiguityReason": null,
        "authorities": [
          {
            "label": "Evidence Rule 412",
            "url": "https://www.law.cornell.edu/rules/fre/rule_412"
          }
        ]
      },
      {
        "title": "Motion to Exclude — Relevance",
        "difficulty": "easy",
        "party": "defendant",
        "flavor": "In a contract-dispute trial over a $40,000 invoice, plaintiff seeks to introduce evidence that defendant vacationed in Hawaii twice last year, to paint defendant as 'someone who doesn't care about his obligations.'",
        "explanation": "Evidence must have a tendency to make a fact of consequence more or less probable. Lifestyle evidence untethered from the claim or defense fails the basic relevance threshold.",
        "citation": "Fed. R. Evid. 401, 402",
        "correctRuling": "grant",
        "ruling": {
          "grant": "evidence excluded",
          "deny": "evidence admitted"
        },
        "consequence": {
          "grant": "Excluded as irrelevant under Rule 401. It proves nothing about the contract.",
          "deny": "Irrelevant lifestyle evidence is admitted to prejudice the jury against the defendant."
        },
        "repEffect": {
          "grant": 8,
          "deny": -10
        },
        "id": "evidence-011",
        "legacyTitles": [
          "Motion to Exclude — Relevance"
        ],
        "topic": "relevance",
        "jurisdiction": "U.S. federal",
        "lastReviewed": null,
        "ambiguous": false,
        "ambiguityReason": null,
        "authorities": [
          {
            "label": "Evidence Rule 401",
            "url": "https://www.law.cornell.edu/rules/fre/rule_401"
          }
        ]
      },
      {
        "title": "Motion to Exclude Testimonial Hearsay — Confrontation Clause",
        "difficulty": "medium",
        "party": "defendant",
        "flavor": "Prosecution offers a written statement an eyewitness gave to detectives after the crime. The witness has since left the country and is unavailable. Defense had no opportunity to cross-examine when the statement was made.",
        "explanation": "The Confrontation Clause bars admission of testimonial statements by unavailable declarants unless the defendant had a prior opportunity to cross-examine.",
        "citation": "Crawford v. Washington, 541 U.S. 36 (2004)",
        "correctRuling": "grant",
        "ruling": {
          "grant": "statement excluded",
          "deny": "statement admitted"
        },
        "consequence": {
          "grant": "Statement excluded. Crawford bars this testimonial hearsay absent prior cross-examination.",
          "deny": "Testimonial hearsay comes in despite no prior opportunity for cross-examination."
        },
        "repEffect": {
          "grant": 12,
          "deny": -15
        },
        "id": "evidence-012",
        "legacyTitles": [
          "Motion to Exclude Testimonial Hearsay — Confrontation Clause"
        ],
        "topic": "hearsay",
        "jurisdiction": "U.S. federal",
        "lastReviewed": null,
        "ambiguous": false,
        "ambiguityReason": null,
        "authorities": [
          {
            "label": "Opinion · 541 U.S. 36",
            "url": "https://www.law.cornell.edu/supremecourt/text/541/36"
          }
        ]
      },
      {
        "title": "Motion to Admit 911 Call — Primary Purpose Test",
        "difficulty": "medium",
        "party": "prosecution",
        "flavor": "During a violent domestic assault in progress, the victim called 911 and, between screams, told the dispatcher the attacker's name, what he was wearing, and that 'he's still in the house.' The victim refuses to testify at trial.",
        "explanation": "Statements made with the primary purpose of enabling police to meet an ongoing emergency are not testimonial under the Confrontation Clause. Dispatch calls during an active attack typically qualify.",
        "citation": "Davis v. Washington, 547 U.S. 813 (2006)",
        "correctRuling": "grant",
        "ruling": {
          "grant": "call admitted",
          "deny": "call excluded"
        },
        "consequence": {
          "grant": "Admitted. Statements during an ongoing emergency are non-testimonial under Davis.",
          "deny": "A non-testimonial emergency statement is excluded under a misreading of Crawford."
        },
        "repEffect": {
          "grant": 10,
          "deny": -12
        },
        "id": "evidence-013",
        "legacyTitles": [
          "Motion to Admit 911 Call — Primary Purpose Test"
        ],
        "topic": "hearsay",
        "jurisdiction": "U.S. federal",
        "lastReviewed": null,
        "ambiguous": false,
        "ambiguityReason": null,
        "authorities": [
          {
            "label": "Opinion · 547 U.S. 813",
            "url": "https://www.law.cornell.edu/supremecourt/text/547/813"
          }
        ]
      },
      {
        "title": "Motion to Quash Subpoena — Attorney-Client Privilege",
        "difficulty": "medium",
        "party": "defendant",
        "flavor": "The government subpoenas internal emails between a pharmaceutical company's lower-level compliance employees and the company's in-house counsel, regarding a voluntary internal investigation into pricing practices.",
        "explanation": "Attorney-client privilege extends to communications between corporate counsel and all employees, not just senior management, when made for the purpose of providing legal advice.",
        "citation": "Upjohn Co. v. United States, 449 U.S. 383 (1981)",
        "correctRuling": "grant",
        "ruling": {
          "grant": "subpoena quashed",
          "deny": "subpoena enforced"
        },
        "consequence": {
          "grant": "Subpoena quashed. The privilege protects communications with in-house counsel throughout the corporate structure.",
          "deny": "Privileged internal communications are exposed on a narrow 'control group' theory Upjohn rejected."
        },
        "repEffect": {
          "grant": 12,
          "deny": -14
        },
        "id": "evidence-014",
        "legacyTitles": [
          "Motion to Quash Subpoena — Attorney-Client Privilege"
        ],
        "topic": "privilege",
        "jurisdiction": "U.S. federal",
        "lastReviewed": null,
        "ambiguous": false,
        "ambiguityReason": null,
        "authorities": [
          {
            "label": "Opinion · 449 U.S. 383",
            "url": "https://www.law.cornell.edu/supremecourt/text/449/383"
          }
        ]
      },
      {
        "title": "Motion in Limine — Exclude Conviction Record After Stipulation",
        "difficulty": "medium",
        "party": "defendant",
        "flavor": "Defendant is charged as a felon in possession of a firearm. He offers to stipulate that he is a convicted felon. Prosecution insists on introducing the full record of the prior conviction, which involved graphic child abuse facts.",
        "explanation": "When a prior conviction is an element to prove and the defendant offers to stipulate to it, admitting the full inflammatory record serves little purpose beyond prejudice.",
        "citation": "Old Chief v. United States, 519 U.S. 172 (1997); Fed. R. Evid. 403",
        "correctRuling": "grant",
        "ruling": {
          "grant": "record excluded",
          "deny": "record admitted"
        },
        "consequence": {
          "grant": "Full record excluded. The stipulation satisfies the element; the graphic details are needlessly prejudicial.",
          "deny": "Highly inflammatory conviction details reach the jury despite a stipulation that would have done the same work."
        },
        "repEffect": {
          "grant": 10,
          "deny": -12
        },
        "id": "evidence-015",
        "legacyTitles": [
          "Motion in Limine — Exclude Conviction Record After Stipulation"
        ],
        "topic": "relevance",
        "jurisdiction": "U.S. federal",
        "lastReviewed": null,
        "ambiguous": false,
        "ambiguityReason": null,
        "authorities": [
          {
            "label": "Opinion · 519 U.S. 172",
            "url": "https://www.law.cornell.edu/supremecourt/text/519/172"
          },
          {
            "label": "Evidence Rule 403",
            "url": "https://www.law.cornell.edu/rules/fre/rule_403"
          }
        ]
      },
      {
        "title": "Motion to Strike Expert Witness — Daubert Challenge",
        "difficulty": "medium",
        "party": "defendant",
        "flavor": "Plaintiff's damages expert holds a PhD in economics, has testified in 50 similar cases, and used a peer-reviewed methodology. Defense moves to strike because it disagrees with the expert's assumptions and projected numbers.",
        "explanation": "Rule 702 requires the court to find, by a preponderance, that the expert is qualified, has sufficient facts or data, uses reliable methods, and reliably applies them. When that foundation is shown, ordinary disputes over assumptions and projected numbers go to weight rather than exclusion.",
        "citation": "Daubert v. Merrell Dow Pharms., Inc., 509 U.S. 579 (1993); Fed. R. Evid. 702",
        "correctRuling": "deny",
        "ruling": {
          "grant": "expert struck",
          "deny": "expert allowed"
        },
        "consequence": {
          "grant": "A qualified expert is excluded because her conclusions are disputed — not because her method is flawed.",
          "deny": "Expert remains. The Rule 702 foundation is satisfied, and defense can attack the assumptions on cross."
        },
        "repEffect": {
          "grant": -10,
          "deny": 8
        },
        "id": "evidence-016",
        "legacyTitles": [
          "Motion to Strike Expert Witness — Daubert Challenge"
        ],
        "topic": "experts",
        "jurisdiction": "U.S. federal",
        "lastReviewed": null,
        "ambiguous": false,
        "ambiguityReason": null,
        "authorities": [
          {
            "label": "Opinion · 509 U.S. 579",
            "url": "https://www.law.cornell.edu/supremecourt/text/509/579"
          },
          {
            "label": "Evidence Rule 702",
            "url": "https://www.law.cornell.edu/rules/fre/rule_702"
          }
        ]
      },
      {
        "title": "Motion to Exclude Spouse Testimony — Adverse Spousal Testimony Privilege",
        "difficulty": "medium",
        "party": "defendant",
        "flavor": "Prosecution calls the defendant's spouse to the stand. The spouse has voluntarily agreed to testify and wishes to do so. Defendant moves to exclude the testimony, invoking marital privilege.",
        "explanation": "In federal criminal cases, the privilege against adverse spousal testimony belongs to the witness-spouse. A defendant cannot prevent a willing spouse from testifying. This is distinct from the confidential marital communications privilege.",
        "citation": "Trammel v. United States, 445 U.S. 40 (1980)",
        "correctRuling": "deny",
        "ruling": {
          "grant": "testimony excluded",
          "deny": "testimony admitted"
        },
        "consequence": {
          "grant": "Defendant improperly blocks a willing witness-spouse from testifying — a privilege she alone holds.",
          "deny": "Correct. The spouse has chosen to testify; only she can invoke or waive the privilege."
        },
        "repEffect": {
          "grant": -10,
          "deny": 8
        },
        "id": "evidence-017",
        "legacyTitles": [
          "Motion to Exclude Spouse Testimony — Adverse Spousal Testimony Privilege"
        ],
        "topic": "privilege",
        "jurisdiction": "U.S. federal",
        "lastReviewed": null,
        "ambiguous": false,
        "ambiguityReason": null,
        "authorities": [
          {
            "label": "Opinion · 445 U.S. 40",
            "url": "https://www.law.cornell.edu/supremecourt/text/445/40"
          }
        ]
      },
      {
        "title": "Motion to Admit Prior Consistent Statement",
        "difficulty": "medium",
        "party": "prosecution",
        "flavor": "Defense accuses the key witness of fabricating her account after she was promised leniency in exchange for cooperation. Prosecution offers a detailed written statement the witness gave to a supervisor two weeks before any leniency discussion occurred.",
        "explanation": "A prior consistent statement is admissible to rebut a charge of recent fabrication only if it was made before the alleged motive to fabricate arose.",
        "citation": "Fed. R. Evid. 801(d)(1)(B); Tome v. United States, 513 U.S. 150 (1995)",
        "correctRuling": "grant",
        "ruling": {
          "grant": "statement admitted",
          "deny": "statement excluded"
        },
        "consequence": {
          "grant": "Prior statement admitted. It predates the alleged motive to lie, making it proper rebuttal.",
          "deny": "Valid rebuttal evidence is excluded despite clearly predating the alleged fabrication motive."
        },
        "repEffect": {
          "grant": 10,
          "deny": -12
        },
        "id": "evidence-018",
        "legacyTitles": [
          "Motion to Admit Prior Consistent Statement"
        ],
        "topic": "hearsay",
        "jurisdiction": "U.S. federal",
        "lastReviewed": null,
        "ambiguous": false,
        "ambiguityReason": null,
        "authorities": [
          {
            "label": "Opinion · 513 U.S. 150",
            "url": "https://www.law.cornell.edu/supremecourt/text/513/150"
          },
          {
            "label": "Evidence Rule 801",
            "url": "https://www.law.cornell.edu/rules/fre/rule_801"
          }
        ]
      },
      {
        "title": "Motion to Exclude Habit Evidence",
        "difficulty": "medium",
        "party": "defendant",
        "flavor": "In a motor-vehicle case, plaintiff offers testimony from three coworkers that defendant, over seven years of daily commuting, has a routine practice of checking his blind spot before every lane change — to corroborate plaintiff's account. Defendant moves to exclude the habit testimony as improper character evidence.",
        "explanation": "Evidence of a person's habit or an organization's routine practice may be admitted to prove that on a particular occasion the person acted in conformity with that habit or practice.",
        "citation": "Fed. R. Evid. 406",
        "correctRuling": "deny",
        "ruling": {
          "grant": "habit excluded",
          "deny": "habit admitted"
        },
        "consequence": {
          "grant": "Legitimate habit evidence is excluded despite the detailed, repeated, routine character required by Rule 406.",
          "deny": "Motion denied. Seven years of specific, regular, semi-automatic conduct qualifies squarely under Rule 406."
        },
        "repEffect": {
          "grant": -10,
          "deny": 8
        },
        "id": "evidence-019",
        "legacyTitles": [
          "Motion to Exclude Habit Evidence"
        ],
        "topic": "relevance",
        "jurisdiction": "U.S. federal",
        "lastReviewed": null,
        "ambiguous": false,
        "ambiguityReason": null,
        "authorities": [
          {
            "label": "Evidence Rule 406",
            "url": "https://www.law.cornell.edu/rules/fre/rule_406"
          }
        ]
      },
      {
        "title": "Motion to Exclude Extrinsic Evidence of Prior Act",
        "difficulty": "medium",
        "party": "defendant",
        "flavor": "On cross, a witness denies that she once falsified an expense report at a previous job. Opposing counsel seeks to call her former supervisor and introduce the expense report itself to prove she did — solely to attack her credibility.",
        "explanation": "A specific instance of a witness's past conduct may be inquired about on cross to attack her character for truthfulness, but extrinsic evidence is not admissible to prove the act. The examiner must take the witness's answer.",
        "citation": "Fed. R. Evid. 608(b)",
        "correctRuling": "grant",
        "ruling": {
          "grant": "extrinsic excluded",
          "deny": "extrinsic admitted"
        },
        "consequence": {
          "grant": "Extrinsic proof excluded. Rule 608(b) permits inquiry but not extrinsic evidence of a prior act for credibility.",
          "deny": "The trial is sidetracked into a mini-trial on a collateral credibility issue."
        },
        "repEffect": {
          "grant": 10,
          "deny": -10
        },
        "id": "evidence-020",
        "legacyTitles": [
          "Motion to Exclude Extrinsic Evidence of Prior Act"
        ],
        "topic": "character",
        "jurisdiction": "U.S. federal",
        "lastReviewed": null,
        "ambiguous": false,
        "ambiguityReason": null,
        "authorities": [
          {
            "label": "Evidence Rule 608",
            "url": "https://www.law.cornell.edu/rules/fre/rule_608"
          }
        ]
      },
      {
        "title": "Motion to Exclude Text Messages — Lack of Authentication",
        "difficulty": "medium",
        "party": "defendant",
        "flavor": "Plaintiff offers screenshots of text messages purportedly sent by defendant. The recipient-witness knows defendant's phone number, recognizes his typing style and nicknames, and confirms the messages reference private facts only defendant would know. Defendant moves to exclude the screenshots for failure of authentication.",
        "explanation": "Authentication only requires evidence sufficient to support a finding that the item is what it is claimed to be. Distinctive characteristics, context, and recipient testimony together meet that modest threshold.",
        "citation": "Fed. R. Evid. 901(a), (b)(4)",
        "correctRuling": "deny",
        "ruling": {
          "grant": "texts excluded",
          "deny": "texts admitted"
        },
        "consequence": {
          "grant": "Properly authenticated texts are excluded despite adequate foundational testimony.",
          "deny": "Motion denied. Distinctive characteristics and recipient knowledge establish sufficient authenticity."
        },
        "repEffect": {
          "grant": -10,
          "deny": 10
        },
        "id": "evidence-021",
        "legacyTitles": [
          "Motion to Exclude Text Messages — Lack of Authentication"
        ],
        "topic": "authentication",
        "jurisdiction": "U.S. federal",
        "lastReviewed": null,
        "ambiguous": false,
        "ambiguityReason": null,
        "authorities": [
          {
            "label": "Evidence Rule 901",
            "url": "https://www.law.cornell.edu/rules/fre/rule_901"
          }
        ]
      },
      {
        "title": "Motion to Admit Secondary Testimony — Best Evidence Challenge",
        "difficulty": "medium",
        "party": "prosecution",
        "flavor": "Prosecution seeks to prove the contents of a handwritten threat letter through an officer's oral testimony describing it. The original letter is in the prosecutor's file and available. No copy is offered, and no reason is given for not producing the original.",
        "explanation": "To prove the content of a writing, recording, or photograph, the original is required unless the Rules or a statute provide otherwise. A duplicate may be admitted unless a genuine authenticity question exists. Neither is offered here.",
        "citation": "Fed. R. Evid. 1002, 1003",
        "correctRuling": "deny",
        "ruling": {
          "grant": "testimony admitted",
          "deny": "testimony excluded"
        },
        "consequence": {
          "grant": "Oral secondary proof of a writing's contents is allowed despite the original being readily available.",
          "deny": "Motion denied. The original is available; Rule 1002 requires it."
        },
        "repEffect": {
          "grant": -10,
          "deny": 10
        },
        "id": "evidence-022",
        "legacyTitles": [
          "Motion to Admit Secondary Testimony — Best Evidence Challenge"
        ],
        "topic": "authentication",
        "jurisdiction": "U.S. federal",
        "lastReviewed": null,
        "ambiguous": false,
        "ambiguityReason": null,
        "authorities": [
          {
            "label": "Evidence Rule 1002",
            "url": "https://www.law.cornell.edu/rules/fre/rule_1002"
          }
        ]
      },
      {
        "title": "Motion Under Rule of Completeness",
        "difficulty": "medium",
        "party": "defendant",
        "flavor": "Prosecution introduces one paragraph of defendant's 30-page written statement — the paragraph that appears inculpatory. Defense moves to introduce three other paragraphs from the same statement providing context that, defense contends, materially qualifies the excerpted portion.",
        "explanation": "When all or part of a statement is introduced, Rule 106 lets an adverse party require any other part, or related statement, that fairness requires the jury to consider at the same time. The current rule also allows completion over a hearsay objection when fairness requires it.",
        "citation": "Fed. R. Evid. 106",
        "correctRuling": "grant",
        "ruling": {
          "grant": "context admitted",
          "deny": "context kept out"
        },
        "consequence": {
          "grant": "Completing passages admitted. Rule 106 prevents the jury from receiving a misleading fragment, even if the completing context would otherwise face a hearsay objection.",
          "deny": "Jury hears only the inculpatory excerpt while fairness-required context is withheld."
        },
        "repEffect": {
          "grant": 10,
          "deny": -12
        },
        "id": "evidence-023",
        "legacyTitles": [
          "Motion Under Rule of Completeness"
        ],
        "topic": "authentication",
        "jurisdiction": "U.S. federal",
        "lastReviewed": null,
        "ambiguous": false,
        "ambiguityReason": null,
        "authorities": [
          {
            "label": "Evidence Rule 106",
            "url": "https://www.law.cornell.edu/rules/fre/rule_106"
          }
        ]
      },
      {
        "title": "Motion to Strike Expert — Untested Methodology",
        "difficulty": "hard",
        "party": "defendant",
        "flavor": "Plaintiff's accident-reconstruction expert uses a proprietary software model he developed himself. The model has never been peer-reviewed, its error rate is unknown, and it is not generally accepted in the reconstruction community.",
        "explanation": "The trial court must act as a Rule 702 gatekeeper. Unknown error rate, no peer review, no general acceptance, and no showing that the model was reliably applied give the court a strong basis to find the reliability foundation missing.",
        "citation": "Daubert v. Merrell Dow Pharms., Inc., 509 U.S. 579 (1993); Kumho Tire Co. v. Carmichael, 526 U.S. 137 (1999)",
        "correctRuling": "grant",
        "ruling": {
          "grant": "expert struck",
          "deny": "expert allowed"
        },
        "consequence": {
          "grant": "Expert excluded. The proponent has not shown the proprietary model is reliable or reliably applied.",
          "deny": "An expert using an untested and unvalidated private model reaches the jury unchecked."
        },
        "repEffect": {
          "grant": 12,
          "deny": -14
        },
        "id": "evidence-024",
        "legacyTitles": [
          "Motion to Strike Expert — Untested Methodology"
        ],
        "topic": "experts",
        "jurisdiction": "U.S. federal",
        "lastReviewed": null,
        "ambiguous": false,
        "ambiguityReason": null,
        "authorities": [
          {
            "label": "Opinion · 509 U.S. 579",
            "url": "https://www.law.cornell.edu/supremecourt/text/509/579"
          },
          {
            "label": "Opinion · 526 U.S. 137",
            "url": "https://www.law.cornell.edu/supremecourt/text/526/137"
          }
        ]
      },
      {
        "title": "Motion to Quash — Work Product Doctrine",
        "difficulty": "hard",
        "party": "defendant",
        "flavor": "Plaintiff subpoenas a post-spill memo prepared by defendant's general counsel summarizing interviews with plant workers, written after litigation was anticipated. Plaintiff already has access to the underlying witness accounts through depositions.",
        "explanation": "Materials prepared in anticipation of litigation by or for a party's attorney are protected work product, especially when the requesting party can obtain the underlying facts elsewhere.",
        "citation": "Fed. R. Civ. P. 26(b)(3); Hickman v. Taylor, 329 U.S. 495 (1947)",
        "correctRuling": "grant",
        "ruling": {
          "grant": "subpoena quashed",
          "deny": "memo produced"
        },
        "consequence": {
          "grant": "Subpoena quashed. The memo is opinion work product and the facts are available through depositions.",
          "deny": "Counsel's mental impressions in a litigation-prep memo are exposed to opposing counsel."
        },
        "repEffect": {
          "grant": 10,
          "deny": -14
        },
        "id": "evidence-025",
        "legacyTitles": [
          "Motion to Quash — Work Product Doctrine"
        ],
        "topic": "privilege",
        "jurisdiction": "U.S. federal",
        "lastReviewed": null,
        "ambiguous": false,
        "ambiguityReason": null,
        "authorities": [
          {
            "label": "Opinion · 329 U.S. 495",
            "url": "https://www.law.cornell.edu/supremecourt/text/329/495"
          },
          {
            "label": "Civil Procedure Rule 26",
            "url": "https://www.law.cornell.edu/rules/frcp/rule_26"
          }
        ]
      },
      {
        "title": "Motion to Admit Prior Consistent Statement — Timing Flaw",
        "difficulty": "hard",
        "party": "prosecution",
        "flavor": "Defense argues the witness invented her story for personal gain. The prosecution offers a statement the witness made three days AFTER she had already retained a personal-injury attorney in connection with the same events.",
        "explanation": "A prior consistent statement only rebuts a fabrication charge if it was made before the motive to fabricate arose. A statement made after the witness retained counsel on the same matter does not qualify.",
        "citation": "Fed. R. Evid. 801(d)(1)(B); Tome v. United States, 513 U.S. 150 (1995)",
        "correctRuling": "deny",
        "ruling": {
          "grant": "statement admitted",
          "deny": "statement excluded"
        },
        "consequence": {
          "grant": "A post-motive statement comes in as if it were independent corroboration. It is not.",
          "deny": "Correctly excluded. The statement postdates the alleged motive and cannot rebut the fabrication claim."
        },
        "repEffect": {
          "grant": -12,
          "deny": 10
        },
        "id": "evidence-026",
        "legacyTitles": [
          "Motion to Admit Prior Consistent Statement — Timing Flaw"
        ],
        "topic": "hearsay",
        "jurisdiction": "U.S. federal",
        "lastReviewed": null,
        "ambiguous": false,
        "ambiguityReason": null,
        "authorities": [
          {
            "label": "Opinion · 513 U.S. 150",
            "url": "https://www.law.cornell.edu/supremecourt/text/513/150"
          },
          {
            "label": "Evidence Rule 801",
            "url": "https://www.law.cornell.edu/rules/fre/rule_801"
          }
        ]
      },
      {
        "title": "Motion to Admit Prior Sexual Assault — Rule 413",
        "difficulty": "hard",
        "party": "prosecution",
        "flavor": "In a sexual-assault prosecution, the government offers evidence of defendant's prior sexual-assault conviction from seven years ago. Defense argues Rule 404(b) bars propensity use. Prosecution invokes Rule 413, with notice properly given, and the prior act is supported by the conviction.",
        "explanation": "Rule 413 carves out an explicit exception to the general propensity ban: in sexual-assault prosecutions, evidence of a defendant's prior sexual assaults is admissible 'on any matter to which it is relevant,' including propensity, subject only to Rule 403.",
        "citation": "Fed. R. Evid. 413; see also Fed. R. Evid. 403",
        "correctRuling": "grant",
        "ruling": {
          "grant": "prior admitted",
          "deny": "prior excluded"
        },
        "consequence": {
          "grant": "Prior assault admitted. Rule 413 expressly permits this propensity use, subject to 403 balancing.",
          "deny": "Rule 413's express exception is erased and the prior assault is excluded under a generic 404(b) theory."
        },
        "repEffect": {
          "grant": 10,
          "deny": -12
        },
        "id": "evidence-027",
        "legacyTitles": [
          "Motion to Admit Prior Sexual Assault — Rule 413"
        ],
        "topic": "character",
        "jurisdiction": "U.S. federal",
        "lastReviewed": null,
        "ambiguous": false,
        "ambiguityReason": null,
        "authorities": [
          {
            "label": "Evidence Rule 413",
            "url": "https://www.law.cornell.edu/rules/fre/rule_413"
          },
          {
            "label": "Evidence Rule 403",
            "url": "https://www.law.cornell.edu/rules/fre/rule_403"
          }
        ]
      },
      {
        "title": "Motion Under Rule 609(a)(1)(B) — Prior Felony Against Defendant",
        "difficulty": "hard",
        "party": "defendant",
        "flavor": "Defendant takes the stand in a robbery case. Prosecution seeks to impeach with defendant's six-year-old grand-theft-auto conviction, which does not directly involve a dishonest statement. Defense argues prejudice because the theft prior closely resembles the charged conduct.",
        "explanation": "For non-dishonesty felonies offered against a criminal defendant-witness, the court must affirmatively find probative value outweighs prejudicial effect — the reverse of the standard 403 balance. Similar-conduct priors get heavy scrutiny.",
        "citation": "Fed. R. Evid. 609(a)(1)(B)",
        "correctRuling": "grant",
        "ruling": {
          "grant": "conviction excluded",
          "deny": "conviction admitted"
        },
        "consequence": {
          "grant": "Prior conviction excluded. Similarity to the charged offense amplifies prejudice beyond its impeachment value.",
          "deny": "A highly similar prior comes in despite the heightened 609(a)(1)(B) balance weighing against the defendant."
        },
        "repEffect": {
          "grant": 10,
          "deny": -12
        },
        "id": "evidence-028",
        "legacyTitles": [
          "Motion Under Rule 609(a)(1)(B) — Prior Felony Against Defendant"
        ],
        "topic": "character",
        "jurisdiction": "U.S. federal",
        "lastReviewed": null,
        "ambiguous": false,
        "ambiguityReason": null,
        "authorities": [
          {
            "label": "Evidence Rule 609",
            "url": "https://www.law.cornell.edu/rules/fre/rule_609"
          }
        ]
      },
      {
        "title": "Motion to Admit Prior Perjury for Impeachment",
        "difficulty": "medium",
        "party": "prosecution",
        "flavor": "Defendant has an eight-year-old perjury conviction. Prosecution seeks to use it for impeachment when defendant testifies. Defense argues prejudice; prosecution notes that perjury is a crime of dishonesty and the conviction is well within the ten-year window.",
        "explanation": "For any witness, evidence of a conviction for a crime involving dishonesty or false statement must be admitted to impeach under Rule 609(a)(2) — this is mandatory and not subject to Rule 403 balancing, so long as the conviction is within the ten-year window of Rule 609(b).",
        "citation": "Fed. R. Evid. 609(a)(2), (b)",
        "correctRuling": "grant",
        "ruling": {
          "grant": "perjury admitted",
          "deny": "perjury excluded"
        },
        "consequence": {
          "grant": "Motion granted. Perjury is a textbook 609(a)(2) crime of dishonesty; admission within ten years is mandatory.",
          "deny": "A prior perjury conviction — the paradigm dishonesty crime — is kept from the jury inside the ten-year window."
        },
        "repEffect": {
          "grant": 10,
          "deny": -12
        },
        "id": "evidence-029",
        "legacyTitles": [
          "Motion to Admit Prior Perjury for Impeachment"
        ],
        "topic": "character",
        "jurisdiction": "U.S. federal",
        "lastReviewed": null,
        "ambiguous": false,
        "ambiguityReason": null,
        "authorities": [
          {
            "label": "Evidence Rule 609",
            "url": "https://www.law.cornell.edu/rules/fre/rule_609"
          }
        ]
      },
      {
        "title": "Motion to Admit Prior Fraud to Prove Intent",
        "difficulty": "hard",
        "ambiguous": true,
        "party": "prosecution",
        "flavor": "In a wire-fraud prosecution, the government offers defendant's five-year-old insurance-fraud conviction to prove intent and absence of mistake. Both involved deliberate misrepresentation, but one used false billing and the other fabricated invoices.",
        "explanation": "Rule 404(b) permits prior bad acts to prove intent, but courts scrutinize the degree of similarity required. Partially analogous fraud schemes cut both ways, and the line between proper intent evidence and forbidden propensity reasoning is genuinely contested.",
        "citation": "Fed. R. Evid. 404(b)",
        "correctRuling": "either",
        "ruling": {
          "grant": "prior admitted",
          "deny": "prior excluded"
        },
        "consequence": {
          "grant": "Prior acts admitted. The common thread of deliberate deception is sufficient to prove intent.",
          "deny": "The schemes are too different. The risk of propensity reasoning outweighs the probative value."
        },
        "repEffect": {
          "grant": 5,
          "deny": 5
        },
        "id": "evidence-030",
        "legacyTitles": [
          "Motion to Admit Prior Fraud to Prove Intent"
        ],
        "topic": "character",
        "jurisdiction": "U.S. federal",
        "lastReviewed": null,
        "ambiguityReason": "Rule 404(b) permits prior bad acts to prove intent, but courts scrutinize the degree of similarity required. Partially analogous fraud schemes cut both ways, and the line between proper intent evidence and forbidden propensity reasoning is genuinely contested.",
        "authorities": [
          {
            "label": "Evidence Rule 404",
            "url": "https://www.law.cornell.edu/rules/fre/rule_404"
          }
        ]
      },
      {
        "title": "Motion to Limit Cross-Examination Scope",
        "difficulty": "medium",
        "ambiguous": true,
        "party": "defendant",
        "flavor": "On direct examination, the witness testified only about events on a single day. Defense seeks to cross-examine on a broader six-month period leading up to that day, arguing the context is necessary to challenge credibility. Plaintiff objects the cross exceeds the scope of direct.",
        "explanation": "Courts have broad discretion over the scope of cross-examination. Whether a broader chronological context is within the 'subject matter of direct examination' is genuinely fact-specific, and courts reach different outcomes on similar records.",
        "citation": "Fed. R. Evid. 611(b)",
        "correctRuling": "either",
        "ruling": {
          "grant": "cross limited",
          "deny": "cross permitted"
        },
        "consequence": {
          "grant": "Cross-examination limited. The broader period goes beyond what direct examination opened.",
          "deny": "Broader cross permitted. The context the defense seeks is fairly within the subject matter of the direct."
        },
        "repEffect": {
          "grant": 5,
          "deny": 5
        },
        "id": "evidence-031",
        "legacyTitles": [
          "Motion to Limit Cross-Examination Scope"
        ],
        "topic": "character",
        "jurisdiction": "U.S. federal",
        "lastReviewed": null,
        "ambiguityReason": "Courts have broad discretion over the scope of cross-examination. Whether a broader chronological context is within the 'subject matter of direct examination' is genuinely fact-specific, and courts reach different outcomes on similar records.",
        "authorities": [
          {
            "label": "Evidence Rule 611",
            "url": "https://www.law.cornell.edu/rules/fre/rule_611"
          }
        ]
      },
      {
        "title": "Motion to Admit Public Records — Police Report Findings",
        "difficulty": "medium",
        "ambiguous": true,
        "party": "plaintiff",
        "flavor": "In a civil dram-shop case, plaintiff offers a police accident report containing the officer's factual findings about skid marks and point of impact, alongside his opinion that the bar 'probably overserved' the driver. Defense challenges the opinion portion and the report as a whole.",
        "explanation": "In civil cases, public investigative findings may be admissible under FRE 803(8) even when they include evaluative conclusions, if they are trustworthy. But a police officer's accident-scene findings are easier to admit than an opinion that a bar 'probably overserved' the driver, which may exceed the officer's foundation.",
        "citation": "Fed. R. Evid. 803(8); Beech Aircraft Corp. v. Rainey, 488 U.S. 153 (1988)",
        "correctRuling": "either",
        "ruling": {
          "grant": "report admitted",
          "deny": "opinion redacted"
        },
        "consequence": {
          "grant": "Report admitted with opinion. The officer's findings are investigative conclusions the Rule contemplates.",
          "deny": "Report admitted only after redacting the 'overserving' opinion as beyond factual findings."
        },
        "repEffect": {
          "grant": 5,
          "deny": 5
        },
        "id": "evidence-032",
        "legacyTitles": [
          "Motion to Admit Public Records — Police Report Findings"
        ],
        "topic": "hearsay",
        "jurisdiction": "U.S. federal",
        "lastReviewed": null,
        "ambiguityReason": "In civil cases, public investigative findings may be admissible under FRE 803(8) even when they include evaluative conclusions, if they are trustworthy. But a police officer's accident-scene findings are easier to admit than an opinion that a bar 'probably overserved' the driver, which may exceed the officer's foundation.",
        "authorities": [
          {
            "label": "Opinion · 488 U.S. 153",
            "url": "https://www.law.cornell.edu/supremecourt/text/488/153"
          },
          {
            "label": "Evidence Rule 803",
            "url": "https://www.law.cornell.edu/rules/fre/rule_803"
          }
        ]
      }
    ]
  },
  "crimPro": {
    "name": "CRIMINAL PROCEDURE",
    "headerClass": "cr",
    "cardClass": "cr-card",
    "motions": [
      {
        "title": "Motion to Suppress — Warrantless Vehicle Search",
        "difficulty": "easy",
        "party": "defendant",
        "flavor": "Officers stopped defendant for a broken taillight, then searched the trunk. Defendant refused consent. Officers noted no smell, no visible contraband, no flight, and no other articulable facts suggesting criminal activity beyond the traffic infraction.",
        "explanation": "A warrantless vehicle search requires probable cause, consent, or a recognized exception. An undeveloped record with no supporting facts satisfies none of them.",
        "citation": "California v. Acevedo, 500 U.S. 565 (1991); U.S. Const. amend. IV",
        "correctRuling": "grant",
        "ruling": {
          "grant": "evidence suppressed",
          "deny": "search upheld"
        },
        "consequence": {
          "grant": "Evidence suppressed. No warrant exception was established on these facts.",
          "deny": "A baseless warrantless search is allowed to stand."
        },
        "repEffect": {
          "grant": 10,
          "deny": -15
        },
        "id": "crimPro-001",
        "legacyTitles": [
          "Motion to Suppress — Warrantless Vehicle Search"
        ],
        "topic": "fourthA",
        "jurisdiction": "U.S. federal",
        "lastReviewed": null,
        "ambiguous": false,
        "ambiguityReason": null,
        "authorities": [
          {
            "label": "Opinion · 500 U.S. 565",
            "url": "https://www.law.cornell.edu/supremecourt/text/500/565"
          },
          {
            "label": "Constitution · Amendment IV",
            "url": "https://www.law.cornell.edu/constitution/amendment4"
          }
        ]
      },
      {
        "title": "Motion to Suppress — Miranda Violation",
        "difficulty": "easy",
        "party": "defendant",
        "flavor": "Officers handcuffed defendant, placed him in a patrol car, and interrogated him for two hours without reading Miranda warnings. They now seek to use his confession in their case-in-chief.",
        "explanation": "Statements obtained during custodial interrogation without Miranda warnings are generally inadmissible in the prosecution's case-in-chief.",
        "citation": "Miranda v. Arizona, 384 U.S. 436 (1966)",
        "correctRuling": "grant",
        "ruling": {
          "grant": "confession suppressed",
          "deny": "confession admitted"
        },
        "consequence": {
          "grant": "Confession suppressed. Custodial interrogation without Miranda warnings is a clear violation.",
          "deny": "An unwarned custodial confession enters the prosecution's case-in-chief."
        },
        "repEffect": {
          "grant": 12,
          "deny": -16
        },
        "id": "crimPro-002",
        "legacyTitles": [
          "Motion to Suppress — Miranda Violation"
        ],
        "topic": "fifthA",
        "jurisdiction": "U.S. federal",
        "lastReviewed": null,
        "ambiguous": false,
        "ambiguityReason": null,
        "authorities": [
          {
            "label": "Opinion · 384 U.S. 436",
            "url": "https://www.law.cornell.edu/supremecourt/text/384/436"
          }
        ]
      },
      {
        "title": "Motion in Limine — Admit Cell Phone Contents",
        "difficulty": "easy",
        "party": "prosecution",
        "flavor": "After arresting defendant for shoplifting, officers took his phone to the station and searched through his texts and photos without obtaining a warrant. Finding messages relevant to an unrelated drug operation, the prosecution now moves pretrial to admit the phone contents.",
        "explanation": "A search of a cell phone's digital contents incident to arrest requires a warrant absent exigent circumstances, even if the phone itself is lawfully seized.",
        "citation": "Riley v. California, 573 U.S. 373 (2014)",
        "correctRuling": "deny",
        "ruling": {
          "grant": "phone data admitted",
          "deny": "phone data suppressed"
        },
        "consequence": {
          "grant": "A warrantless search of a secured phone's contents is upheld without exigency.",
          "deny": "Motion denied. A warrant was required to search the phone's digital contents under Riley."
        },
        "repEffect": {
          "grant": -16,
          "deny": 12
        },
        "id": "crimPro-003",
        "legacyTitles": [
          "Motion in Limine — Admit Cell Phone Contents"
        ],
        "topic": "fourthA",
        "jurisdiction": "U.S. federal",
        "lastReviewed": null,
        "ambiguous": false,
        "ambiguityReason": null,
        "authorities": [
          {
            "label": "Opinion · 573 U.S. 373",
            "url": "https://www.law.cornell.edu/supremecourt/text/573/373"
          }
        ]
      },
      {
        "title": "Motion to Suppress — Terry Stop Challenge",
        "difficulty": "easy",
        "party": "defendant",
        "flavor": "An officer observed defendant in a high-crime area at night, making repeated hand-to-hand exchanges consistent with drug sales as described in a recent officer briefing. When the officer approached, defendant reached toward his waistband.",
        "explanation": "A brief investigatory stop is permissible when an officer has a reasonable, articulable suspicion that criminal activity is afoot, based on specific observed facts.",
        "citation": "Terry v. Ohio, 392 U.S. 1 (1968)",
        "correctRuling": "deny",
        "ruling": {
          "grant": "stop suppressed",
          "deny": "stop upheld"
        },
        "consequence": {
          "grant": "A stop supported by specific articulable suspicion is suppressed.",
          "deny": "Motion denied. Specific observed facts gave rise to reasonable suspicion."
        },
        "repEffect": {
          "grant": -12,
          "deny": 10
        },
        "id": "crimPro-004",
        "legacyTitles": [
          "Motion to Suppress — Terry Stop Challenge"
        ],
        "topic": "fourthA",
        "jurisdiction": "U.S. federal",
        "lastReviewed": null,
        "ambiguous": false,
        "ambiguityReason": null,
        "authorities": [
          {
            "label": "Opinion · 392 U.S. 1",
            "url": "https://www.law.cornell.edu/supremecourt/text/392/1"
          }
        ]
      },
      {
        "title": "Motion to Suppress — Vehicle Search Incident to Arrest",
        "difficulty": "easy",
        "party": "defendant",
        "flavor": "Officers arrested defendant for driving on a suspended license and secured him, handcuffed, in the back of the patrol car. With defendant no longer within reach of the passenger compartment, officers then searched the car and found a gun under the seat.",
        "explanation": "Under Gant, police may search a vehicle incident to arrest only if the arrestee is unsecured and within reaching distance of the compartment, or it is reasonable to believe the vehicle contains evidence of the arrest offense. A secured arrestee and an arrest for driving on a suspended license — an offense with no evidence typically found inside the car — satisfies neither prong.",
        "citation": "Arizona v. Gant, 556 U.S. 332 (2009)",
        "correctRuling": "grant",
        "ruling": {
          "grant": "evidence suppressed",
          "deny": "search upheld"
        },
        "consequence": {
          "grant": "Motion granted. With defendant secured and no evidence of the license offense to be found in the car, Gant requires suppression.",
          "deny": "A search of a secured arrestee's car — for an offense that leaves no in-car evidence — is upheld in plain violation of Gant."
        },
        "repEffect": {
          "grant": 10,
          "deny": -12
        },
        "id": "crimPro-005",
        "legacyTitles": [
          "Motion to Suppress — Vehicle Search Incident to Arrest"
        ],
        "topic": "fourthA",
        "jurisdiction": "U.S. federal",
        "lastReviewed": null,
        "ambiguous": false,
        "ambiguityReason": null,
        "authorities": [
          {
            "label": "Opinion · 556 U.S. 332",
            "url": "https://www.law.cornell.edu/supremecourt/text/556/332"
          }
        ]
      },
      {
        "title": "Motion to Dismiss — Right to Counsel Denied",
        "difficulty": "easy",
        "party": "defendant",
        "flavor": "Defendant was charged with felony fraud and appeared for trial unrepresented. The record shows he requested appointed counsel, the request was never ruled on, and no waiver was obtained before trial proceeded.",
        "explanation": "Indigent defendants facing felony charges have a Sixth Amendment right to appointed counsel. Proceeding to trial without a knowing and voluntary waiver is constitutional error.",
        "citation": "Gideon v. Wainwright, 372 U.S. 335 (1963)",
        "correctRuling": "grant",
        "ruling": {
          "grant": "conviction vacated",
          "deny": "conviction stands"
        },
        "consequence": {
          "grant": "Conviction vacated. The defendant was denied his fundamental right to counsel.",
          "deny": "A felony trial proceeds without counsel and without a valid waiver."
        },
        "repEffect": {
          "grant": 12,
          "deny": -18
        },
        "id": "crimPro-006",
        "legacyTitles": [
          "Motion to Dismiss — Right to Counsel Denied"
        ],
        "topic": "sixthA",
        "jurisdiction": "U.S. federal",
        "lastReviewed": null,
        "ambiguous": false,
        "ambiguityReason": null,
        "authorities": [
          {
            "label": "Opinion · 372 U.S. 335",
            "url": "https://www.law.cornell.edu/supremecourt/text/372/335"
          }
        ]
      },
      {
        "title": "Motion to Suppress — Warrantless Vehicle Search (Carroll)",
        "difficulty": "easy",
        "party": "defendant",
        "flavor": "Officers developed probable cause — a verified tip, observed hand-off, and visible narcotics packaging through the window — that defendant's readily mobile vehicle contained drugs. They searched it on the roadside without a warrant.",
        "explanation": "Under the automobile exception, officers may search a vehicle without a warrant when they have probable cause to believe it contains evidence of a crime, given its ready mobility and the reduced expectation of privacy in automobiles.",
        "citation": "Carroll v. United States, 267 U.S. 132 (1925); California v. Acevedo, 500 U.S. 565 (1991)",
        "correctRuling": "deny",
        "ruling": {
          "grant": "search suppressed",
          "deny": "search upheld"
        },
        "consequence": {
          "grant": "Search suppressed despite textbook probable cause under the automobile exception.",
          "deny": "Motion denied. Probable cause plus ready mobility justifies the warrantless vehicle search."
        },
        "repEffect": {
          "grant": -10,
          "deny": 10
        },
        "id": "crimPro-007",
        "legacyTitles": [
          "Motion to Suppress — Warrantless Vehicle Search (Carroll)"
        ],
        "topic": "fourthA",
        "jurisdiction": "U.S. federal",
        "lastReviewed": null,
        "ambiguous": false,
        "ambiguityReason": null,
        "authorities": [
          {
            "label": "Opinion · 267 U.S. 132",
            "url": "https://www.law.cornell.edu/supremecourt/text/267/132"
          },
          {
            "label": "Opinion · 500 U.S. 565",
            "url": "https://www.law.cornell.edu/supremecourt/text/500/565"
          }
        ]
      },
      {
        "title": "Motion to Suppress — Terry Frisk Beyond Weapons",
        "difficulty": "easy",
        "party": "defendant",
        "flavor": "During a valid Terry stop, an officer patted defendant down. Feeling a small lump through the fabric that was plainly not a weapon, the officer continued manipulating it with his fingers for several seconds to identify it before removing a bag of cocaine.",
        "explanation": "A Terry frisk is limited to a search for weapons. Prolonged manipulation of an object already determined not to be a weapon exceeds the permissible scope of the frisk and is not saved by plain-feel.",
        "citation": "Terry v. Ohio, 392 U.S. 1 (1968); Minnesota v. Dickerson, 508 U.S. 366 (1993)",
        "correctRuling": "grant",
        "ruling": {
          "grant": "contraband suppressed",
          "deny": "contraband admitted"
        },
        "consequence": {
          "grant": "Contraband suppressed. The manipulation went beyond a weapons pat-down permitted by Terry.",
          "deny": "A search that clearly exceeded the weapons-only scope of a Terry frisk is upheld."
        },
        "repEffect": {
          "grant": 10,
          "deny": -12
        },
        "id": "crimPro-008",
        "legacyTitles": [
          "Motion to Suppress — Terry Frisk Beyond Weapons"
        ],
        "topic": "fifthA",
        "jurisdiction": "U.S. federal",
        "lastReviewed": null,
        "ambiguous": false,
        "ambiguityReason": null,
        "authorities": [
          {
            "label": "Opinion · 392 U.S. 1",
            "url": "https://www.law.cornell.edu/supremecourt/text/392/1"
          },
          {
            "label": "Opinion · 508 U.S. 366",
            "url": "https://www.law.cornell.edu/supremecourt/text/508/366"
          }
        ]
      },
      {
        "title": "Motion to Suppress — Good Faith Exception",
        "difficulty": "medium",
        "party": "defendant",
        "flavor": "Officers executed a search based on a warrant that turned out to be defective because a magistrate erroneously found probable cause based on a stale affidavit. Officers had no reason to doubt the warrant's validity at the time of the search.",
        "explanation": "Evidence is not suppressed when officers act in objectively reasonable reliance on a warrant they had no reason to believe was defective. Leon does not apply if the affidavit is knowingly or recklessly false, the magistrate abandons neutrality, the warrant is facially deficient, or the affidavit is so bare that reliance is unreasonable.",
        "citation": "United States v. Leon, 468 U.S. 897 (1984)",
        "correctRuling": "deny",
        "ruling": {
          "grant": "evidence suppressed",
          "deny": "evidence admitted"
        },
        "consequence": {
          "grant": "Evidence suppressed despite officers' good-faith reliance on a facially valid warrant.",
          "deny": "Motion denied. None of Leon's limits applies, so objectively reasonable reliance on the warrant avoids suppression."
        },
        "repEffect": {
          "grant": -12,
          "deny": 10
        },
        "id": "crimPro-009",
        "legacyTitles": [
          "Motion to Suppress — Good Faith Exception"
        ],
        "topic": "fourthA",
        "jurisdiction": "U.S. federal",
        "lastReviewed": null,
        "ambiguous": false,
        "ambiguityReason": null,
        "authorities": [
          {
            "label": "Opinion · 468 U.S. 897",
            "url": "https://www.law.cornell.edu/supremecourt/text/468/897"
          }
        ]
      },
      {
        "title": "Motion in Limine — Admit Derivative Evidence",
        "difficulty": "medium",
        "party": "prosecution",
        "flavor": "Officers conducted an illegal warrantless search of defendant's apartment. During the search they found a storage unit key. They then obtained a warrant for the storage unit — citing the key as the basis — and found the stolen merchandise there. Prosecution moves to admit the storage-unit evidence.",
        "explanation": "Evidence derived from an unconstitutional search is tainted as fruit of the poisonous tree and is generally inadmissible, unless the connection to the illegality is sufficiently attenuated.",
        "citation": "Wong Sun v. United States, 371 U.S. 471 (1963)",
        "correctRuling": "deny",
        "ruling": {
          "grant": "evidence admitted",
          "deny": "evidence suppressed"
        },
        "consequence": {
          "grant": "Tainted evidence is admitted despite a direct causal link to the illegal search.",
          "deny": "Motion denied. The storage-unit evidence derived directly from the unlawful entry — classic fruit of the poisonous tree."
        },
        "repEffect": {
          "grant": -14,
          "deny": 12
        },
        "id": "crimPro-010",
        "legacyTitles": [
          "Motion in Limine — Admit Derivative Evidence"
        ],
        "topic": "fourthA",
        "jurisdiction": "U.S. federal",
        "lastReviewed": null,
        "ambiguous": false,
        "ambiguityReason": null,
        "authorities": [
          {
            "label": "Opinion · 371 U.S. 471",
            "url": "https://www.law.cornell.edu/supremecourt/text/371/471"
          }
        ]
      },
      {
        "title": "Motion to Dismiss — Double Jeopardy",
        "difficulty": "medium",
        "party": "defendant",
        "flavor": "Defendant was acquitted of armed robbery of a convenience store. Prosecutors have now refiled charges for 'theft by force' under a different statutory section. The new charge requires no element beyond the robbery offense tried in the first case.",
        "explanation": "Two offenses are the 'same' for double jeopardy purposes unless each requires proof of an element the other does not. Recharging a same offense or lesser-included offense under a new label does not avoid the bar.",
        "citation": "Blockburger v. United States, 284 U.S. 299 (1932); Gamble v. United States, 587 U.S. 678 (2019); U.S. Const. amend. V",
        "correctRuling": "grant",
        "ruling": {
          "grant": "prosecution barred",
          "deny": "prosecution proceeds"
        },
        "consequence": {
          "grant": "Prosecution barred. The new charge is the same offense or a lesser-included offense dressed in different statutory language.",
          "deny": "Reprosecution proceeds on a charge that requires no additional element after an acquittal."
        },
        "repEffect": {
          "grant": 12,
          "deny": -16
        },
        "id": "crimPro-011",
        "legacyTitles": [
          "Motion to Dismiss — Double Jeopardy"
        ],
        "topic": "fifthA",
        "jurisdiction": "U.S. federal",
        "lastReviewed": null,
        "ambiguous": false,
        "ambiguityReason": null,
        "authorities": [
          {
            "label": "Opinion · 284 U.S. 299",
            "url": "https://www.law.cornell.edu/supremecourt/text/284/299"
          },
          {
            "label": "Opinion · 587 U.S. 678",
            "url": "https://www.law.cornell.edu/supremecourt/text/587/678"
          },
          {
            "label": "Constitution · Amendment V",
            "url": "https://www.law.cornell.edu/constitution/amendment5"
          }
        ]
      },
      {
        "title": "Motion to Suppress Stop — Flight in High-Crime Area",
        "difficulty": "medium",
        "party": "defendant",
        "flavor": "Officers in a marked squad car drove slowly through an area known for heavy narcotics activity. Defendant looked directly at the officers and immediately ran. An officer gave chase, stopped defendant, and found a weapon.",
        "explanation": "Unprovoked headlong flight after noticing police, combined with presence in an area known for heavy narcotics activity, supported reasonable suspicion in Wardlow. The location alone would not be enough, but these facts together justify the stop.",
        "citation": "Illinois v. Wardlow, 528 U.S. 119 (2000)",
        "correctRuling": "deny",
        "ruling": {
          "grant": "stop suppressed",
          "deny": "stop upheld"
        },
        "consequence": {
          "grant": "The stop is suppressed despite flight in a high-crime area contributing to reasonable suspicion.",
          "deny": "Motion denied. Unprovoked flight from officers in a known drug area supported reasonable suspicion."
        },
        "repEffect": {
          "grant": -10,
          "deny": 10
        },
        "id": "crimPro-012",
        "legacyTitles": [
          "Motion to Suppress Stop — Flight in High-Crime Area"
        ],
        "topic": "fourthA",
        "jurisdiction": "U.S. federal",
        "lastReviewed": null,
        "ambiguous": false,
        "ambiguityReason": null,
        "authorities": [
          {
            "label": "Opinion · 528 U.S. 119",
            "url": "https://www.law.cornell.edu/supremecourt/text/528/119"
          }
        ]
      },
      {
        "title": "Motion to Suppress — Thermal Imaging of Home",
        "difficulty": "medium",
        "party": "defendant",
        "flavor": "Without a warrant, federal agents parked across the street from defendant's house and used a thermal-imaging device to detect unusual heat patterns consistent with marijuana cultivation. The imagery formed the basis for a search warrant.",
        "explanation": "Using sense-enhancing technology to gather information about the interior of a home that could not otherwise be obtained without physical intrusion constitutes a Fourth Amendment search.",
        "citation": "Kyllo v. United States, 533 U.S. 27 (2001)",
        "correctRuling": "grant",
        "ruling": {
          "grant": "warrant suppressed",
          "deny": "warrant upheld"
        },
        "consequence": {
          "grant": "Evidence suppressed. The warrantless thermal imaging of a home was an unconstitutional search.",
          "deny": "A warrantless peek into the home through technology is treated as no search at all."
        },
        "repEffect": {
          "grant": 12,
          "deny": -14
        },
        "id": "crimPro-013",
        "legacyTitles": [
          "Motion to Suppress — Thermal Imaging of Home"
        ],
        "topic": "fourthA",
        "jurisdiction": "U.S. federal",
        "lastReviewed": null,
        "ambiguous": false,
        "ambiguityReason": null,
        "authorities": [
          {
            "label": "Opinion · 533 U.S. 27",
            "url": "https://www.law.cornell.edu/supremecourt/text/533/27"
          }
        ]
      },
      {
        "title": "Motion to Dismiss — Speedy Trial",
        "difficulty": "medium",
        "party": "defendant",
        "flavor": "Defendant signed a written speedy-trial waiver nine months ago. Since then, defense counsel sought four continuances totaling six months of delay. No specific prejudice from the current trial date has been identified.",
        "explanation": "The four-factor speedy-trial test weighs length of delay, reason, assertion of the right, and prejudice. A waiver and defense-driven delay heavily undercut the claim on this record.",
        "citation": "Barker v. Wingo, 407 U.S. 514 (1972); U.S. Const. amend. VI",
        "correctRuling": "deny",
        "ruling": {
          "grant": "case dismissed",
          "deny": "case proceeds"
        },
        "consequence": {
          "grant": "Case dismissed despite waiver and predominantly defense-caused delay.",
          "deny": "Motion denied. This record does not support a Sixth Amendment speedy-trial violation."
        },
        "repEffect": {
          "grant": -12,
          "deny": 10
        },
        "id": "crimPro-014",
        "legacyTitles": [
          "Motion to Dismiss — Speedy Trial"
        ],
        "topic": "sixthA",
        "jurisdiction": "U.S. federal",
        "lastReviewed": null,
        "ambiguous": false,
        "ambiguityReason": null,
        "authorities": [
          {
            "label": "Opinion · 407 U.S. 514",
            "url": "https://www.law.cornell.edu/supremecourt/text/407/514"
          },
          {
            "label": "Constitution · Amendment VI",
            "url": "https://www.law.cornell.edu/constitution/amendment6"
          }
        ]
      },
      {
        "title": "Motion in Limine — Admit Warrant Obtained After Dog Sniff",
        "difficulty": "medium",
        "party": "prosecution",
        "flavor": "Without a warrant, officers brought a drug-detection dog onto defendant's front porch and had it sniff the front door. The dog alerted, which formed the basis for a subsequent search warrant. Prosecution moves pretrial to admit the warrant-based evidence.",
        "explanation": "The front porch is part of the curtilage — the area around the home receiving Fourth Amendment protection. Bringing a trained drug dog onto the curtilage to investigate is a search requiring a warrant.",
        "citation": "Florida v. Jardines, 569 U.S. 1 (2013)",
        "correctRuling": "deny",
        "ruling": {
          "grant": "evidence admitted",
          "deny": "evidence suppressed"
        },
        "consequence": {
          "grant": "A warrantless curtilage intrusion with a trained dog is treated as if no search occurred.",
          "deny": "Motion denied. A physical intrusion onto the curtilage with a drug dog is a Fourth Amendment search under Jardines."
        },
        "repEffect": {
          "grant": -14,
          "deny": 12
        },
        "id": "crimPro-015",
        "legacyTitles": [
          "Motion in Limine — Admit Warrant Obtained After Dog Sniff"
        ],
        "topic": "fourthA",
        "jurisdiction": "U.S. federal",
        "lastReviewed": null,
        "ambiguous": false,
        "ambiguityReason": null,
        "authorities": [
          {
            "label": "Opinion · 569 U.S. 1",
            "url": "https://www.law.cornell.edu/supremecourt/text/569/1"
          }
        ]
      },
      {
        "title": "Motion in Limine — Admit Cell-Site Location Records",
        "difficulty": "medium",
        "party": "prosecution",
        "flavor": "Investigators obtained 127 days of defendant's cell-site location information from his wireless carrier using only a court order supported by 'specific and articulable facts' — not a warrant supported by probable cause. Prosecution moves to admit the CSLI at trial.",
        "explanation": "Comprehensive historical cell-site location information is subject to a reasonable expectation of privacy. The government must generally obtain a warrant supported by probable cause to access it — the third-party doctrine does not supply the answer.",
        "citation": "Carpenter v. United States, 138 S. Ct. 2206 (2018)",
        "correctRuling": "deny",
        "ruling": {
          "grant": "CSLI admitted",
          "deny": "CSLI suppressed"
        },
        "consequence": {
          "grant": "Months of historical location tracking come in without the warrant Carpenter requires.",
          "deny": "Motion denied. Long-term CSLI requires a warrant under Carpenter."
        },
        "repEffect": {
          "grant": -14,
          "deny": 12
        },
        "id": "crimPro-016",
        "legacyTitles": [
          "Motion in Limine — Admit Cell-Site Location Records"
        ],
        "topic": "fourthA",
        "jurisdiction": "U.S. federal",
        "lastReviewed": null,
        "ambiguous": false,
        "ambiguityReason": null,
        "authorities": [
          {
            "label": "Carpenter opinion",
            "url": "https://www.law.cornell.edu/supremecourt/text/16-402"
          }
        ]
      },
      {
        "title": "Motion in Limine — Admit Drugs Found After Dog Sniff",
        "difficulty": "medium",
        "party": "prosecution",
        "flavor": "After completing a routine traffic ticket, an officer held defendant on the roadside for an additional seven to eight minutes — absent any additional suspicion — waiting for a drug-detection dog to arrive. The dog alerted and drugs were found. Prosecution moves to admit the drugs at trial.",
        "explanation": "A traffic stop's mission — addressing the violation that warranted the stop — defines its permissible duration. Extending the stop beyond that mission to conduct an unrelated drug investigation, without independent reasonable suspicion, violates the Fourth Amendment.",
        "citation": "Rodriguez v. United States, 575 U.S. 348 (2015)",
        "correctRuling": "deny",
        "ruling": {
          "grant": "evidence admitted",
          "deny": "evidence suppressed"
        },
        "consequence": {
          "grant": "A de-facto seizure for an unrelated investigation is waved through without reasonable suspicion.",
          "deny": "Motion denied. Extending the stop past its mission without independent suspicion violates Rodriguez."
        },
        "repEffect": {
          "grant": -14,
          "deny": 12
        },
        "id": "crimPro-017",
        "legacyTitles": [
          "Motion in Limine — Admit Drugs Found After Dog Sniff"
        ],
        "topic": "fourthA",
        "jurisdiction": "U.S. federal",
        "lastReviewed": null,
        "ambiguous": false,
        "ambiguityReason": null,
        "authorities": [
          {
            "label": "Opinion · 575 U.S. 348",
            "url": "https://www.law.cornell.edu/supremecourt/text/575/348"
          }
        ]
      },
      {
        "title": "Motion to Exclude Batson Challenge — Peremptory Strike",
        "difficulty": "medium",
        "party": "defendant",
        "flavor": "The prosecution used peremptory challenges to strike all four Black jurors from the venire. Defense made a Batson objection. Prosecution offered one line: 'I just didn't get a good feeling from them' — nothing specific, no juror-specific questions or answers cited.",
        "explanation": "After a prima facie showing under Batson, the prosecutor must offer a race-neutral explanation. The court must then decide whether that explanation is genuine or instead a pretext for purposeful discrimination. A bare 'gut feeling,' especially after striking all four Black jurors, strongly suggests pretext.",
        "citation": "Batson v. Kentucky, 476 U.S. 79 (1986)",
        "correctRuling": "grant",
        "ruling": {
          "grant": "strikes disallowed",
          "deny": "strikes upheld"
        },
        "consequence": {
          "grant": "Batson violation found. The strikes are disallowed for lack of a genuine race-neutral reason.",
          "deny": "A pattern of race-based strikes is accepted on a bare 'gut feeling' explanation."
        },
        "repEffect": {
          "grant": 14,
          "deny": -16
        },
        "id": "crimPro-018",
        "legacyTitles": [
          "Motion to Exclude Batson Challenge — Peremptory Strike"
        ],
        "topic": "trialAndPlea",
        "jurisdiction": "U.S. federal",
        "lastReviewed": null,
        "ambiguous": false,
        "ambiguityReason": null,
        "authorities": [
          {
            "label": "Opinion · 476 U.S. 79",
            "url": "https://www.law.cornell.edu/supremecourt/text/476/79"
          }
        ]
      },
      {
        "title": "Motion to Admit Suppressed Statement for Impeachment",
        "difficulty": "medium",
        "party": "defendant",
        "flavor": "Defendant's statement was suppressed because Miranda warnings were never given. Defendant then took the stand and testified to a version of events directly contradicting the suppressed statement. Prosecution seeks to use the suppressed statement on cross to impeach him.",
        "explanation": "A statement taken in violation of Miranda (though voluntary) is inadmissible in the prosecution's case-in-chief but may still be used to impeach the defendant if he chooses to testify inconsistently.",
        "citation": "Harris v. New York, 401 U.S. 222 (1971)",
        "correctRuling": "deny",
        "ruling": {
          "grant": "statement excluded",
          "deny": "statement allowed for impeachment"
        },
        "consequence": {
          "grant": "A Miranda-suppressed but voluntary statement is barred even from impeachment use — the wrong result under Harris.",
          "deny": "Motion denied. Harris permits impeachment use of a voluntary Miranda-suppressed statement."
        },
        "repEffect": {
          "grant": -10,
          "deny": 8
        },
        "id": "crimPro-019",
        "legacyTitles": [
          "Motion to Admit Suppressed Statement for Impeachment"
        ],
        "topic": "fifthA",
        "jurisdiction": "U.S. federal",
        "lastReviewed": null,
        "ambiguous": false,
        "ambiguityReason": null,
        "authorities": [
          {
            "label": "Opinion · 401 U.S. 222",
            "url": "https://www.law.cornell.edu/supremecourt/text/401/222"
          }
        ]
      },
      {
        "title": "Motion to Suppress — Ambiguous Miranda Invocation",
        "difficulty": "medium",
        "party": "defendant",
        "flavor": "After Miranda warnings were given and defendant said he understood, he sat silent for nearly three hours of questioning, occasionally shaking his head. He never said 'I want a lawyer' or 'I won't talk.' He eventually answered a question inculpating himself.",
        "explanation": "To cut off custodial questioning, a defendant's invocation of the right to remain silent must be unambiguous. Silence alone, without a clear statement, does not invoke.",
        "citation": "Berghuis v. Thompkins, 560 U.S. 370 (2010)",
        "correctRuling": "deny",
        "ruling": {
          "grant": "statement suppressed",
          "deny": "statement admitted"
        },
        "consequence": {
          "grant": "Statement suppressed on the theory that silence invoked Miranda — contrary to Berghuis.",
          "deny": "Motion denied. Silence without an unambiguous invocation does not halt questioning."
        },
        "repEffect": {
          "grant": -10,
          "deny": 8
        },
        "id": "crimPro-020",
        "legacyTitles": [
          "Motion to Suppress — Ambiguous Miranda Invocation"
        ],
        "topic": "fifthA",
        "jurisdiction": "U.S. federal",
        "lastReviewed": null,
        "ambiguous": false,
        "ambiguityReason": null,
        "authorities": [
          {
            "label": "Opinion · 560 U.S. 370",
            "url": "https://www.law.cornell.edu/supremecourt/text/560/370"
          }
        ]
      },
      {
        "title": "Motion to Suppress — Traffic Stop as Custody",
        "difficulty": "medium",
        "party": "defendant",
        "flavor": "An officer pulled defendant over for speeding. During the brief roadside stop, without Miranda warnings, the officer asked pointed questions about the smell of alcohol and received incriminating answers. The encounter lasted about eight minutes.",
        "explanation": "An ordinary traffic stop is ordinarily not custodial for Miranda purposes. The temporary and public nature of such detentions means a reasonable motorist would not feel subject to the restraints of a formal arrest.",
        "citation": "Berkemer v. McCarty, 468 U.S. 420 (1984)",
        "correctRuling": "deny",
        "ruling": {
          "grant": "statements suppressed",
          "deny": "statements admitted"
        },
        "consequence": {
          "grant": "Roadside answers are suppressed despite the non-custodial nature of the ordinary traffic stop.",
          "deny": "Motion denied. An ordinary traffic stop is not custodial under Berkemer."
        },
        "repEffect": {
          "grant": -10,
          "deny": 8
        },
        "id": "crimPro-021",
        "legacyTitles": [
          "Motion to Suppress — Traffic Stop as Custody"
        ],
        "topic": "fifthA",
        "jurisdiction": "U.S. federal",
        "lastReviewed": null,
        "ambiguous": false,
        "ambiguityReason": null,
        "authorities": [
          {
            "label": "Opinion · 468 U.S. 420",
            "url": "https://www.law.cornell.edu/supremecourt/text/468/420"
          }
        ]
      },
      {
        "title": "Motion for New Trial — Ineffective Assistance",
        "difficulty": "hard",
        "party": "defendant",
        "flavor": "After conviction, defendant shows that trial counsel never contacted three alibi witnesses who would have placed defendant across town at the time of the crime. Security camera footage corroborating the alibi was available. Counsel made no strategic choice not to investigate — he simply did not look.",
        "explanation": "A defendant must show that counsel's performance was deficient and that there is a reasonable probability the outcome would have been different. Failure to investigate available exculpatory witnesses, absent strategic reason, satisfies both prongs.",
        "citation": "Strickland v. Washington, 466 U.S. 668 (1984)",
        "correctRuling": "grant",
        "ruling": {
          "grant": "new trial granted",
          "deny": "conviction stands"
        },
        "consequence": {
          "grant": "New trial granted. The failure to investigate available alibi evidence was prejudicial.",
          "deny": "Conviction stands despite uninvestigated alibi witnesses and corroborating footage."
        },
        "repEffect": {
          "grant": 14,
          "deny": -18
        },
        "id": "crimPro-022",
        "legacyTitles": [
          "Motion for New Trial — Ineffective Assistance"
        ],
        "topic": "sixthA",
        "jurisdiction": "U.S. federal",
        "lastReviewed": null,
        "ambiguous": false,
        "ambiguityReason": null,
        "authorities": [
          {
            "label": "Opinion · 466 U.S. 668",
            "url": "https://www.law.cornell.edu/supremecourt/text/466/668"
          }
        ]
      },
      {
        "title": "Motion to Sever Defendants — Bruton Problem",
        "difficulty": "hard",
        "party": "defendant",
        "flavor": "Two defendants are charged jointly in a robbery. The prosecution plans to play a recorded statement in which Defendant A confesses and explicitly names Defendant B as the getaway driver. Defendant A will not testify. A limiting instruction is proposed.",
        "explanation": "A non-testifying co-defendant's confession that directly implicates the other defendant creates a Confrontation Clause problem in a joint trial that a limiting instruction typically cannot cure.",
        "citation": "Bruton v. United States, 391 U.S. 123 (1968); Crawford v. Washington, 541 U.S. 36 (2004)",
        "correctRuling": "grant",
        "ruling": {
          "grant": "severance granted",
          "deny": "joint trial"
        },
        "consequence": {
          "grant": "Severance granted. The joint trial would create a confrontation problem the instruction cannot cure.",
          "deny": "Trial proceeds with a powerfully incriminating confession that Defendant B cannot cross-examine."
        },
        "repEffect": {
          "grant": 14,
          "deny": -18
        },
        "id": "crimPro-023",
        "legacyTitles": [
          "Motion to Sever Defendants — Bruton Problem"
        ],
        "topic": "sixthA",
        "jurisdiction": "U.S. federal",
        "lastReviewed": null,
        "ambiguous": false,
        "ambiguityReason": null,
        "authorities": [
          {
            "label": "Opinion · 391 U.S. 123",
            "url": "https://www.law.cornell.edu/supremecourt/text/391/123"
          },
          {
            "label": "Opinion · 541 U.S. 36",
            "url": "https://www.law.cornell.edu/supremecourt/text/541/36"
          }
        ]
      },
      {
        "title": "Motion to Suppress — Hot Pursuit Exception",
        "difficulty": "hard",
        "party": "defendant",
        "flavor": "Officers chased an armed-robbery suspect into an apartment building. They heard screaming from a specific unit the suspect had just entered, kicked the door in without a warrant moments later, and arrested the suspect with a weapon still in hand.",
        "explanation": "Hot pursuit of a violent felon, combined with signs of immediate danger inside, can justify a warrantless entry. The urgency must be genuine — not manufactured — and the entry must be closely related to the emergency.",
        "citation": "U.S. Const. amend. IV; exigent circumstances doctrine",
        "correctRuling": "deny",
        "ruling": {
          "grant": "evidence suppressed",
          "deny": "entry upheld"
        },
        "consequence": {
          "grant": "Evidence suppressed despite a genuine hot-pursuit emergency with a violent armed suspect.",
          "deny": "Motion denied. Urgent warrantless entry in hot pursuit with immediate danger present was justified."
        },
        "repEffect": {
          "grant": -14,
          "deny": 12
        },
        "id": "crimPro-024",
        "legacyTitles": [
          "Motion to Suppress — Hot Pursuit Exception"
        ],
        "topic": "fourthA",
        "jurisdiction": "U.S. federal",
        "lastReviewed": null,
        "ambiguous": false,
        "ambiguityReason": null,
        "authorities": [
          {
            "label": "Constitution · Amendment IV",
            "url": "https://www.law.cornell.edu/constitution/amendment4"
          }
        ]
      },
      {
        "title": "Motion for New Trial — Brady Violation",
        "difficulty": "hard",
        "party": "defendant",
        "flavor": "After conviction, defendant obtains the prosecutor's file via a state-records request. It contains a suppressed lab report — in the government's possession before trial — showing the key forensic match was 'inconclusive' rather than 'consistent with defendant,' as presented at trial.",
        "explanation": "The prosecution must disclose evidence favorable to the accused that is material to guilt or punishment. Suppression of favorable, material evidence violates due process regardless of the prosecutor's good faith.",
        "citation": "Brady v. Maryland, 373 U.S. 83 (1963)",
        "correctRuling": "grant",
        "ruling": {
          "grant": "new trial granted",
          "deny": "conviction stands"
        },
        "consequence": {
          "grant": "New trial granted. Suppression of a favorable, material forensic finding is a Brady violation.",
          "deny": "A plainly favorable material forensic finding is kept from the defense and the conviction is upheld."
        },
        "repEffect": {
          "grant": 14,
          "deny": -18
        },
        "id": "crimPro-025",
        "legacyTitles": [
          "Motion for New Trial — Brady Violation"
        ],
        "topic": "trialAndPlea",
        "jurisdiction": "U.S. federal",
        "lastReviewed": null,
        "ambiguous": false,
        "ambiguityReason": null,
        "authorities": [
          {
            "label": "Opinion · 373 U.S. 83",
            "url": "https://www.law.cornell.edu/supremecourt/text/373/83"
          }
        ]
      },
      {
        "title": "Motion to Suppress — Interrogation After Counsel Invoked",
        "difficulty": "hard",
        "party": "defendant",
        "flavor": "Defendant clearly invoked his right to counsel at the end of an initial interrogation. He was returned to his cell. Eighteen hours later, without counsel present and without defendant initiating contact, detectives re-Mirandized him and resumed questioning. He confessed.",
        "explanation": "Once a suspect invokes the right to counsel during custodial interrogation, police may not re-initiate interrogation until counsel is made available, unless the suspect himself initiates further communication.",
        "citation": "Edwards v. Arizona, 451 U.S. 477 (1981)",
        "correctRuling": "grant",
        "ruling": {
          "grant": "confession suppressed",
          "deny": "confession admitted"
        },
        "consequence": {
          "grant": "Confession suppressed. Police re-initiation after an Edwards invocation requires counsel to be present.",
          "deny": "A re-initiated interrogation after a clear counsel invocation is upheld despite Edwards."
        },
        "repEffect": {
          "grant": 14,
          "deny": -16
        },
        "id": "crimPro-026",
        "legacyTitles": [
          "Motion to Suppress — Interrogation After Counsel Invoked"
        ],
        "topic": "fifthA",
        "jurisdiction": "U.S. federal",
        "lastReviewed": null,
        "ambiguous": false,
        "ambiguityReason": null,
        "authorities": [
          {
            "label": "Opinion · 451 U.S. 477",
            "url": "https://www.law.cornell.edu/supremecourt/text/451/477"
          }
        ]
      },
      {
        "title": "Motion to Withdraw Plea — No Deportation Warning",
        "difficulty": "hard",
        "party": "defendant",
        "flavor": "Defendant, a long-time lawful permanent resident, pleaded guilty to a controlled-substance offense that renders deportation effectively mandatory under federal immigration law. Defense counsel never mentioned immigration consequences; counsel said only that 'it depends on the facts.' Defendant credibly swears — with corroborating contemporaneous facts (U.S.-citizen children, decades in country, a viable defense at trial) — that he would have rejected the plea and gone to trial had he known deportation was certain.",
        "explanation": "When immigration consequences of a guilty plea are truly clear under the governing law, defense counsel must so advise the client. To obtain relief the defendant must also show Strickland prejudice — a reasonable probability that, but for counsel's error, he would not have pleaded guilty. The record here satisfies both prongs.",
        "citation": "Padilla v. Kentucky, 559 U.S. 356 (2010); Strickland v. Washington, 466 U.S. 668 (1984); Lee v. United States, 582 U.S. 357 (2017)",
        "correctRuling": "grant",
        "ruling": {
          "grant": "plea withdrawn",
          "deny": "plea stands"
        },
        "consequence": {
          "grant": "Plea vacated. Clear deportation consequences require accurate advice, and defendant has shown a reasonable probability he would have gone to trial.",
          "deny": "A plea entered without required immigration advice stands despite Padilla and a credible showing of prejudice."
        },
        "repEffect": {
          "grant": 12,
          "deny": -14
        },
        "id": "crimPro-027",
        "legacyTitles": [
          "Motion to Withdraw Plea — No Deportation Warning"
        ],
        "topic": "sixthA",
        "jurisdiction": "U.S. federal",
        "lastReviewed": null,
        "ambiguous": false,
        "ambiguityReason": null,
        "authorities": [
          {
            "label": "Opinion · 559 U.S. 356",
            "url": "https://www.law.cornell.edu/supremecourt/text/559/356"
          },
          {
            "label": "Opinion · 466 U.S. 668",
            "url": "https://www.law.cornell.edu/supremecourt/text/466/668"
          },
          {
            "label": "Opinion · 582 U.S. 357",
            "url": "https://www.law.cornell.edu/supremecourt/text/582/357"
          }
        ]
      },
      {
        "title": "Motion to Vacate — Uncommunicated Plea Offer",
        "difficulty": "hard",
        "party": "defendant",
        "flavor": "The government made a formal written plea offer with a short deadline. Defense counsel never told defendant about it. The offer lapsed, defendant went to trial, was convicted, and received a sentence substantially higher than the lapsed offer. Defendant credibly shows he would have accepted the offer on its terms, the prosecution had no reason to withdraw it, and the trial court would have accepted the agreed disposition consistent with its routine practice.",
        "explanation": "Effective assistance of counsel includes communicating formal plea offers. To obtain relief the defendant must also show a reasonable probability he would have accepted the offer, that the prosecution would not have withdrawn it, and that the court would have accepted it — the three-part prejudice showing spelled out in Lafler and Frye.",
        "citation": "Missouri v. Frye, 566 U.S. 134 (2012); Lafler v. Cooper, 566 U.S. 156 (2012)",
        "correctRuling": "grant",
        "ruling": {
          "grant": "relief granted",
          "deny": "sentence stands"
        },
        "consequence": {
          "grant": "Relief granted. Counsel's failure to communicate the offer was deficient, and the Frye/Lafler prejudice elements are satisfied on this record.",
          "deny": "A lapsed plea offer the defendant never heard about leaves the harsher sentence intact despite a full Frye showing."
        },
        "repEffect": {
          "grant": 12,
          "deny": -14
        },
        "id": "crimPro-028",
        "legacyTitles": [
          "Motion to Vacate — Uncommunicated Plea Offer"
        ],
        "topic": "sixthA",
        "jurisdiction": "U.S. federal",
        "lastReviewed": null,
        "ambiguous": false,
        "ambiguityReason": null,
        "authorities": [
          {
            "label": "Opinion · 566 U.S. 134",
            "url": "https://www.law.cornell.edu/supremecourt/text/566/134"
          },
          {
            "label": "Opinion · 566 U.S. 156",
            "url": "https://www.law.cornell.edu/supremecourt/text/566/156"
          }
        ]
      },
      {
        "title": "Motion to Suppress — Ambiguous Custody",
        "difficulty": "medium",
        "ambiguous": true,
        "party": "defendant",
        "flavor": "Defendant was asked to come to the station 'voluntarily.' He was told he was free to leave at the start. Questioning lasted four hours in a small interior room. Officers grew increasingly confrontational over time. No Miranda warnings were given.",
        "explanation": "Custody for Miranda purposes turns on whether a reasonable person in the circumstances would feel free to end the interrogation and leave. A prolonged, confrontational interrogation in a closed room creates genuine ambiguity even if the person technically arrived voluntarily.",
        "citation": "Miranda v. Arizona, 384 U.S. 436 (1966); U.S. Const. amend. V",
        "correctRuling": "either",
        "ruling": {
          "grant": "statements suppressed",
          "deny": "statements admitted"
        },
        "consequence": {
          "grant": "Motion granted. The four-hour confrontational session crossed into custody requiring Miranda warnings.",
          "deny": "Motion denied. The initial freedom-to-leave advisement and voluntary arrival defeat the custody claim on this record."
        },
        "repEffect": {
          "grant": 5,
          "deny": 5
        },
        "id": "crimPro-029",
        "legacyTitles": [
          "Motion to Suppress — Ambiguous Custody"
        ],
        "topic": "fifthA",
        "jurisdiction": "U.S. federal",
        "lastReviewed": null,
        "ambiguityReason": "Custody for Miranda purposes turns on whether a reasonable person in the circumstances would feel free to end the interrogation and leave. A prolonged, confrontational interrogation in a closed room creates genuine ambiguity even if the person technically arrived voluntarily.",
        "authorities": [
          {
            "label": "Opinion · 384 U.S. 436",
            "url": "https://www.law.cornell.edu/supremecourt/text/384/436"
          },
          {
            "label": "Constitution · Amendment V",
            "url": "https://www.law.cornell.edu/constitution/amendment5"
          }
        ]
      },
      {
        "title": "Motion to Reduce Bail — Prior Flight Record",
        "difficulty": "medium",
        "ambiguous": true,
        "party": "defendant",
        "flavor": "Defendant is charged with securities fraud and seeks bail reduction from $500,000 to $25,000. He has two prior failures to appear, both from eight years ago. Since then he has held steady employment, married, has two young children, and surrendered his passport.",
        "explanation": "Prior flight history is a substantial factor weighing against reduction, but changed circumstances — family stability, employment, passport surrender, and passage of time — create a genuine question of how much weight each side deserves.",
        "citation": "U.S. Const. amend. VIII; 18 U.S.C. § 3142",
        "correctRuling": "either",
        "ruling": {
          "grant": "bail reduced",
          "deny": "bail stands"
        },
        "consequence": {
          "grant": "Bail reduced. Changed circumstances — family, employment, passport — adequately mitigate the old flight risk.",
          "deny": "Bail stays. Prior failures to appear remain the most reliable predictor, regardless of current circumstances."
        },
        "repEffect": {
          "grant": 5,
          "deny": 5
        },
        "id": "crimPro-030",
        "legacyTitles": [
          "Motion to Reduce Bail — Prior Flight Record"
        ],
        "topic": "sixthA",
        "jurisdiction": "U.S. federal",
        "lastReviewed": null,
        "ambiguityReason": "Prior flight history is a substantial factor weighing against reduction, but changed circumstances — family stability, employment, passport surrender, and passage of time — create a genuine question of how much weight each side deserves.",
        "authorities": [
          {
            "label": "Constitution · Amendment VIII",
            "url": "https://www.law.cornell.edu/constitution/amendment8"
          },
          {
            "label": "18 U.S.C. § 3142",
            "url": "https://www.law.cornell.edu/uscode/text/18/3142"
          }
        ]
      },
      {
        "title": "Motion to Recuse — Prior Prosecutorial Role",
        "difficulty": "hard",
        "ambiguous": true,
        "party": "defendant",
        "flavor": "The assigned judge, while a federal prosecutor twelve years ago, was briefed on early investigative activity involving defendant's organization — though she had no direct role in charging decisions and this prosecution involves different conduct than what she was briefed on.",
        "explanation": "Judges must recuse themselves where their impartiality might reasonably be questioned. Whether a peripheral prosecutorial briefing on related conduct twelve years earlier creates a disqualifying appearance is a genuinely contested question.",
        "citation": "28 U.S.C. § 455(a)",
        "correctRuling": "either",
        "ruling": {
          "grant": "judge recused",
          "deny": "judge remains"
        },
        "consequence": {
          "grant": "Recusal granted. The prior investigative connection, however peripheral, creates a reasonable appearance problem.",
          "deny": "Recusal denied. A brief, tangential briefing a decade ago does not mandate disqualification."
        },
        "repEffect": {
          "grant": 5,
          "deny": 5
        },
        "id": "crimPro-031",
        "legacyTitles": [
          "Motion to Recuse — Prior Prosecutorial Role"
        ],
        "topic": "other",
        "jurisdiction": "U.S. federal",
        "lastReviewed": null,
        "ambiguityReason": "Judges must recuse themselves where their impartiality might reasonably be questioned. Whether a peripheral prosecutorial briefing on related conduct twelve years earlier creates a disqualifying appearance is a genuinely contested question.",
        "authorities": [
          {
            "label": "28 U.S.C. § 455",
            "url": "https://www.law.cornell.edu/uscode/text/28/455"
          }
        ]
      },
      {
        "title": "Motion to Suppress — Consent Voluntariness",
        "difficulty": "medium",
        "ambiguous": true,
        "party": "defendant",
        "flavor": "Three uniformed officers arrived at defendant's apartment at 11 p.m. without a warrant. Defendant, 19 years old, was told 'we can do this the easy way' and 'we'll get a warrant anyway.' He signed a consent-to-search form. No physical force or promises were made.",
        "explanation": "Voluntariness is a totality-of-circumstances question: youth, late-night encounter, show of authority, and suggestive phrasing all bear on coercion, yet none is individually decisive. Reasonable courts genuinely divide on similar records.",
        "citation": "Schneckloth v. Bustamonte, 412 U.S. 218 (1973)",
        "correctRuling": "either",
        "ruling": {
          "grant": "consent invalid",
          "deny": "consent valid"
        },
        "consequence": {
          "grant": "Motion granted. Under the totality, youth plus late-night show of authority plus 'we'll get a warrant' crosses into coercion.",
          "deny": "Motion denied. On this record, the totality of circumstances shows voluntary consent."
        },
        "repEffect": {
          "grant": 5,
          "deny": 5
        },
        "id": "crimPro-032",
        "legacyTitles": [
          "Motion to Suppress — Consent Voluntariness"
        ],
        "topic": "fourthA",
        "jurisdiction": "U.S. federal",
        "lastReviewed": null,
        "ambiguityReason": "Voluntariness is a totality-of-circumstances question: youth, late-night encounter, show of authority, and suggestive phrasing all bear on coercion, yet none is individually decisive. Reasonable courts genuinely divide on similar records.",
        "authorities": [
          {
            "label": "Opinion · 412 U.S. 218",
            "url": "https://www.law.cornell.edu/supremecourt/text/412/218"
          }
        ]
      }
    ]
  },
  "civPro": {
    "name": "CIVIL PROCEDURE",
    "headerClass": "cv",
    "cardClass": "cv-card",
    "motions": [
      {
        "title": "Motion to Dismiss — Bare Recitals",
        "difficulty": "easy",
        "party": "defendant",
        "flavor": "The complaint states: 'Defendant acted negligently, breached its duty to plaintiff, and caused plaintiff substantial harm.' It contains no specific facts about what defendant did, when, where, or how plaintiff was injured.",
        "explanation": "A complaint must allege enough factual content to render a claim plausible on its face — legal conclusions and formulaic recitations of elements, standing alone, are insufficient.",
        "citation": "Bell Atlantic Corp. v. Twombly, 550 U.S. 544 (2007); Ashcroft v. Iqbal, 556 U.S. 662 (2009)",
        "correctRuling": "grant",
        "ruling": {
          "grant": "complaint dismissed",
          "deny": "case proceeds"
        },
        "consequence": {
          "grant": "Complaint dismissed. Bare legal conclusions without supporting facts do not state a plausible claim.",
          "deny": "A complaint consisting entirely of legal labels survives despite offering no factual basis."
        },
        "repEffect": {
          "grant": 10,
          "deny": -12
        },
        "id": "civPro-001",
        "legacyTitles": [
          "Motion to Dismiss — Bare Recitals"
        ],
        "topic": "pleading",
        "jurisdiction": "U.S. federal",
        "lastReviewed": null,
        "ambiguous": false,
        "ambiguityReason": null,
        "authorities": [
          {
            "label": "Opinion · 550 U.S. 544",
            "url": "https://www.law.cornell.edu/supremecourt/text/550/544"
          },
          {
            "label": "Opinion · 556 U.S. 662",
            "url": "https://www.law.cornell.edu/supremecourt/text/556/662"
          }
        ]
      },
      {
        "title": "Motion to Dismiss — Plausible Claim Stated",
        "difficulty": "easy",
        "party": "defendant",
        "flavor": "Plaintiff's fraud complaint identifies the defendant company by name, specifies three misrepresentations made on particular dates in specific investor calls, names the plaintiff, and alleges resulting financial losses of $2.3 million.",
        "explanation": "When a complaint provides specific factual allegations that make the asserted claim plausible, it survives a motion to dismiss even if the defendant disputes the facts.",
        "citation": "Bell Atlantic Corp. v. Twombly, 550 U.S. 544 (2007); Ashcroft v. Iqbal, 556 U.S. 662 (2009)",
        "correctRuling": "deny",
        "ruling": {
          "grant": "complaint dismissed",
          "deny": "case proceeds"
        },
        "consequence": {
          "grant": "A factually specific complaint is dismissed — exactly what Twombly and Iqbal do not require.",
          "deny": "Motion denied. The complaint pleads sufficient facts to state a plausible fraud claim."
        },
        "repEffect": {
          "grant": -12,
          "deny": 10
        },
        "id": "civPro-002",
        "legacyTitles": [
          "Motion to Dismiss — Plausible Claim Stated"
        ],
        "topic": "pleading",
        "jurisdiction": "U.S. federal",
        "lastReviewed": null,
        "ambiguous": false,
        "ambiguityReason": null,
        "authorities": [
          {
            "label": "Opinion · 550 U.S. 544",
            "url": "https://www.law.cornell.edu/supremecourt/text/550/544"
          },
          {
            "label": "Opinion · 556 U.S. 662",
            "url": "https://www.law.cornell.edu/supremecourt/text/556/662"
          }
        ]
      },
      {
        "title": "Motion for Summary Judgment — Genuine Dispute",
        "difficulty": "easy",
        "party": "plaintiff",
        "flavor": "Plaintiff moves for summary judgment on liability in a slip-and-fall case. Defendant's store manager testified the floor was dry. A customer witness testified she saw an employee mop the area and leave without posting a warning sign.",
        "explanation": "Summary judgment is only proper when there is no genuine dispute of material fact. Conflicting witness testimony on the central liability question must go to the jury.",
        "citation": "Celotex Corp. v. Catrett, 477 U.S. 317 (1986); Anderson v. Liberty Lobby, Inc., 477 U.S. 242 (1986)",
        "correctRuling": "deny",
        "ruling": {
          "grant": "judgment for plaintiff",
          "deny": "case goes to jury"
        },
        "consequence": {
          "grant": "Summary judgment granted despite a direct conflict in witness testimony on the key fact.",
          "deny": "Correct. Conflicting testimony creates a genuine dispute that belongs at trial."
        },
        "repEffect": {
          "grant": -12,
          "deny": 10
        },
        "id": "civPro-003",
        "legacyTitles": [
          "Motion for Summary Judgment — Genuine Dispute"
        ],
        "topic": "erieAndTrial",
        "jurisdiction": "U.S. federal",
        "lastReviewed": null,
        "ambiguous": false,
        "ambiguityReason": null,
        "authorities": [
          {
            "label": "Opinion · 477 U.S. 317",
            "url": "https://www.law.cornell.edu/supremecourt/text/477/317"
          },
          {
            "label": "Opinion · 477 U.S. 242",
            "url": "https://www.law.cornell.edu/supremecourt/text/477/242"
          }
        ]
      },
      {
        "title": "Motion to Compel Discovery",
        "difficulty": "easy",
        "party": "defendant",
        "flavor": "Plaintiff made targeted document requests for financial records central to the contract dispute. Defendant responded with boilerplate objections, produced nothing, identified no privilege, and offered no affidavit explaining any burden. Defendant now moves for a protective order shielding the records from discovery.",
        "explanation": "A party must respond substantively to discovery requests. Boilerplate objections without supporting specifics or a privilege log do not justify wholesale non-production or a protective order.",
        "citation": "Fed. R. Civ. P. 26(c), 37(a)",
        "correctRuling": "deny",
        "ruling": {
          "grant": "protection granted",
          "deny": "production compelled"
        },
        "consequence": {
          "grant": "Key documents remain withheld on a record of unsupported objections.",
          "deny": "Motion denied. Bare-bones objections without a proper foundation do not justify withholding production."
        },
        "repEffect": {
          "grant": -12,
          "deny": 10
        },
        "id": "civPro-004",
        "legacyTitles": [
          "Motion to Compel Discovery"
        ],
        "topic": "discovery",
        "jurisdiction": "U.S. federal",
        "lastReviewed": null,
        "ambiguous": false,
        "ambiguityReason": null,
        "authorities": [
          {
            "label": "Civil Procedure Rule 26",
            "url": "https://www.law.cornell.edu/rules/frcp/rule_26"
          }
        ]
      },
      {
        "title": "Motion for Default Judgment — Non-Appearance",
        "difficulty": "easy",
        "party": "plaintiff",
        "flavor": "Defendant was personally served, received confirmation of service, and acknowledged receipt in an email to plaintiff's counsel. No answer, appearance, or motion was filed within 30 days. No contact from defendant or counsel has been made.",
        "explanation": "Default judgment is appropriate when a properly served defendant fails to plead or otherwise defend, and there is no indication of excusable neglect or a meritorious defense.",
        "citation": "Fed. R. Civ. P. 55(a)–(b)",
        "correctRuling": "grant",
        "ruling": {
          "grant": "default entered",
          "deny": "case continues"
        },
        "consequence": {
          "grant": "Default judgment entered. Defendant was properly served and chose not to appear.",
          "deny": "Plaintiff is denied default despite proper service and complete non-appearance."
        },
        "repEffect": {
          "grant": 10,
          "deny": -10
        },
        "id": "civPro-005",
        "legacyTitles": [
          "Motion for Default Judgment — Non-Appearance"
        ],
        "topic": "erieAndTrial",
        "jurisdiction": "U.S. federal",
        "lastReviewed": null,
        "ambiguous": false,
        "ambiguityReason": null,
        "authorities": [
          {
            "label": "Civil Procedure Rule 55",
            "url": "https://www.law.cornell.edu/rules/frcp/rule_55"
          }
        ]
      },
      {
        "title": "Motion for Default Judgment — Prompt Correction",
        "difficulty": "easy",
        "party": "plaintiff",
        "flavor": "Defendant's answer was filed three days late after a documented mail mix-up between its headquarters and outside counsel. Within a week of the deadline, defendant appeared, moved to set aside the default, and presented a potentially strong statute-of-limitations defense.",
        "explanation": "Courts may set aside a default when the movant shows good cause: a minimal delay, prompt corrective action, and a potentially meritorious defense all counsel against the harsh outcome of default judgment.",
        "citation": "Fed. R. Civ. P. 55(c), 60(b)",
        "correctRuling": "deny",
        "ruling": {
          "grant": "default entered",
          "deny": "default set aside"
        },
        "consequence": {
          "grant": "Default judgment entered despite a three-day delay, rapid correction, and a colorable defense.",
          "deny": "Default set aside. The circumstances warrant letting this case be decided on the merits."
        },
        "repEffect": {
          "grant": -10,
          "deny": 10
        },
        "id": "civPro-006",
        "legacyTitles": [
          "Motion for Default Judgment — Prompt Correction"
        ],
        "topic": "erieAndTrial",
        "jurisdiction": "U.S. federal",
        "lastReviewed": null,
        "ambiguous": false,
        "ambiguityReason": null,
        "authorities": [
          {
            "label": "Civil Procedure Rule 55",
            "url": "https://www.law.cornell.edu/rules/frcp/rule_55"
          }
        ]
      },
      {
        "title": "Motion to Retain Diversity Jurisdiction",
        "difficulty": "easy",
        "party": "plaintiff",
        "flavor": "Plaintiff, a New York citizen, sues two defendants in federal court: a California corporation and a second individual also domiciled in New York. The complaint invokes only diversity jurisdiction. The amount-in-controversy requirement is met. Plaintiff asks the court to keep the case in federal court.",
        "explanation": "Diversity jurisdiction under § 1332 requires complete diversity — no plaintiff may share a state of citizenship with any defendant. A single shared citizenship destroys the federal forum absent another basis.",
        "citation": "28 U.S.C. § 1332; Exxon Mobil Corp. v. Allapattah Services, Inc., 545 U.S. 546 (2005)",
        "correctRuling": "deny",
        "ruling": {
          "grant": "jurisdiction retained",
          "deny": "dismissed for no jurisdiction"
        },
        "consequence": {
          "grant": "Federal diversity jurisdiction asserted despite a shared citizenship between plaintiff and a defendant.",
          "deny": "Case dismissed. A shared plaintiff-defendant citizenship defeats complete diversity."
        },
        "repEffect": {
          "grant": -12,
          "deny": 10
        },
        "id": "civPro-007",
        "legacyTitles": [
          "Motion to Retain Diversity Jurisdiction"
        ],
        "topic": "jurisdiction",
        "jurisdiction": "U.S. federal",
        "lastReviewed": null,
        "ambiguous": false,
        "ambiguityReason": null,
        "authorities": [
          {
            "label": "Opinion · 545 U.S. 546",
            "url": "https://www.law.cornell.edu/supremecourt/text/545/546"
          },
          {
            "label": "28 U.S.C. § 1332",
            "url": "https://www.law.cornell.edu/uscode/text/28/1332"
          }
        ]
      },
      {
        "title": "Motion to Dismiss — No Specific Jurisdiction",
        "difficulty": "easy",
        "party": "defendant",
        "flavor": "An Oklahoma used-car dealer sold a car in Oklahoma to a New York family who later drove it to Arizona, where a crash occurred. The family sues the Oklahoma dealer in Arizona. The dealer has no operations, marketing, or sales in Arizona and did not direct its activities there.",
        "explanation": "Specific jurisdiction requires that the defendant have deliberately created minimum contacts with the forum such that being haled into court there is fair. Unilateral acts by a consumer are not contacts attributable to the defendant.",
        "citation": "World-Wide Volkswagen Corp. v. Woodson, 444 U.S. 286 (1980)",
        "correctRuling": "grant",
        "ruling": {
          "grant": "dismissed for no jurisdiction",
          "deny": "jurisdiction asserted"
        },
        "consequence": {
          "grant": "Case dismissed. The dealer's only link to Arizona was the consumer's own unilateral travel.",
          "deny": "A forum haul based entirely on the consumer's unilateral act is upheld."
        },
        "repEffect": {
          "grant": 10,
          "deny": -12
        },
        "id": "civPro-008",
        "legacyTitles": [
          "Motion to Dismiss — No Specific Jurisdiction"
        ],
        "topic": "jurisdiction",
        "jurisdiction": "U.S. federal",
        "lastReviewed": null,
        "ambiguous": false,
        "ambiguityReason": null,
        "authorities": [
          {
            "label": "Opinion · 444 U.S. 286",
            "url": "https://www.law.cornell.edu/supremecourt/text/444/286"
          }
        ]
      },
      {
        "title": "Motion to Dismiss — Personal Jurisdiction (Stream of Commerce)",
        "difficulty": "medium",
        "party": "defendant",
        "flavor": "Plaintiff sues an Ohio equipment manufacturer in California state court. Defendant has no California offices, made no California-specific marketing, and sold the machine to an Ohio distributor. The distributor later sold it to a California buyer through its own independent channels.",
        "explanation": "Personal jurisdiction requires purposeful availment of the forum by the defendant. A product arriving in the forum solely through a third party's independent distribution decisions is not purposeful availment.",
        "citation": "International Shoe Co. v. Washington, 326 U.S. 310 (1945); J. McIntyre Machinery, Ltd. v. Nicastro, 564 U.S. 873 (2011)",
        "correctRuling": "grant",
        "ruling": {
          "grant": "dismissed for no jurisdiction",
          "deny": "jurisdiction asserted"
        },
        "consequence": {
          "grant": "Case dismissed for lack of personal jurisdiction. Defendant did not purposefully avail itself of California.",
          "deny": "Jurisdiction is asserted over a defendant whose connection to the forum is entirely the distributor's choice."
        },
        "repEffect": {
          "grant": 10,
          "deny": -14
        },
        "id": "civPro-009",
        "legacyTitles": [
          "Motion to Dismiss — Personal Jurisdiction (Stream of Commerce)"
        ],
        "topic": "jurisdiction",
        "jurisdiction": "U.S. federal",
        "lastReviewed": null,
        "ambiguous": false,
        "ambiguityReason": null,
        "authorities": [
          {
            "label": "Opinion · 326 U.S. 310",
            "url": "https://www.law.cornell.edu/supremecourt/text/326/310"
          },
          {
            "label": "Opinion · 564 U.S. 873",
            "url": "https://www.law.cornell.edu/supremecourt/text/564/873"
          }
        ]
      },
      {
        "title": "Motion to Certify Class Action — Individualized Issues",
        "difficulty": "medium",
        "party": "plaintiff",
        "flavor": "Plaintiff seeks to certify 8,000 product-injury claims against a drug manufacturer. Each class member received different dosages, for different durations, with different baseline health conditions, and purchased in states with varying liability laws.",
        "explanation": "Rule 23(a) requires commonality, and Rule 23(b)(3) requires predominance. When individual issues of exposure, causation, and applicable law vary substantially across the class, common questions do not predominate.",
        "citation": "Wal-Mart Stores, Inc. v. Dukes, 564 U.S. 338 (2011); Fed. R. Civ. P. 23(a), (b)(3)",
        "correctRuling": "deny",
        "ruling": {
          "grant": "class certified",
          "deny": "certification denied"
        },
        "consequence": {
          "grant": "Class certified despite individualized issues swamping common ones.",
          "deny": "Certification denied. Individual variation in exposure, causation, and law defeats predominance."
        },
        "repEffect": {
          "grant": -12,
          "deny": 10
        },
        "id": "civPro-010",
        "legacyTitles": [
          "Motion to Certify Class Action — Individualized Issues"
        ],
        "topic": "classAction",
        "jurisdiction": "U.S. federal",
        "lastReviewed": null,
        "ambiguous": false,
        "ambiguityReason": null,
        "authorities": [
          {
            "label": "Opinion · 564 U.S. 338",
            "url": "https://www.law.cornell.edu/supremecourt/text/564/338"
          },
          {
            "label": "Civil Procedure Rule 23",
            "url": "https://www.law.cornell.edu/rules/frcp/rule_23"
          }
        ]
      },
      {
        "title": "Motion to Invalidate Arbitration Clause",
        "difficulty": "medium",
        "party": "plaintiff",
        "flavor": "Plaintiff purchased software through an online checkout. The page displayed: 'By clicking Place Order you agree to our Terms of Service,' with a hyperlink to the terms containing an arbitration clause. Plaintiff clicked 'Place Order' and now asks the court to declare the clause unenforceable so the case can stay in federal court.",
        "explanation": "The Federal Arbitration Act requires courts to enforce arbitration agreements according to their terms. An online assent mechanism with conspicuous notice and a clear acceptance click creates an enforceable agreement — it cannot be voided merely because the plaintiff would prefer a judicial forum.",
        "citation": "9 U.S.C. § 2 (Federal Arbitration Act)",
        "correctRuling": "deny",
        "ruling": {
          "grant": "clause voided",
          "deny": "clause enforced"
        },
        "consequence": {
          "grant": "Arbitration clause struck despite conspicuous terms and plaintiff's affirmative click.",
          "deny": "Clause enforced. Plaintiff had clear notice and affirmatively accepted the arbitration terms."
        },
        "repEffect": {
          "grant": -12,
          "deny": 10
        },
        "id": "civPro-011",
        "legacyTitles": [
          "Motion to Invalidate Arbitration Clause"
        ],
        "topic": "classAction",
        "jurisdiction": "U.S. federal",
        "lastReviewed": null,
        "ambiguous": false,
        "ambiguityReason": null,
        "authorities": [
          {
            "label": "9 U.S.C. § 2",
            "url": "https://www.law.cornell.edu/uscode/text/9/2"
          }
        ]
      },
      {
        "title": "Motion to Retain Venue in SDNY",
        "difficulty": "medium",
        "party": "plaintiff",
        "flavor": "Plaintiff filed suit in the Southern District of New York. The contract contains a Delaware forum-selection clause. All relevant witnesses are in Delaware, the relevant documents are stored in Delaware, and plaintiff's counsel practices in New York. Plaintiff asks the court to keep the case in SDNY.",
        "explanation": "A valid forum-selection clause is a significant factor in the transfer analysis. When private-interest factors — witnesses, documents, and the contractual choice — all point to the transferee forum, the plaintiff's chosen forum must yield.",
        "citation": "28 U.S.C. § 1404(a); Atl. Marine Constr. Co. v. U.S. Dist. Ct., 571 U.S. 49 (2013)",
        "correctRuling": "deny",
        "ruling": {
          "grant": "venue retained",
          "deny": "venue transferred"
        },
        "consequence": {
          "grant": "Venue retained in SDNY despite a forum-selection clause and private-interest factors pointing to Delaware.",
          "deny": "Case transferred to Delaware. The forum-selection clause and practical factors control over plaintiff's preference."
        },
        "repEffect": {
          "grant": -10,
          "deny": 10
        },
        "id": "civPro-012",
        "legacyTitles": [
          "Motion to Retain Venue in SDNY"
        ],
        "topic": "jurisdiction",
        "jurisdiction": "U.S. federal",
        "lastReviewed": null,
        "ambiguous": false,
        "ambiguityReason": null,
        "authorities": [
          {
            "label": "Opinion · 571 U.S. 49",
            "url": "https://www.law.cornell.edu/supremecourt/text/571/49"
          },
          {
            "label": "28 U.S.C. § 1404",
            "url": "https://www.law.cornell.edu/uscode/text/28/1404"
          }
        ]
      },
      {
        "title": "Motion for Sanctions — Evidence Spoliation",
        "difficulty": "medium",
        "party": "plaintiff",
        "flavor": "Defendant issued a litigation hold notice on Day 1. On Day 14, defendant's IT director deliberately overwrote backup tapes containing the email archive at the center of the dispute, then produced an incomplete version claiming files were 'unavailable.'",
        "explanation": "Rule 37(e) applies when ESI that should have been preserved is lost because a party failed to take reasonable steps and the information cannot be restored or replaced. Curative measures require prejudice; adverse-inference or default-style sanctions require intent to deprive another party of the information's use.",
        "citation": "Fed. R. Civ. P. 37(e)",
        "correctRuling": "grant",
        "ruling": {
          "grant": "sanctions imposed",
          "deny": "no sanctions"
        },
        "consequence": {
          "grant": "Sanctions imposed. Intentional destruction of preserved ESI supports Rule 37(e)'s strongest remedies.",
          "deny": "Deliberate post-hold spoliation is met with no consequence."
        },
        "repEffect": {
          "grant": 14,
          "deny": -18
        },
        "id": "civPro-013",
        "legacyTitles": [
          "Motion for Sanctions — Evidence Spoliation"
        ],
        "topic": "discovery",
        "jurisdiction": "U.S. federal",
        "lastReviewed": null,
        "ambiguous": false,
        "ambiguityReason": null,
        "authorities": [
          {
            "label": "Civil Procedure Rule 37",
            "url": "https://www.law.cornell.edu/rules/frcp/rule_37"
          }
        ]
      },
      {
        "title": "Motion to Strike Expert — Daubert Challenge",
        "difficulty": "medium",
        "party": "defendant",
        "flavor": "Plaintiff's economic damages expert holds a PhD in economics, has testified in federal court 60 times, published peer-reviewed work on damages methodology, and applied standard market-rate models. Defense moves to strike because her damage estimate is larger than defendant's own internal estimate.",
        "explanation": "Rule 702 requires a reliable foundation: qualifications, sufficient facts or data, reliable methods, and reliable application. A qualified expert applying standard methods is not excluded merely because the opposing party disputes the bottom-line damages figure.",
        "citation": "Daubert v. Merrell Dow Pharms., Inc., 509 U.S. 579 (1993); Fed. R. Evid. 702",
        "correctRuling": "deny",
        "ruling": {
          "grant": "expert struck",
          "deny": "expert allowed"
        },
        "consequence": {
          "grant": "A well-qualified expert is struck because the opposing party dislikes her numbers — not her method.",
          "deny": "Expert allowed. The Rule 702 foundation is shown; disagreement with the damages figure is for cross-examination."
        },
        "repEffect": {
          "grant": -10,
          "deny": 8
        },
        "id": "civPro-014",
        "legacyTitles": [
          "Motion to Strike Expert — Daubert Challenge"
        ],
        "topic": "discovery",
        "jurisdiction": "U.S. federal",
        "lastReviewed": null,
        "ambiguous": false,
        "ambiguityReason": null,
        "authorities": [
          {
            "label": "Opinion · 509 U.S. 579",
            "url": "https://www.law.cornell.edu/supremecourt/text/509/579"
          },
          {
            "label": "Evidence Rule 702",
            "url": "https://www.law.cornell.edu/rules/fre/rule_702"
          }
        ]
      },
      {
        "title": "Motion to Remand — Improper Removal",
        "difficulty": "medium",
        "party": "plaintiff",
        "flavor": "Plaintiff, a Texas citizen, sued in Texas state court. Two defendants removed to federal court on diversity grounds. But one defendant is itself a Texas citizen. Plaintiff moves to remand within 30 days of removal.",
        "explanation": "A diversity case is not removable if any defendant is a citizen of the state in which the action is brought — the 'forum defendant rule.' Additionally, complete diversity must exist at removal. Either defect warrants remand.",
        "citation": "28 U.S.C. §§ 1441(b)(2), 1447(c)",
        "correctRuling": "grant",
        "ruling": {
          "grant": "remanded to state",
          "deny": "stays federal"
        },
        "consequence": {
          "grant": "Remanded. The forum-defendant rule defeats removal; back to state court.",
          "deny": "Case stays in federal court despite a clear forum-defendant violation."
        },
        "repEffect": {
          "grant": 10,
          "deny": -12
        },
        "id": "civPro-015",
        "legacyTitles": [
          "Motion to Remand — Improper Removal"
        ],
        "topic": "jurisdiction",
        "jurisdiction": "U.S. federal",
        "lastReviewed": null,
        "ambiguous": false,
        "ambiguityReason": null,
        "authorities": [
          {
            "label": "28 U.S.C. § 1441",
            "url": "https://www.law.cornell.edu/uscode/text/28/1441"
          }
        ]
      },
      {
        "title": "Motion Under Erie — State or Federal Rule",
        "difficulty": "medium",
        "party": "defendant",
        "flavor": "In a federal diversity suit, defendant moves to dismiss on a substantive state-law issue: the applicable statute of limitations. State law would bar the claim; federal general common law, plaintiff argues, would allow it.",
        "explanation": "Under Erie, federal courts sitting in diversity apply state substantive law and federal procedural law. Statutes of limitations are treated as substantive for Erie purposes — state law governs.",
        "citation": "Erie R. Co. v. Tompkins, 304 U.S. 64 (1938); Guaranty Trust Co. v. York, 326 U.S. 99 (1945)",
        "correctRuling": "grant",
        "ruling": {
          "grant": "state law bars claim",
          "deny": "federal rule applied"
        },
        "consequence": {
          "grant": "Dismissed. Under Erie and Guaranty Trust, state limitations law governs in diversity.",
          "deny": "Federal general common law is invoked to override the applicable state statute — exactly what Erie forbade."
        },
        "repEffect": {
          "grant": 12,
          "deny": -14
        },
        "id": "civPro-016",
        "legacyTitles": [
          "Motion Under Erie — State or Federal Rule"
        ],
        "topic": "erieAndTrial",
        "jurisdiction": "U.S. federal",
        "lastReviewed": null,
        "ambiguous": false,
        "ambiguityReason": null,
        "authorities": [
          {
            "label": "Opinion · 304 U.S. 64",
            "url": "https://www.law.cornell.edu/supremecourt/text/304/64"
          },
          {
            "label": "Opinion · 326 U.S. 99",
            "url": "https://www.law.cornell.edu/supremecourt/text/326/99"
          }
        ]
      },
      {
        "title": "Motion for Rule 11 Sanctions",
        "difficulty": "medium",
        "party": "defendant",
        "flavor": "Plaintiff's complaint alleges fraud with allegations directly contradicted by documents plaintiff's counsel had reviewed before filing. Defendant served a Rule 11 letter 25 days ago, giving the 21-day safe-harbor period. Plaintiff did not withdraw the contested allegations.",
        "explanation": "Rule 11 requires counsel to certify that pleadings have evidentiary support after reasonable inquiry. Filing allegations contradicted by known documents — and refusing to withdraw them after safe-harbor notice — may warrant sanctions.",
        "citation": "Fed. R. Civ. P. 11",
        "correctRuling": "grant",
        "ruling": {
          "grant": "sanctions imposed",
          "deny": "no sanctions"
        },
        "consequence": {
          "grant": "Sanctions imposed. The complaint's contested allegations lacked evidentiary support and survived a safe-harbor.",
          "deny": "Unsupported allegations survive both a safe-harbor and the Rule 11 inquiry obligation without consequence."
        },
        "repEffect": {
          "grant": 10,
          "deny": -10
        },
        "id": "civPro-017",
        "legacyTitles": [
          "Motion for Rule 11 Sanctions"
        ],
        "topic": "discovery",
        "jurisdiction": "U.S. federal",
        "lastReviewed": null,
        "ambiguous": false,
        "ambiguityReason": null,
        "authorities": [
          {
            "label": "Civil Procedure Rule 11",
            "url": "https://www.law.cornell.edu/rules/frcp/rule_11"
          }
        ]
      },
      {
        "title": "Motion to Amend — Relation Back of Amendment",
        "difficulty": "medium",
        "ambiguous": true,
        "party": "plaintiff",
        "flavor": "Plaintiff timely sued 'John Doe Officer' for excessive force because she did not know which officer was involved. The statute of limitations has now run. Plaintiff moves to amend to name Officer Reyes, who had informal notice of the suit within the Rule 4(m) period, arguing the amendment should relate back under Rule 15(c).",
        "explanation": "Rule 15(c)(1)(C) requires a 'mistake concerning the proper party's identity.' Several circuits hold that using a John Doe placeholder because the plaintiff does not know the officer's name reflects lack of knowledge rather than a mistake, and refuse relation back; other courts read Krupski more generously. The issue is genuinely contested.",
        "citation": "Fed. R. Civ. P. 15(c); Krupski v. Costa Crociere S. p. A., 560 U.S. 538 (2010)",
        "correctRuling": "either",
        "ruling": {
          "grant": "amendment relates back",
          "deny": "no relation back"
        },
        "consequence": {
          "grant": "Relation back allowed. The court reads 'mistake' broadly enough to reach John Doe placeholders under Krupski.",
          "deny": "Relation back denied. The court treats lack of knowledge of the officer's name as different from a Rule 15(c) mistake."
        },
        "repEffect": {
          "grant": 5,
          "deny": 5
        },
        "id": "civPro-018",
        "legacyTitles": [
          "Motion to Amend — Relation Back of Amendment"
        ],
        "topic": "erieAndTrial",
        "jurisdiction": "U.S. federal",
        "lastReviewed": null,
        "ambiguityReason": "Rule 15(c)(1)(C) requires a 'mistake concerning the proper party's identity.' Several circuits hold that using a John Doe placeholder because the plaintiff does not know the officer's name reflects lack of knowledge rather than a mistake, and refuse relation back; other courts read Krupski more generously. The issue is genuinely contested.",
        "authorities": [
          {
            "label": "Opinion · 560 U.S. 538",
            "url": "https://www.law.cornell.edu/supremecourt/text/560/538"
          },
          {
            "label": "Civil Procedure Rule 15",
            "url": "https://www.law.cornell.edu/rules/frcp/rule_15"
          }
        ]
      },
      {
        "title": "Motion to Dismiss — Lack of Standing",
        "difficulty": "hard",
        "party": "defendant",
        "flavor": "Plaintiff's personal data was stolen in a breach of defendant's database. No identity theft, fraud, or financial loss has occurred. Plaintiff's only claimed injury is 'fear that the data may be misused in the future' and the time spent monitoring credit reports.",
        "explanation": "Article III standing requires a concrete, particularized, and actual or imminent injury. On this sparse record, feared future misuse of stolen data without actual misuse, fraud, financial loss, or a clearly imminent threat is generally insufficient, though data-breach standing remains fact- and circuit-sensitive.",
        "citation": "Lujan v. Defenders of Wildlife, 504 U.S. 555 (1992); TransUnion LLC v. Ramirez, 594 U.S. 413 (2021)",
        "correctRuling": "grant",
        "ruling": {
          "grant": "dismissed for no standing",
          "deny": "case proceeds"
        },
        "consequence": {
          "grant": "Case dismissed. On this record, speculative future misuse does not satisfy injury in fact.",
          "deny": "Case proceeds in federal court on the basis of feared future harm that has not materialized."
        },
        "repEffect": {
          "grant": 12,
          "deny": -14
        },
        "id": "civPro-019",
        "legacyTitles": [
          "Motion to Dismiss — Lack of Standing"
        ],
        "topic": "erieAndTrial",
        "jurisdiction": "U.S. federal",
        "lastReviewed": null,
        "ambiguous": false,
        "ambiguityReason": null,
        "authorities": [
          {
            "label": "Opinion · 504 U.S. 555",
            "url": "https://www.law.cornell.edu/supremecourt/text/504/555"
          },
          {
            "label": "Opinion · 594 U.S. 413",
            "url": "https://www.law.cornell.edu/supremecourt/text/594/413"
          }
        ]
      },
      {
        "title": "Motion to Certify Class — Uniform Policy",
        "difficulty": "hard",
        "party": "plaintiff",
        "flavor": "Plaintiff seeks Rule 23 certification of 22,000 current and former employees on a state wage-and-hour claim, alleging a single written company policy categorically denied overtime eligibility regardless of actual work performed. Individual overtime hours vary, but the liability question is whether the written policy itself violates state law.",
        "explanation": "When a single company-wide policy is the alleged wrong and the key legal question is the same for every class member, common questions may predominate even if individual damages differ.",
        "citation": "Fed. R. Civ. P. 23(a)(2), (b)(3); Tyson Foods, Inc. v. Bouaphakeo, 577 U.S. 442 (2016)",
        "correctRuling": "grant",
        "ruling": {
          "grant": "class certified",
          "deny": "certification denied"
        },
        "consequence": {
          "grant": "Class certified. The challenge to a uniform written policy presents a common question that drives the litigation.",
          "deny": "Class denied despite a single challenged policy applying identically to every proposed class member."
        },
        "repEffect": {
          "grant": 10,
          "deny": -12
        },
        "id": "civPro-020",
        "legacyTitles": [
          "Motion to Certify Class — Uniform Policy"
        ],
        "topic": "classAction",
        "jurisdiction": "U.S. federal",
        "lastReviewed": null,
        "ambiguous": false,
        "ambiguityReason": null,
        "authorities": [
          {
            "label": "Opinion · 577 U.S. 442",
            "url": "https://www.law.cornell.edu/supremecourt/text/577/442"
          },
          {
            "label": "Civil Procedure Rule 23",
            "url": "https://www.law.cornell.edu/rules/frcp/rule_23"
          }
        ]
      },
      {
        "title": "Motion to Dismiss — Discrimination Claim With Facts",
        "difficulty": "hard",
        "party": "defendant",
        "flavor": "Plaintiff alleges racial discrimination in promotion. The complaint specifies: plaintiff scored highest on the evaluation, a white colleague with lower scores was promoted two weeks later, plaintiff's manager made documented racially coded remarks in HR files, and plaintiff filed an internal complaint before being passed over again.",
        "explanation": "When a complaint provides specific, concrete factual allegations — not mere legal conclusions — that plausibly support a discrimination claim, it survives Rule 12(b)(6) even if the defendant disputes each fact.",
        "citation": "Bell Atlantic Corp. v. Twombly, 550 U.S. 544 (2007); Ashcroft v. Iqbal, 556 U.S. 662 (2009)",
        "correctRuling": "deny",
        "ruling": {
          "grant": "complaint dismissed",
          "deny": "case proceeds"
        },
        "consequence": {
          "grant": "A factually detailed discrimination complaint is dismissed — an outcome Iqbal and Twombly do not mandate.",
          "deny": "Motion denied. The complaint pleads sufficient facts to render the discrimination claim plausible."
        },
        "repEffect": {
          "grant": -12,
          "deny": 10
        },
        "id": "civPro-021",
        "legacyTitles": [
          "Motion to Dismiss — Discrimination Claim With Facts"
        ],
        "topic": "pleading",
        "jurisdiction": "U.S. federal",
        "lastReviewed": null,
        "ambiguous": false,
        "ambiguityReason": null,
        "authorities": [
          {
            "label": "Opinion · 550 U.S. 544",
            "url": "https://www.law.cornell.edu/supremecourt/text/550/544"
          },
          {
            "label": "Opinion · 556 U.S. 662",
            "url": "https://www.law.cornell.edu/supremecourt/text/556/662"
          }
        ]
      },
      {
        "title": "Motion to Dismiss — No General Jurisdiction",
        "difficulty": "hard",
        "party": "defendant",
        "flavor": "Plaintiff sues Daimler — a German company — in California over injuries allegedly caused by an Argentine subsidiary's conduct in Argentina. Daimler has a California subsidiary that sells cars, but its principal place of business and place of incorporation are both in Germany.",
        "explanation": "General (all-purpose) jurisdiction over a corporation attaches only where the corporation is 'at home' — ordinarily its state of incorporation and principal place of business. Continuous sales in a forum do not make the corporation 'at home' there.",
        "citation": "Daimler AG v. Bauman, 571 U.S. 117 (2014); Goodyear Dunlop Tires Operations, S. A. v. Brown, 564 U.S. 915 (2011)",
        "correctRuling": "grant",
        "ruling": {
          "grant": "dismissed for no jurisdiction",
          "deny": "jurisdiction asserted"
        },
        "consequence": {
          "grant": "Case dismissed. Daimler is not 'at home' in California under Goodyear/Daimler.",
          "deny": "General jurisdiction is asserted on a 'continuous sales' theory Daimler expressly rejected."
        },
        "repEffect": {
          "grant": 12,
          "deny": -14
        },
        "id": "civPro-022",
        "legacyTitles": [
          "Motion to Dismiss — No General Jurisdiction"
        ],
        "topic": "jurisdiction",
        "jurisdiction": "U.S. federal",
        "lastReviewed": null,
        "ambiguous": false,
        "ambiguityReason": null,
        "authorities": [
          {
            "label": "Opinion · 571 U.S. 117",
            "url": "https://www.law.cornell.edu/supremecourt/text/571/117"
          },
          {
            "label": "Opinion · 564 U.S. 915",
            "url": "https://www.law.cornell.edu/supremecourt/text/564/915"
          }
        ]
      },
      {
        "title": "Motion to Invalidate Class Arbitration Waiver",
        "difficulty": "hard",
        "party": "plaintiff",
        "flavor": "Defendant's consumer arbitration agreement contains a clear waiver of class proceedings. Plaintiffs move to strike the waiver, arguing that a state unconscionability doctrine renders class-action waivers in consumer contracts invalid as a matter of state law.",
        "explanation": "The FAA preempts state-law rules that stand as an obstacle to the enforcement of arbitration agreements according to their terms — including state doctrines that categorically invalidate class-action waivers in consumer contracts.",
        "citation": "AT&T Mobility LLC v. Concepcion, 563 U.S. 333 (2011); 9 U.S.C. § 2",
        "correctRuling": "deny",
        "ruling": {
          "grant": "waiver struck",
          "deny": "waiver enforced"
        },
        "consequence": {
          "grant": "A class-action waiver is voided on a state-law theory Concepcion holds preempted.",
          "deny": "Waiver enforced. State rules categorically voiding class-action waivers are preempted by the FAA."
        },
        "repEffect": {
          "grant": -12,
          "deny": 10
        },
        "id": "civPro-023",
        "legacyTitles": [
          "Motion to Invalidate Class Arbitration Waiver"
        ],
        "topic": "classAction",
        "jurisdiction": "U.S. federal",
        "lastReviewed": null,
        "ambiguous": false,
        "ambiguityReason": null,
        "authorities": [
          {
            "label": "Opinion · 563 U.S. 333",
            "url": "https://www.law.cornell.edu/supremecourt/text/563/333"
          },
          {
            "label": "9 U.S.C. § 2",
            "url": "https://www.law.cornell.edu/uscode/text/9/2"
          }
        ]
      },
      {
        "title": "Motion for Judgment as a Matter of Law",
        "difficulty": "hard",
        "party": "defendant",
        "flavor": "At the close of plaintiff's case, plaintiff has introduced no evidence on a required element of the claim — causation — beyond speculation. Defendant moves for judgment as a matter of law under Rule 50(a).",
        "explanation": "Judgment as a matter of law is appropriate when a reasonable jury would not have a legally sufficient evidentiary basis to find for the nonmoving party on an issue essential to the claim. Pure speculation on an essential element does not meet that bar.",
        "citation": "Fed. R. Civ. P. 50(a); Reeves v. Sanderson Plumbing Products, Inc., 530 U.S. 133 (2000)",
        "correctRuling": "grant",
        "ruling": {
          "grant": "judgment for defendant",
          "deny": "case to jury"
        },
        "consequence": {
          "grant": "Judgment as a matter of law granted. No reasonable jury could find causation on pure speculation.",
          "deny": "A required element with no evidentiary support is sent to the jury anyway."
        },
        "repEffect": {
          "grant": 10,
          "deny": -12
        },
        "id": "civPro-024",
        "legacyTitles": [
          "Motion for Judgment as a Matter of Law"
        ],
        "topic": "erieAndTrial",
        "jurisdiction": "U.S. federal",
        "lastReviewed": null,
        "ambiguous": false,
        "ambiguityReason": null,
        "authorities": [
          {
            "label": "Opinion · 530 U.S. 133",
            "url": "https://www.law.cornell.edu/supremecourt/text/530/133"
          },
          {
            "label": "Civil Procedure Rule 50",
            "url": "https://www.law.cornell.edu/rules/frcp/rule_50"
          }
        ]
      },
      {
        "title": "Motion for Protective Order — Deposition Scope",
        "difficulty": "medium",
        "ambiguous": true,
        "party": "defendant",
        "flavor": "Plaintiff noticed a corporate 30(b)(6) deposition covering 22 topics. Eight relate to the core pricing dispute; the other fourteen range from general marketing practices to board minutes from an adjacent product line. Defendant seeks to limit the deposition to eight core topics.",
        "explanation": "Courts have broad discretion to limit discovery that is disproportionate or cumulative. Whether the outer fourteen topics are legitimately context-providing or a fishing expedition is intensely fact-specific, and courts frequently reach different outcomes on similar records.",
        "citation": "Fed. R. Civ. P. 26(b)(1), (c)",
        "correctRuling": "either",
        "ruling": {
          "grant": "deposition limited",
          "deny": "full deposition allowed"
        },
        "consequence": {
          "grant": "Deposition limited to the eight core topics. The remainder is disproportionate to the needs of the case.",
          "deny": "Full deposition allowed. The broader context may bear on the pricing decision at the center of the dispute."
        },
        "repEffect": {
          "grant": 5,
          "deny": 5
        },
        "id": "civPro-025",
        "legacyTitles": [
          "Motion for Protective Order — Deposition Scope"
        ],
        "topic": "discovery",
        "jurisdiction": "U.S. federal",
        "lastReviewed": null,
        "ambiguityReason": "Courts have broad discretion to limit discovery that is disproportionate or cumulative. Whether the outer fourteen topics are legitimately context-providing or a fishing expedition is intensely fact-specific, and courts frequently reach different outcomes on similar records.",
        "authorities": [
          {
            "label": "Civil Procedure Rule 26",
            "url": "https://www.law.cornell.edu/rules/frcp/rule_26"
          }
        ]
      },
      {
        "title": "Motion to Seal Court Records — Trade Secrets",
        "difficulty": "medium",
        "ambiguous": true,
        "party": "defendant",
        "flavor": "Defendant seeks to seal specific financial exhibits containing pricing algorithms it argues are trade secrets. The press has intervened. The proposed sealing covers only the four disputed exhibits, not the full docket, and defendant provides supporting declarations from its CFO.",
        "explanation": "There is a strong presumption of public access to court records, but trade secret exhibits can sometimes be sealed on a particularized showing. Whether this showing is sufficient is genuinely contested — courts diverge on how closely to scrutinize such requests.",
        "citation": "Fed. R. Civ. P. 26(c); common law right of public access",
        "correctRuling": "either",
        "ruling": {
          "grant": "exhibits sealed",
          "deny": "exhibits public"
        },
        "consequence": {
          "grant": "Exhibits sealed. The particularized trade-secret showing outweighs the presumption of access.",
          "deny": "Sealing denied. The public right of access to judicial records is not overcome on this record."
        },
        "repEffect": {
          "grant": 5,
          "deny": 5
        },
        "id": "civPro-026",
        "legacyTitles": [
          "Motion to Seal Court Records — Trade Secrets"
        ],
        "topic": "discovery",
        "jurisdiction": "U.S. federal",
        "lastReviewed": null,
        "ambiguityReason": "There is a strong presumption of public access to court records, but trade secret exhibits can sometimes be sealed on a particularized showing. Whether this showing is sufficient is genuinely contested — courts diverge on how closely to scrutinize such requests.",
        "authorities": [
          {
            "label": "Civil Procedure Rule 26",
            "url": "https://www.law.cornell.edu/rules/frcp/rule_26"
          }
        ]
      },
      {
        "title": "Motion to Stay Litigation Pending Criminal Investigation",
        "difficulty": "hard",
        "ambiguous": true,
        "party": "defendant",
        "flavor": "Defendant is under active DOJ investigation for the same conduct at issue in this civil case. Defendant seeks a stay of civil proceedings, arguing Fifth Amendment concerns. Plaintiff shows no evidence will be lost and argues mounting delay prejudice.",
        "explanation": "Courts have inherent power to stay civil proceedings pending a related criminal investigation but must balance the plaintiff's interest against self-incrimination concerns. The overlap of civil and criminal claims creates genuinely competing equities, and outcomes vary widely.",
        "citation": "Fed. R. Civ. P. 26(c); court's inherent authority",
        "correctRuling": "either",
        "ruling": {
          "grant": "civil stayed",
          "deny": "civil proceeds"
        },
        "consequence": {
          "grant": "Civil case stayed. Fifth Amendment concerns in a directly overlapping criminal investigation are sufficient.",
          "deny": "Civil case proceeds. Plaintiff's interests and the speculative scope of criminal exposure tip against a stay."
        },
        "repEffect": {
          "grant": 5,
          "deny": 5
        },
        "id": "civPro-027",
        "legacyTitles": [
          "Motion to Stay Litigation Pending Criminal Investigation"
        ],
        "topic": "erieAndTrial",
        "jurisdiction": "U.S. federal",
        "lastReviewed": null,
        "ambiguityReason": "Courts have inherent power to stay civil proceedings pending a related criminal investigation but must balance the plaintiff's interest against self-incrimination concerns. The overlap of civil and criminal claims creates genuinely competing equities, and outcomes vary widely.",
        "authorities": [
          {
            "label": "Civil Procedure Rule 26",
            "url": "https://www.law.cornell.edu/rules/frcp/rule_26"
          }
        ]
      },
      {
        "title": "Motion to Decline Supplemental Jurisdiction",
        "difficulty": "hard",
        "ambiguous": true,
        "party": "defendant",
        "flavor": "After early dismissal of the sole federal claim on the pleadings, only complex state-law business-tort claims remain. Defendant moves under § 1367(c) to decline supplemental jurisdiction. The case has been pending seven months; limited discovery has occurred; novel state law issues are present.",
        "explanation": "Once all federal claims are dismissed early in a case, § 1367(c) gives courts broad discretion to decline supplemental jurisdiction over remaining state claims. But considerations of judicial economy, convenience, and fairness cut both ways, and courts split on similar records.",
        "citation": "28 U.S.C. § 1367(c); United Mine Workers v. Gibbs, 383 U.S. 715 (1966)",
        "correctRuling": "either",
        "ruling": {
          "grant": "state claims remanded/dismissed",
          "deny": "federal court retains"
        },
        "consequence": {
          "grant": "Supplemental jurisdiction declined. Novel state issues belong in state court after early federal dismissal.",
          "deny": "Federal court retains supplemental jurisdiction. Seven months of federal work and partial discovery support keeping the case."
        },
        "repEffect": {
          "grant": 5,
          "deny": 5
        },
        "id": "civPro-028",
        "legacyTitles": [
          "Motion to Decline Supplemental Jurisdiction"
        ],
        "topic": "jurisdiction",
        "jurisdiction": "U.S. federal",
        "lastReviewed": null,
        "ambiguityReason": "Once all federal claims are dismissed early in a case, § 1367(c) gives courts broad discretion to decline supplemental jurisdiction over remaining state claims. But considerations of judicial economy, convenience, and fairness cut both ways, and courts split on similar records.",
        "authorities": [
          {
            "label": "Opinion · 383 U.S. 715",
            "url": "https://www.law.cornell.edu/supremecourt/text/383/715"
          },
          {
            "label": "28 U.S.C. § 1367",
            "url": "https://www.law.cornell.edu/uscode/text/28/1367"
          }
        ]
      }
    ]
  },
  "conLaw": {
    "name": "CONSTITUTIONAL LAW",
    "headerClass": "co",
    "cardClass": "co-card",
    "motions": [
      {
        "title": "Motion to Deny Prior Restraint — Newspaper Opposes Publication Injunction",
        "difficulty": "easy",
        "party": "plaintiff",
        "flavor": "The federal government seeks a court order barring a major newspaper from publishing an investigative series based on leaked classified documents. Government argues publication will embarrass officials. No specific, concrete harm to national security is identified.",
        "explanation": "Prior restraints on publication carry a heavy presumption of unconstitutionality. The government must show a direct, immediate, and irreparable harm — embarrassment or classification alone does not suffice.",
        "citation": "Near v. Minnesota, 283 U.S. 697 (1931); New York Times Co. v. United States, 403 U.S. 713 (1971)",
        "correctRuling": "grant",
        "ruling": {
          "grant": "restraint denied",
          "deny": "press enjoined"
        },
        "consequence": {
          "grant": "Prior restraint denied. No showing sufficient to overcome the strong presumption against pre-publication censorship.",
          "deny": "The press is enjoined from publishing based on embarrassment and classification without an imminent harm showing."
        },
        "repEffect": {
          "grant": 12,
          "deny": -16
        },
        "id": "conLaw-001",
        "legacyTitles": [
          "Motion to Deny Prior Restraint — Newspaper Opposes Publication Injunction"
        ],
        "topic": "firstA",
        "jurisdiction": "U.S. federal",
        "lastReviewed": null,
        "ambiguous": false,
        "ambiguityReason": null,
        "authorities": [
          {
            "label": "Opinion · 283 U.S. 697",
            "url": "https://www.law.cornell.edu/supremecourt/text/283/697"
          },
          {
            "label": "Opinion · 403 U.S. 713",
            "url": "https://www.law.cornell.edu/supremecourt/text/403/713"
          }
        ]
      },
      {
        "title": "Motion to Dismiss — Incitement Statute Unconstitutionally Overbroad",
        "difficulty": "easy",
        "party": "plaintiff",
        "flavor": "A state law criminalizes 'any advocacy of illegal action, including in academic or historical contexts.' A professor was arrested for lecturing on historical civil-disobedience movements including the civil-rights sit-ins.",
        "explanation": "The First Amendment protects abstract advocacy of illegal action. Only speech directed to inciting imminent lawless action and likely to produce such action falls outside constitutional protection.",
        "citation": "Brandenburg v. Ohio, 395 U.S. 444 (1969)",
        "correctRuling": "grant",
        "ruling": {
          "grant": "statute struck",
          "deny": "statute upheld"
        },
        "consequence": {
          "grant": "Statute invalidated. Abstract advocacy and historical discussion are fully protected under Brandenburg.",
          "deny": "A law criminalizing all advocacy of illegal action — including academic speech — is upheld."
        },
        "repEffect": {
          "grant": 12,
          "deny": -16
        },
        "id": "conLaw-002",
        "legacyTitles": [
          "Motion to Dismiss — Incitement Statute Unconstitutionally Overbroad"
        ],
        "topic": "firstA",
        "jurisdiction": "U.S. federal",
        "lastReviewed": null,
        "ambiguous": false,
        "ambiguityReason": null,
        "authorities": [
          {
            "label": "Opinion · 395 U.S. 444",
            "url": "https://www.law.cornell.edu/supremecourt/text/395/444"
          }
        ]
      },
      {
        "title": "Motion to Admit Thermal Scan Evidence",
        "difficulty": "easy",
        "party": "plaintiff",
        "flavor": "Without a warrant, federal agents used a thermal-imaging device from the street to detect heat patterns inside defendant's home consistent with a marijuana grow operation. This observation formed the entire basis for a search warrant. The government moves to admit the thermal-scan evidence and fruits of the warrant.",
        "explanation": "Using sense-enhancing technology to obtain information about the interior of a home that could not otherwise be obtained without physical intrusion is a Fourth Amendment search requiring a warrant.",
        "citation": "Kyllo v. United States, 533 U.S. 27 (2001)",
        "correctRuling": "deny",
        "ruling": {
          "grant": "scan admitted",
          "deny": "scan suppressed"
        },
        "consequence": {
          "grant": "A warrantless technological intrusion into the home is admitted because officers stayed on the street.",
          "deny": "Evidence suppressed. The warrantless thermal scan of a home violated the Fourth Amendment."
        },
        "repEffect": {
          "grant": -14,
          "deny": 12
        },
        "id": "conLaw-003",
        "legacyTitles": [
          "Motion to Admit Thermal Scan Evidence"
        ],
        "topic": "fourthA",
        "jurisdiction": "U.S. federal",
        "lastReviewed": null,
        "ambiguous": false,
        "ambiguityReason": null,
        "authorities": [
          {
            "label": "Opinion · 533 U.S. 27",
            "url": "https://www.law.cornell.edu/supremecourt/text/533/27"
          }
        ]
      },
      {
        "title": "Motion to Enjoin Benefit Termination — Zero Pre-Termination Process",
        "difficulty": "easy",
        "party": "plaintiff",
        "flavor": "A state agency terminated a recipient's disability benefits without any pre-termination notice, any statement of reasons, or any opportunity to respond. The recipient had received benefits for six years and has no other income.",
        "explanation": "The Due Process Clause requires, at a minimum, that the government provide notice and some opportunity to be heard before depriving a person of a protected property interest. Zero process before termination is constitutionally untenable.",
        "citation": "Goldberg v. Kelly, 397 U.S. 254 (1970); Mathews v. Eldridge, 424 U.S. 319 (1976); U.S. Const. amend. XIV",
        "correctRuling": "grant",
        "ruling": {
          "grant": "termination enjoined",
          "deny": "termination upheld"
        },
        "consequence": {
          "grant": "Termination enjoined. No process whatsoever before depriving a long-term recipient of her only income is unconstitutional.",
          "deny": "Benefits are cut off without notice or hearing despite a strong property interest."
        },
        "repEffect": {
          "grant": 12,
          "deny": -14
        },
        "id": "conLaw-004",
        "legacyTitles": [
          "Motion to Enjoin Benefit Termination — Zero Pre-Termination Process"
        ],
        "topic": "dueProcess",
        "jurisdiction": "U.S. federal",
        "lastReviewed": null,
        "ambiguous": false,
        "ambiguityReason": null,
        "authorities": [
          {
            "label": "Opinion · 397 U.S. 254",
            "url": "https://www.law.cornell.edu/supremecourt/text/397/254"
          },
          {
            "label": "Opinion · 424 U.S. 319",
            "url": "https://www.law.cornell.edu/supremecourt/text/424/319"
          },
          {
            "label": "Constitution · Amendment XIV",
            "url": "https://www.law.cornell.edu/constitution/amendment14"
          }
        ]
      },
      {
        "title": "Motion to Dismiss — Defamation Complaint Lacks Actual Malice",
        "difficulty": "easy",
        "party": "plaintiff",
        "flavor": "A U.S. Senator sues a newspaper for publishing a false story about his voting record. The complaint alleges the story was incorrect but does not allege that the newspaper knew it was false or acted with reckless disregard for the truth.",
        "explanation": "Public officials must prove actual malice — knowledge of falsity or reckless disregard for the truth — to recover for defamation about matters of public concern. A plaintiff who does not plead or prove actual malice cannot prevail.",
        "citation": "New York Times Co. v. Sullivan, 376 U.S. 254 (1964)",
        "correctRuling": "grant",
        "ruling": {
          "grant": "claim dismissed",
          "deny": "claim proceeds"
        },
        "consequence": {
          "grant": "Defamation claim dismissed. A public official must show actual malice, which is not alleged here.",
          "deny": "The newspaper is held liable for defamation without any showing of actual malice."
        },
        "repEffect": {
          "grant": 10,
          "deny": -14
        },
        "id": "conLaw-005",
        "legacyTitles": [
          "Motion to Dismiss — Defamation Complaint Lacks Actual Malice"
        ],
        "topic": "firstA",
        "jurisdiction": "U.S. federal",
        "lastReviewed": null,
        "ambiguous": false,
        "ambiguityReason": null,
        "authorities": [
          {
            "label": "Opinion · 376 U.S. 254",
            "url": "https://www.law.cornell.edu/supremecourt/text/376/254"
          }
        ]
      },
      {
        "title": "Motion to Dismiss Prosecution — Fighting Words Not Protected Speech",
        "difficulty": "medium",
        "ambiguous": true,
        "party": "defendant",
        "flavor": "Defendant walked up to a uniformed officer on a public street and shouted a direct, targeted personal insult using profanity and a slur, face to face, apparently intended to provoke a physical response. He was arrested under a breach-of-peace statute.",
        "explanation": "Fighting words are a narrow category: direct personal insults likely to provoke an immediate violent response from the ordinary addressee may fall outside First Amendment protection. But Houston v. Hill emphasized that trained police officers must tolerate 'a significant amount of verbal criticism and challenge' — making the exception much harder to invoke when the target is an officer rather than a private person.",
        "citation": "Chaplinsky v. New Hampshire, 315 U.S. 568 (1942); City of Houston v. Hill, 482 U.S. 451 (1987)",
        "correctRuling": "either",
        "ruling": {
          "grant": "prosecution barred",
          "deny": "prosecution proceeds"
        },
        "consequence": {
          "grant": "Prosecution barred. Applied to a trained officer, the speech is protected criticism under Houston v. Hill.",
          "deny": "Prosecution proceeds. On these facts the court finds the narrow Chaplinsky exception satisfied despite the officer audience."
        },
        "repEffect": {
          "grant": 5,
          "deny": 5
        },
        "id": "conLaw-006",
        "legacyTitles": [
          "Motion to Dismiss Prosecution — Fighting Words Not Protected Speech"
        ],
        "topic": "firstA",
        "jurisdiction": "U.S. federal",
        "lastReviewed": null,
        "ambiguityReason": "Fighting words are a narrow category: direct personal insults likely to provoke an immediate violent response from the ordinary addressee may fall outside First Amendment protection. But Houston v. Hill emphasized that trained police officers must tolerate 'a significant amount of verbal criticism and challenge' — making the exception much harder to invoke when the target is an officer rather than a private person.",
        "authorities": [
          {
            "label": "Opinion · 315 U.S. 568",
            "url": "https://www.law.cornell.edu/supremecourt/text/315/568"
          },
          {
            "label": "Opinion · 482 U.S. 451",
            "url": "https://www.law.cornell.edu/supremecourt/text/482/451"
          }
        ]
      },
      {
        "title": "Motion to Enjoin — Judicial Enforcement of Racially Restrictive Covenant",
        "difficulty": "easy",
        "party": "plaintiff",
        "flavor": "A homeowners' association sues in state court to block a Black family from taking title to a property based on a 1935 private deed covenant barring sale to non-white buyers. The association argues the covenant is purely a private contract beyond Fourteenth Amendment reach.",
        "explanation": "Judicial enforcement of a racially restrictive covenant is state action that triggers the Equal Protection Clause. Even a private agreement cannot be enforced by state courts in a manner that denies equal protection.",
        "citation": "Shelley v. Kraemer, 334 U.S. 1 (1948); U.S. Const. amend. XIV",
        "correctRuling": "grant",
        "ruling": {
          "grant": "covenant unenforceable",
          "deny": "covenant enforced"
        },
        "consequence": {
          "grant": "Enforcement enjoined. A court order implementing a racial covenant is state action barred by Shelley v. Kraemer.",
          "deny": "State courts are permitted to enforce a racially restrictive covenant — a plain Fourteenth Amendment violation."
        },
        "repEffect": {
          "grant": 12,
          "deny": -16
        },
        "id": "conLaw-007",
        "legacyTitles": [
          "Motion to Enjoin — Judicial Enforcement of Racially Restrictive Covenant"
        ],
        "topic": "equalProt",
        "jurisdiction": "U.S. federal",
        "lastReviewed": null,
        "ambiguous": false,
        "ambiguityReason": null,
        "authorities": [
          {
            "label": "Opinion · 334 U.S. 1",
            "url": "https://www.law.cornell.edu/supremecourt/text/334/1"
          },
          {
            "label": "Constitution · Amendment XIV",
            "url": "https://www.law.cornell.edu/constitution/amendment14"
          }
        ]
      },
      {
        "title": "Motion to Dismiss — School Prayer Violates Establishment Clause",
        "difficulty": "easy",
        "party": "plaintiff",
        "flavor": "A state school board directs teachers to lead a brief, nondenominational prayer composed by a state agency at the start of each school day. Students may remain silent, but the prayer is officially sponsored and recited in class.",
        "explanation": "Government composition and direction of a prayer for recitation in public schools — even a brief, nondenominational one with an opt-out — constitutes an establishment of religion forbidden by the First Amendment. Kennedy v. Bremerton (2022) replaced the Lemon test with a historical-practices analysis, but state-composed classroom prayer remains clearly unconstitutional under any framework.",
        "citation": "Engel v. Vitale, 370 U.S. 421 (1962); Kennedy v. Bremerton Sch. Dist., 597 U.S. ___ (2022); U.S. Const. amend. I",
        "correctRuling": "grant",
        "ruling": {
          "grant": "prayer enjoined",
          "deny": "prayer permitted"
        },
        "consequence": {
          "grant": "School prayer enjoined. State composition and sponsorship of classroom prayer violates the Establishment Clause.",
          "deny": "An officially composed school prayer is upheld despite the Supreme Court's clear holding in Engel v. Vitale."
        },
        "repEffect": {
          "grant": 12,
          "deny": -14
        },
        "id": "conLaw-008",
        "legacyTitles": [
          "Motion to Dismiss — School Prayer Violates Establishment Clause"
        ],
        "topic": "firstA",
        "jurisdiction": "U.S. federal",
        "lastReviewed": null,
        "ambiguous": false,
        "ambiguityReason": null,
        "authorities": [
          {
            "label": "Opinion · 370 U.S. 421",
            "url": "https://www.law.cornell.edu/supremecourt/text/370/421"
          },
          {
            "label": "Constitution · Amendment I",
            "url": "https://www.law.cornell.edu/constitution/amendment1"
          }
        ]
      },
      {
        "title": "Motion for Just Compensation — Permanent Physical Occupation by Cable Line",
        "difficulty": "easy",
        "party": "plaintiff",
        "flavor": "A state statute requires landlords to permit a cable company to install a small permanent cable box and wiring on the exterior of their apartment buildings in exchange for a one-time nominal fee set by a state commission.",
        "explanation": "A permanent physical occupation of property authorized by government action is a per se taking requiring just compensation, regardless of how minor the intrusion or how weighty the public interest.",
        "citation": "Loretto v. Teleprompter Manhattan CATV Corp., 458 U.S. 419 (1982); U.S. Const. amend. V",
        "correctRuling": "grant",
        "ruling": {
          "grant": "compensation required",
          "deny": "no taking found"
        },
        "consequence": {
          "grant": "Taking found. A permanent physical occupation — however small — requires just compensation under the Fifth Amendment.",
          "deny": "A permanent government-authorized physical intrusion on private property is upheld without compensation."
        },
        "repEffect": {
          "grant": 10,
          "deny": -12
        },
        "id": "conLaw-009",
        "legacyTitles": [
          "Motion for Just Compensation — Permanent Physical Occupation by Cable Line"
        ],
        "topic": "takings",
        "jurisdiction": "U.S. federal",
        "lastReviewed": null,
        "ambiguous": false,
        "ambiguityReason": null,
        "authorities": [
          {
            "label": "Opinion · 458 U.S. 419",
            "url": "https://www.law.cornell.edu/supremecourt/text/458/419"
          },
          {
            "label": "Constitution · Amendment V",
            "url": "https://www.law.cornell.edu/constitution/amendment5"
          }
        ]
      },
      {
        "title": "Motion to Dismiss — Obscenity Prosecution Under Miller Test",
        "difficulty": "easy",
        "party": "defendant",
        "flavor": "Defendant mass-mailed unsolicited brochures containing hard-core sexual depictions, no literary or scientific context, and offering adult materials for sale. A state obscenity statute tracking the Miller test was applied. The jury found the material, applying contemporary community standards, patently offensive and lacking serious value.",
        "explanation": "Material is unprotected as obscene if, applying contemporary community standards, the average person would find it appeals to the prurient interest, it depicts sexual conduct in a patently offensive way, and it lacks serious literary, artistic, political, or scientific value.",
        "citation": "Miller v. California, 413 U.S. 15 (1973); U.S. Const. amend. I",
        "correctRuling": "deny",
        "ruling": {
          "grant": "prosecution barred",
          "deny": "prosecution proceeds"
        },
        "consequence": {
          "grant": "A prosecution satisfying every element of Miller is barred on a mistaken view of First Amendment scope.",
          "deny": "Challenge rejected. Material meeting the Miller test is unprotected obscenity."
        },
        "repEffect": {
          "grant": -10,
          "deny": 8
        },
        "id": "conLaw-010",
        "legacyTitles": [
          "Motion to Dismiss — Obscenity Prosecution Under Miller Test"
        ],
        "topic": "firstA",
        "jurisdiction": "U.S. federal",
        "lastReviewed": null,
        "ambiguous": false,
        "ambiguityReason": null,
        "authorities": [
          {
            "label": "Opinion · 413 U.S. 15",
            "url": "https://www.law.cornell.edu/supremecourt/text/413/15"
          },
          {
            "label": "Constitution · Amendment I",
            "url": "https://www.law.cornell.edu/constitution/amendment1"
          }
        ]
      },
      {
        "title": "Motion to Strike Ordinance — Amplified Sound Ban in Public Parks",
        "difficulty": "medium",
        "party": "plaintiff",
        "flavor": "A city ordinance prohibits amplified sound in public parks between 10 p.m. and 7 a.m. It applies equally to all speech and music regardless of content. Plaintiff's band was cited for a midnight concert. Alternative venues — parks with daytime permits and indoor stages — are readily available.",
        "explanation": "Content-neutral time, place, and manner restrictions on speech are upheld if they are narrowly tailored to serve a significant government interest and leave open ample alternative channels of communication.",
        "citation": "U.S. Const. amend. I",
        "correctRuling": "deny",
        "ruling": {
          "grant": "ordinance struck",
          "deny": "ordinance upheld"
        },
        "consequence": {
          "grant": "A content-neutral noise ordinance with ample alternatives is struck down.",
          "deny": "Challenge rejected. The ordinance is content-neutral, serves a real interest, and leaves open alternative channels."
        },
        "repEffect": {
          "grant": -12,
          "deny": 10
        },
        "id": "conLaw-011",
        "legacyTitles": [
          "Motion to Strike Ordinance — Amplified Sound Ban in Public Parks"
        ],
        "topic": "firstA",
        "jurisdiction": "U.S. federal",
        "lastReviewed": null,
        "ambiguous": false,
        "ambiguityReason": null,
        "authorities": [
          {
            "label": "Constitution · Amendment I",
            "url": "https://www.law.cornell.edu/constitution/amendment1"
          }
        ]
      },
      {
        "title": "Motion to Dismiss Conviction — Flag Burning as Protected Symbolic Speech",
        "difficulty": "medium",
        "party": "defendant",
        "flavor": "Defendant burned a U.S. flag on the steps of a state capitol during a political protest over government policy. He was convicted under a state law making it a crime to 'desecrate' the national flag in a way that the public might find offensive.",
        "explanation": "The government may not prohibit the expression of an idea simply because society finds it disagreeable. Symbolic political speech — including flag burning — is protected by the First Amendment.",
        "citation": "Texas v. Johnson, 491 U.S. 397 (1989)",
        "correctRuling": "grant",
        "ruling": {
          "grant": "conviction reversed",
          "deny": "conviction affirmed"
        },
        "consequence": {
          "grant": "Conviction reversed. Political flag burning is protected symbolic speech; the state may not criminalize it.",
          "deny": "The flag-burning conviction stands despite the Supreme Court's clear holding in Texas v. Johnson."
        },
        "repEffect": {
          "grant": 12,
          "deny": -16
        },
        "id": "conLaw-012",
        "legacyTitles": [
          "Motion to Dismiss Conviction — Flag Burning as Protected Symbolic Speech"
        ],
        "topic": "firstA",
        "jurisdiction": "U.S. federal",
        "lastReviewed": null,
        "ambiguous": false,
        "ambiguityReason": null,
        "authorities": [
          {
            "label": "Opinion · 491 U.S. 397",
            "url": "https://www.law.cornell.edu/supremecourt/text/491/397"
          }
        ]
      },
      {
        "title": "Motion to Uphold Race-Based Fishing License Restriction",
        "difficulty": "medium",
        "party": "defendant",
        "flavor": "A state statute restricts certain commercial fishing licenses to members of one racial group, justifying the restriction as preserving 'traditional cultural fishing practices.' No individual determination of cultural affiliation is made. The state moves for summary judgment dismissing the equal-protection challenge.",
        "explanation": "Racial classifications in government action are subject to strict scrutiny. The government must show a compelling interest pursued by narrowly tailored means. A broad racial category for commercial licenses cannot satisfy that standard.",
        "citation": "U.S. Const. amend. XIV; strict scrutiny",
        "correctRuling": "deny",
        "ruling": {
          "grant": "statute upheld",
          "deny": "statute struck"
        },
        "consequence": {
          "grant": "An explicit race-based licensing restriction is upheld on a stated cultural-preservation rationale.",
          "deny": "Statute struck down. Racial classification in commercial licensing fails strict scrutiny."
        },
        "repEffect": {
          "grant": -14,
          "deny": 12
        },
        "id": "conLaw-013",
        "legacyTitles": [
          "Motion to Uphold Race-Based Fishing License Restriction"
        ],
        "topic": "equalProt",
        "jurisdiction": "U.S. federal",
        "lastReviewed": null,
        "ambiguous": false,
        "ambiguityReason": null,
        "authorities": [
          {
            "label": "Constitution · Amendment XIV",
            "url": "https://www.law.cornell.edu/constitution/amendment14"
          }
        ]
      },
      {
        "title": "Motion for Religious Exemption from Neutral Peyote Prohibition",
        "difficulty": "medium",
        "party": "plaintiff",
        "flavor": "A state law prohibits the possession of peyote, a controlled substance. Members of a Native American church seek an exemption, arguing the law burdens their sacramental use. The law is neutral and generally applicable — it makes no reference to religion and applies to everyone.",
        "explanation": "A neutral, generally applicable law that incidentally burdens religious practice does not violate the Free Exercise Clause, even if it creates a substantial burden on sincere religious belief. Fulton v. Philadelphia (2021) narrowed Smith by finding laws that allow individualized exemptions are not 'generally applicable,' but the core Smith rule holds for truly neutral, no-exemption statutes.",
        "citation": "Employment Division v. Smith, 494 U.S. 872 (1990); Fulton v. City of Philadelphia, 593 U.S. 522 (2021); U.S. Const. amend. I",
        "correctRuling": "deny",
        "ruling": {
          "grant": "exemption granted",
          "deny": "no exemption"
        },
        "consequence": {
          "grant": "A neutral drug law is struck down because it burdens one religion's sacramental practice.",
          "deny": "Challenge rejected. A neutral law of general applicability does not require a religious exemption."
        },
        "repEffect": {
          "grant": -12,
          "deny": 10
        },
        "id": "conLaw-014",
        "legacyTitles": [
          "Motion for Religious Exemption from Neutral Peyote Prohibition"
        ],
        "topic": "firstA",
        "jurisdiction": "U.S. federal",
        "lastReviewed": null,
        "ambiguous": false,
        "ambiguityReason": null,
        "authorities": [
          {
            "label": "Opinion · 494 U.S. 872",
            "url": "https://www.law.cornell.edu/supremecourt/text/494/872"
          },
          {
            "label": "Opinion · 593 U.S. 522",
            "url": "https://www.law.cornell.edu/supremecourt/text/593/522"
          },
          {
            "label": "Constitution · Amendment I",
            "url": "https://www.law.cornell.edu/constitution/amendment1"
          }
        ]
      },
      {
        "title": "Motion to Enforce Political Sign Ordinance",
        "difficulty": "medium",
        "party": "defendant",
        "flavor": "A city ordinance prohibits political signs in residential front yards but expressly permits commercial signs, real-estate 'for sale' signs, and holiday decorations in the same locations. Plaintiff posted a yard sign supporting a local ballot initiative. The city moves to enforce the ordinance and dismiss the First Amendment challenge.",
        "explanation": "A law that distinguishes permissible from impermissible signs based on their content is a content-based restriction subject to strict scrutiny, which is rarely satisfied.",
        "citation": "U.S. Const. amend. I",
        "correctRuling": "deny",
        "ruling": {
          "grant": "ordinance enforced",
          "deny": "ordinance struck"
        },
        "consequence": {
          "grant": "An ordinance that explicitly permits commercial signs but bans political speech in the same location is enforced.",
          "deny": "Ordinance struck down. Exempting commercial and holiday signs while banning political ones is a content-based restriction."
        },
        "repEffect": {
          "grant": -12,
          "deny": 10
        },
        "id": "conLaw-015",
        "legacyTitles": [
          "Motion to Enforce Political Sign Ordinance"
        ],
        "topic": "firstA",
        "jurisdiction": "U.S. federal",
        "lastReviewed": null,
        "ambiguous": false,
        "ambiguityReason": null,
        "authorities": [
          {
            "label": "Constitution · Amendment I",
            "url": "https://www.law.cornell.edu/constitution/amendment1"
          }
        ]
      },
      {
        "title": "Motion to Enjoin Extremist March Through Residential Neighborhood",
        "difficulty": "medium",
        "party": "defendant",
        "flavor": "An extremist group obtained a city permit for a march through a neighborhood targeted by their rhetoric. Residents seek an injunction. The march will proceed on public streets under narrowly drawn, content-neutral permit conditions. No evidence of planned imminent violence is presented.",
        "explanation": "The First Amendment protects even deeply offensive speech on public streets, so long as the speech does not constitute incitement to imminent lawless action. Courts may not enjoin a march solely because of its repugnant message.",
        "citation": "Brandenburg v. Ohio, 395 U.S. 444 (1969); U.S. Const. amend. I",
        "correctRuling": "deny",
        "ruling": {
          "grant": "march enjoined",
          "deny": "march proceeds"
        },
        "consequence": {
          "grant": "Hateful march enjoined despite the absence of any imminent incitement — a serious First Amendment error.",
          "deny": "Injunction denied. The government cannot suppress a march based on message alone absent imminent incitement."
        },
        "repEffect": {
          "grant": -12,
          "deny": 10
        },
        "id": "conLaw-016",
        "legacyTitles": [
          "Motion to Enjoin Extremist March Through Residential Neighborhood"
        ],
        "topic": "firstA",
        "jurisdiction": "U.S. federal",
        "lastReviewed": null,
        "ambiguous": false,
        "ambiguityReason": null,
        "authorities": [
          {
            "label": "Opinion · 395 U.S. 444",
            "url": "https://www.law.cornell.edu/supremecourt/text/395/444"
          },
          {
            "label": "Constitution · Amendment I",
            "url": "https://www.law.cornell.edu/constitution/amendment1"
          }
        ]
      },
      {
        "title": "Motion to Uphold Gun-Free School Zones Act Indictment",
        "difficulty": "medium",
        "party": "plaintiff",
        "flavor": "Defendant, a high-school senior, was charged under a federal statute making it a crime to possess a firearm in a local school zone. The statute contains no jurisdictional element requiring a connection to interstate commerce and no congressional findings tying school-zone gun possession to interstate commerce. The government moves to sustain the indictment.",
        "explanation": "Congress's Commerce Clause power reaches channels of commerce, instrumentalities of commerce, and activities that substantially affect interstate commerce. A pure regulation of non-economic conduct in a school zone, without a jurisdictional hook, exceeds that authority.",
        "citation": "United States v. Lopez, 514 U.S. 549 (1995); U.S. Const. art. I, § 8, cl. 3",
        "correctRuling": "deny",
        "ruling": {
          "grant": "indictment upheld",
          "deny": "indictment dismissed"
        },
        "consequence": {
          "grant": "A purely local, non-economic gun-possession statute is upheld as a regulation of interstate commerce.",
          "deny": "Indictment dismissed. A pure local gun-possession statute with no interstate-commerce hook exceeds Congress's Commerce Clause authority."
        },
        "repEffect": {
          "grant": -12,
          "deny": 10
        },
        "id": "conLaw-017",
        "legacyTitles": [
          "Motion to Uphold Gun-Free School Zones Act Indictment"
        ],
        "topic": "commerce",
        "jurisdiction": "U.S. federal",
        "lastReviewed": null,
        "ambiguous": false,
        "ambiguityReason": null,
        "authorities": [
          {
            "label": "Opinion · 514 U.S. 549",
            "url": "https://www.law.cornell.edu/supremecourt/text/514/549"
          }
        ]
      },
      {
        "title": "Motion to Uphold Out-of-State Waste Import Ban",
        "difficulty": "medium",
        "party": "defendant",
        "flavor": "A state statute prohibits private landfills within its borders from accepting solid waste generated outside the state, citing conservation of remaining landfill capacity. In-state waste may be deposited freely. An out-of-state waste hauler sues. The state moves to dismiss the dormant Commerce Clause challenge.",
        "explanation": "State laws that facially discriminate against interstate commerce are virtually per se invalid under the dormant Commerce Clause and must satisfy the strictest scrutiny. Hoarding local resources at the expense of out-of-state economic actors is a classic violation.",
        "citation": "Philadelphia v. New Jersey, 437 U.S. 617 (1978); U.S. Const. art. I, § 8, cl. 3",
        "correctRuling": "deny",
        "ruling": {
          "grant": "statute upheld",
          "deny": "statute struck"
        },
        "consequence": {
          "grant": "A state law barring imports of out-of-state waste is upheld despite facial discrimination against interstate commerce.",
          "deny": "Statute invalidated. Facial discrimination against out-of-state waste violates the dormant Commerce Clause."
        },
        "repEffect": {
          "grant": -12,
          "deny": 10
        },
        "id": "conLaw-018",
        "legacyTitles": [
          "Motion to Uphold Out-of-State Waste Import Ban"
        ],
        "topic": "commerce",
        "jurisdiction": "U.S. federal",
        "lastReviewed": null,
        "ambiguous": false,
        "ambiguityReason": null,
        "authorities": [
          {
            "label": "Opinion · 437 U.S. 617",
            "url": "https://www.law.cornell.edu/supremecourt/text/437/617"
          }
        ]
      },
      {
        "title": "Motion to Strike — Gender-Based Drinking Age Differential",
        "difficulty": "medium",
        "party": "plaintiff",
        "flavor": "A state sets the legal drinking age for low-alcohol beer at 18 for women and 21 for men, citing highway-safety statistics showing young men are disproportionately involved in alcohol-related traffic incidents. A male plaintiff challenges the disparity under the Equal Protection Clause.",
        "explanation": "Sex-based classifications receive intermediate scrutiny: they must serve an important government objective and be substantially related to its achievement. Generalized statistical tendencies by sex are not a substantial relation.",
        "citation": "Craig v. Boren, 429 U.S. 190 (1976); U.S. Const. amend. XIV",
        "correctRuling": "grant",
        "ruling": {
          "grant": "law struck",
          "deny": "law upheld"
        },
        "consequence": {
          "grant": "Law struck down. A sex-based differential supported only by statistical generalities fails intermediate scrutiny.",
          "deny": "A sex-based drinking-age differential is upheld on generalized statistical justifications."
        },
        "repEffect": {
          "grant": 10,
          "deny": -12
        },
        "id": "conLaw-019",
        "legacyTitles": [
          "Motion to Strike — Gender-Based Drinking Age Differential"
        ],
        "topic": "equalProt",
        "jurisdiction": "U.S. federal",
        "lastReviewed": null,
        "ambiguous": false,
        "ambiguityReason": null,
        "authorities": [
          {
            "label": "Opinion · 429 U.S. 190",
            "url": "https://www.law.cornell.edu/supremecourt/text/429/190"
          },
          {
            "label": "Constitution · Amendment XIV",
            "url": "https://www.law.cornell.edu/constitution/amendment14"
          }
        ]
      },
      {
        "title": "Motion to Strike — Categorical Ban on Operable Handguns in the Home",
        "difficulty": "medium",
        "party": "plaintiff",
        "flavor": "A jurisdiction prohibits registration of any handgun and further requires that all lawfully owned long guns be kept disassembled or bound by a trigger lock at all times, even in the home. Plaintiff, a private citizen with no disqualifying history, seeks a license for a handgun for home self-defense.",
        "explanation": "The Second Amendment protects an individual right, rooted in history and tradition, to keep and bear arms — particularly for self-defense in the home. A categorical ban on a class of weapons commonly chosen by law-abiding citizens for that purpose is unconstitutional.",
        "citation": "District of Columbia v. Heller, 554 U.S. 570 (2008); New York State Rifle & Pistol Ass'n v. Bruen, 597 U.S. 1 (2022); U.S. Const. amend. II",
        "correctRuling": "grant",
        "ruling": {
          "grant": "ban struck",
          "deny": "ban upheld"
        },
        "consequence": {
          "grant": "Handgun ban struck down. A categorical ban on operable handguns in the home violates the Second Amendment.",
          "deny": "A categorical ban on operable handguns in the home is upheld — contrary to Heller."
        },
        "repEffect": {
          "grant": 10,
          "deny": -12
        },
        "id": "conLaw-020",
        "legacyTitles": [
          "Motion to Strike — Categorical Ban on Operable Handguns in the Home"
        ],
        "topic": "secondA",
        "jurisdiction": "U.S. federal",
        "lastReviewed": null,
        "ambiguous": false,
        "ambiguityReason": null,
        "authorities": [
          {
            "label": "Opinion · 554 U.S. 570",
            "url": "https://www.law.cornell.edu/supremecourt/text/554/570"
          },
          {
            "label": "Opinion · 597 U.S. 1",
            "url": "https://www.law.cornell.edu/supremecourt/text/597/1"
          },
          {
            "label": "Constitution · Amendment II",
            "url": "https://www.law.cornell.edu/constitution/amendment2"
          }
        ]
      },
      {
        "title": "Motion to Enjoin Discipline — Silent Student Protest in Public School",
        "difficulty": "medium",
        "party": "plaintiff",
        "flavor": "Several public-school students wore black armbands to school to protest a foreign war. The protest was silent and caused no disruption beyond isolated conversations. School officials, anticipating discomfort, suspended the students under a newly adopted no-armband rule applied only to this protest.",
        "explanation": "Students do not shed First Amendment rights at the schoolhouse gate. Schools may regulate student speech only where it materially and substantially disrupts the educational environment — a reasonable forecast of disruption must rest on more than 'undifferentiated fear or apprehension.'",
        "citation": "Tinker v. Des Moines Indep. Cmty. Sch. Dist., 393 U.S. 503 (1969); U.S. Const. amend. I",
        "correctRuling": "grant",
        "ruling": {
          "grant": "discipline reversed",
          "deny": "discipline upheld"
        },
        "consequence": {
          "grant": "Discipline reversed. Silent, non-disruptive student political speech is protected under Tinker.",
          "deny": "Student discipline for silent political speech is upheld despite no showing of material disruption."
        },
        "repEffect": {
          "grant": 10,
          "deny": -12
        },
        "id": "conLaw-021",
        "legacyTitles": [
          "Motion to Enjoin Discipline — Silent Student Protest in Public School"
        ],
        "topic": "firstA",
        "jurisdiction": "U.S. federal",
        "lastReviewed": null,
        "ambiguous": false,
        "ambiguityReason": null,
        "authorities": [
          {
            "label": "Opinion · 393 U.S. 503",
            "url": "https://www.law.cornell.edu/supremecourt/text/393/503"
          },
          {
            "label": "Constitution · Amendment I",
            "url": "https://www.law.cornell.edu/constitution/amendment1"
          }
        ]
      },
      {
        "title": "Motion to Dismiss — No Fundamental Right to Physician-Assisted Suicide",
        "difficulty": "medium",
        "party": "plaintiff",
        "flavor": "A state criminalizes aiding or causing a suicide. Plaintiffs — terminally ill patients and physicians willing to prescribe lethal medication — argue the statute violates substantive due process by infringing a fundamental right to determine the time and manner of one's death.",
        "explanation": "Substantive due process protects only those rights deeply rooted in the Nation's history and tradition and implicit in the concept of ordered liberty. Physician-assisted suicide is not among them; the state need only show a rational basis, which it easily does.",
        "citation": "Washington v. Glucksberg, 521 U.S. 702 (1997); U.S. Const. amend. XIV",
        "correctRuling": "deny",
        "ruling": {
          "grant": "ban struck",
          "deny": "ban upheld"
        },
        "consequence": {
          "grant": "Ban struck down on a novel substantive-due-process theory the Supreme Court has already rejected.",
          "deny": "Challenge rejected. There is no fundamental right to physician-assisted suicide under the Due Process Clause."
        },
        "repEffect": {
          "grant": -10,
          "deny": 10
        },
        "id": "conLaw-022",
        "legacyTitles": [
          "Motion to Dismiss — No Fundamental Right to Physician-Assisted Suicide"
        ],
        "topic": "dueProcess",
        "jurisdiction": "U.S. federal",
        "lastReviewed": null,
        "ambiguous": false,
        "ambiguityReason": null,
        "authorities": [
          {
            "label": "Opinion · 521 U.S. 702",
            "url": "https://www.law.cornell.edu/supremecourt/text/521/702"
          },
          {
            "label": "Constitution · Amendment XIV",
            "url": "https://www.law.cornell.edu/constitution/amendment14"
          }
        ]
      },
      {
        "title": "Motion to Strike Compelled Government Disclosure Statement",
        "difficulty": "hard",
        "party": "plaintiff",
        "flavor": "A state law requires all charities soliciting donations to include a government-authored paragraph stating the charity 'may not use funds efficiently.' The statement is contested by the charity and misrepresents its independently audited spending record.",
        "explanation": "The government generally may not force a private speaker to carry the government's own contested message. A compelled disclosure that is disputed, misleading, or not purely factual and noncontroversial is constitutionally suspect.",
        "citation": "National Institute of Family and Life Advocates v. Becerra, 585 U.S. 755 (2018); see also 303 Creative LLC v. Elenis, 600 U.S. 570 (2023)",
        "correctRuling": "grant",
        "ruling": {
          "grant": "mandate struck",
          "deny": "mandate upheld"
        },
        "consequence": {
          "grant": "Compelled disclosure requirement struck down. Forcing a private speaker to carry a disputed government message violates the First Amendment.",
          "deny": "The government successfully compels a charity to repeat a contested government characterization of its own operations."
        },
        "repEffect": {
          "grant": 10,
          "deny": -14
        },
        "id": "conLaw-023",
        "legacyTitles": [
          "Motion to Strike Compelled Government Disclosure Statement"
        ],
        "topic": "other",
        "jurisdiction": "U.S. federal",
        "lastReviewed": null,
        "ambiguous": false,
        "ambiguityReason": null,
        "authorities": [
          {
            "label": "Opinion · 585 U.S. 755",
            "url": "https://www.law.cornell.edu/supremecourt/text/585/755"
          },
          {
            "label": "Opinion · 600 U.S. 570",
            "url": "https://www.law.cornell.edu/supremecourt/text/600/570"
          }
        ]
      },
      {
        "title": "Motion to Strike Airport Solicitation Ban — First Amendment",
        "difficulty": "hard",
        "party": "plaintiff",
        "flavor": "An international airport bans all in-person solicitation of funds in its terminals, citing crowd management and passenger safety. The ban applies uniformly regardless of the soliciting organization's viewpoint or message. Plaintiff seeks to solicit donations for a recognized charity.",
        "explanation": "Airport terminals are nonpublic fora, so a content-neutral ban on in-person solicitation is valid if it is reasonable and not an effort to suppress a viewpoint.",
        "citation": "International Society for Krishna Consciousness, Inc. v. Lee, 505 U.S. 672 (1992)",
        "correctRuling": "deny",
        "ruling": {
          "grant": "ban struck",
          "deny": "ban upheld"
        },
        "consequence": {
          "grant": "A content-neutral solicitation ban in a non-public forum is struck down — applying the wrong level of scrutiny.",
          "deny": "Challenge rejected. An airport's content-neutral ban on solicitation survives the appropriate reasonableness standard."
        },
        "repEffect": {
          "grant": -10,
          "deny": 10
        },
        "id": "conLaw-024",
        "legacyTitles": [
          "Motion to Strike Airport Solicitation Ban — First Amendment"
        ],
        "topic": "firstA",
        "jurisdiction": "U.S. federal",
        "lastReviewed": null,
        "ambiguous": false,
        "ambiguityReason": null,
        "authorities": [
          {
            "label": "Opinion · 505 U.S. 672",
            "url": "https://www.law.cornell.edu/supremecourt/text/505/672"
          }
        ]
      },
      {
        "title": "Motion to Enjoin License Revocation — Constitutionally Inadequate Hearing",
        "difficulty": "hard",
        "party": "plaintiff",
        "flavor": "The state revokes plaintiff's 20-year professional license — her sole livelihood — based on disputed witness credibility about a single client complaint. Notice comes the same week; the 'hearing' is one informal phone call with no right to cross-examine, no transcript, no written decision, no predeprivation emergency, and no meaningful postdeprivation review available.",
        "explanation": "Under Mathews, the weight of a substantial property interest (a long-held professional license), a high risk of error where credibility is disputed and adversarial tools are absent, and the limited government interest in rushed process here combine to require more than a one-call, no-record procedure.",
        "citation": "Mathews v. Eldridge, 424 U.S. 319 (1976); U.S. Const. amend. XIV",
        "correctRuling": "grant",
        "ruling": {
          "grant": "process inadequate",
          "deny": "process adequate"
        },
        "consequence": {
          "grant": "Process found constitutionally inadequate for a decades-long professional license revocation.",
          "deny": "Minimal telephonic process with no written explanation is upheld for revoking a 20-year professional license."
        },
        "repEffect": {
          "grant": 10,
          "deny": -12
        },
        "id": "conLaw-025",
        "legacyTitles": [
          "Motion to Enjoin License Revocation — Constitutionally Inadequate Hearing"
        ],
        "topic": "dueProcess",
        "jurisdiction": "U.S. federal",
        "lastReviewed": null,
        "ambiguous": false,
        "ambiguityReason": null,
        "authorities": [
          {
            "label": "Opinion · 424 U.S. 319",
            "url": "https://www.law.cornell.edu/supremecourt/text/424/319"
          },
          {
            "label": "Constitution · Amendment XIV",
            "url": "https://www.law.cornell.edu/constitution/amendment14"
          }
        ]
      },
      {
        "title": "Motion to Dismiss — Federal Marijuana Prosecution of Home Medical Grower",
        "difficulty": "hard",
        "party": "defendant",
        "flavor": "Defendant grew a small number of cannabis plants at home for personal medical use under a state compassionate-use law. Federal agents seized the plants under the Controlled Substances Act. Defendant argues Congress lacks Commerce Clause authority over purely intrastate, non-commercial cultivation.",
        "explanation": "Congress may regulate purely intrastate, non-commercial activity where, in the aggregate, it would substantially affect interstate commerce in a broader regulated market. Home cultivation fits within that aggregation principle for a comprehensive drug-control regime.",
        "citation": "Gonzales v. Raich, 545 U.S. 1 (2005); Wickard v. Filburn, 317 U.S. 111 (1942); U.S. Const. art. I, § 8, cl. 3",
        "correctRuling": "deny",
        "ruling": {
          "grant": "charges dismissed",
          "deny": "prosecution proceeds"
        },
        "consequence": {
          "grant": "Federal drug prosecution dismissed on a Commerce Clause theory that Raich has squarely rejected.",
          "deny": "Challenge rejected. Purely intrastate home cultivation falls within Congress's Commerce Clause authority via aggregation."
        },
        "repEffect": {
          "grant": -10,
          "deny": 10
        },
        "id": "conLaw-026",
        "legacyTitles": [
          "Motion to Dismiss — Federal Marijuana Prosecution of Home Medical Grower"
        ],
        "topic": "commerce",
        "jurisdiction": "U.S. federal",
        "lastReviewed": null,
        "ambiguous": false,
        "ambiguityReason": null,
        "authorities": [
          {
            "label": "Opinion · 545 U.S. 1",
            "url": "https://www.law.cornell.edu/supremecourt/text/545/1"
          },
          {
            "label": "Opinion · 317 U.S. 111",
            "url": "https://www.law.cornell.edu/supremecourt/text/317/111"
          }
        ]
      },
      {
        "title": "Motion to Enjoin — Condemnation of Home for Private Redevelopment Plan",
        "difficulty": "hard",
        "party": "plaintiff",
        "flavor": "A city adopts a comprehensive economic-development plan and condemns a residential block — including plaintiff's well-maintained home — to transfer to a private developer whose new complex is projected to generate jobs and tax revenue. Plaintiff is offered fair market value but resists, arguing the taking serves private rather than public purposes.",
        "explanation": "The Public Use Clause permits takings that serve a public purpose, which courts read broadly to include economic-development plans adopted through deliberative legislative processes. Transfer to a private developer as part of such a plan is constitutionally permissible even where the property is not blighted.",
        "citation": "Kelo v. City of New London, 545 U.S. 469 (2005); U.S. Const. amend. V",
        "correctRuling": "deny",
        "ruling": {
          "grant": "taking barred",
          "deny": "taking upheld"
        },
        "consequence": {
          "grant": "Taking barred on a narrow public-use theory the Supreme Court has squarely rejected in Kelo.",
          "deny": "Challenge rejected. Economic-development takings transferred to private parties satisfy the Public Use Clause under Kelo."
        },
        "repEffect": {
          "grant": -8,
          "deny": 8
        },
        "id": "conLaw-027",
        "legacyTitles": [
          "Motion to Enjoin — Condemnation of Home for Private Redevelopment Plan"
        ],
        "topic": "takings",
        "jurisdiction": "U.S. federal",
        "lastReviewed": null,
        "ambiguous": false,
        "ambiguityReason": null,
        "authorities": [
          {
            "label": "Opinion · 545 U.S. 469",
            "url": "https://www.law.cornell.edu/supremecourt/text/545/469"
          },
          {
            "label": "Constitution · Amendment V",
            "url": "https://www.law.cornell.edu/constitution/amendment5"
          }
        ]
      },
      {
        "title": "Motion to Strike — Federal Mandate That State Officers Conduct Background Checks",
        "difficulty": "hard",
        "party": "plaintiff",
        "flavor": "A federal gun-regulation statute commands local chief law-enforcement officers to conduct background checks on prospective handgun purchasers pending a federal system going online. A county sheriff challenges the mandate as unconstitutional federal commandeering of state executive personnel.",
        "explanation": "The federal government may not commandeer state or local executive officers to administer a federal regulatory program. Congress may regulate individuals directly, condition federal funds, or preempt state law — but it cannot conscript state officers to execute federal mandates.",
        "citation": "Printz v. United States, 521 U.S. 898 (1997); U.S. Const. amend. X",
        "correctRuling": "grant",
        "ruling": {
          "grant": "mandate struck",
          "deny": "mandate upheld"
        },
        "consequence": {
          "grant": "Mandate invalidated. Conscripting state executive officers to carry out federal law violates the anti-commandeering principle.",
          "deny": "Federal mandate compelling state officers to administer federal policy is upheld despite Printz."
        },
        "repEffect": {
          "grant": 10,
          "deny": -12
        },
        "id": "conLaw-028",
        "legacyTitles": [
          "Motion to Strike — Federal Mandate That State Officers Conduct Background Checks"
        ],
        "topic": "commerce",
        "jurisdiction": "U.S. federal",
        "lastReviewed": null,
        "ambiguous": false,
        "ambiguityReason": null,
        "authorities": [
          {
            "label": "Opinion · 521 U.S. 898",
            "url": "https://www.law.cornell.edu/supremecourt/text/521/898"
          },
          {
            "label": "Constitution · Amendment X",
            "url": "https://www.law.cornell.edu/constitution/amendment10"
          }
        ]
      },
      {
        "title": "Motion to Recuse — Pre-Bench Sentencing Campaign Statement",
        "difficulty": "hard",
        "ambiguous": true,
        "party": "defendant",
        "flavor": "Before taking the bench, a judge gave a campaign speech calling 'lenient sentencing for violent crime a civic failure.' She is now assigned to a sentencing hearing in a violent-crime case. Defendant moves to recuse based on the speech.",
        "explanation": "General expressions of judicial philosophy rarely mandate recusal. Whether a campaign statement about a category of crime creates a constitutionally intolerable appearance of prejudgment in a specific case of that type is a genuinely contested line.",
        "citation": "28 U.S.C. § 455(a); U.S. Const. amend. XIV (Due Process)",
        "correctRuling": "either",
        "ruling": {
          "grant": "judge recused",
          "deny": "judge remains"
        },
        "consequence": {
          "grant": "Recusal granted. The direct connection between the campaign statement and this sentencing hearing creates an appearance problem.",
          "deny": "Recusal denied. A general campaign statement about sentencing philosophy does not amount to prejudgment of this defendant."
        },
        "repEffect": {
          "grant": 5,
          "deny": 5
        },
        "id": "conLaw-029",
        "legacyTitles": [
          "Motion to Recuse — Pre-Bench Sentencing Campaign Statement"
        ],
        "topic": "dueProcess",
        "jurisdiction": "U.S. federal",
        "lastReviewed": null,
        "ambiguityReason": "General expressions of judicial philosophy rarely mandate recusal. Whether a campaign statement about a category of crime creates a constitutionally intolerable appearance of prejudgment in a specific case of that type is a genuinely contested line.",
        "authorities": [
          {
            "label": "Constitution · Amendment XIV",
            "url": "https://www.law.cornell.edu/constitution/amendment14"
          },
          {
            "label": "28 U.S.C. § 455",
            "url": "https://www.law.cornell.edu/uscode/text/28/455"
          }
        ]
      },
      {
        "title": "Motion to Strike Donor Disclosure Requirement — First Amendment",
        "difficulty": "hard",
        "ambiguous": true,
        "party": "plaintiff",
        "flavor": "A state law requires all nonprofit organizations spending money on political advocacy to disclose the names and addresses of donors contributing more than $1,000. Plaintiff argues this chills association and political activity. The state argues transparency and anti-corruption.",
        "explanation": "Compelled disclosure of political associations is reviewed under exacting scrutiny: the government needs an important interest and a sufficiently tailored disclosure regime. Whether the transparency and anti-corruption interests justify this donor list depends heavily on tailoring, public exposure, and the risk of chilling association.",
        "citation": "Americans for Prosperity Found. v. Bonta, 594 U.S. 595 (2021); NAACP v. Alabama, 357 U.S. 449 (1958); U.S. Const. amend. I",
        "correctRuling": "either",
        "ruling": {
          "grant": "disclosure struck",
          "deny": "disclosure upheld"
        },
        "consequence": {
          "grant": "Disclosure requirement struck down. The rule is not sufficiently tailored to the asserted transparency and anti-corruption interests.",
          "deny": "Disclosure requirement upheld. The state's interests and tailoring are treated as sufficient on this record."
        },
        "repEffect": {
          "grant": 5,
          "deny": 5
        },
        "id": "conLaw-030",
        "legacyTitles": [
          "Motion to Strike Donor Disclosure Requirement — First Amendment"
        ],
        "topic": "firstA",
        "jurisdiction": "U.S. federal",
        "lastReviewed": null,
        "ambiguityReason": "Compelled disclosure of political associations is reviewed under exacting scrutiny: the government needs an important interest and a sufficiently tailored disclosure regime. Whether the transparency and anti-corruption interests justify this donor list depends heavily on tailoring, public exposure, and the risk of chilling association.",
        "authorities": [
          {
            "label": "Opinion · 594 U.S. 595",
            "url": "https://www.law.cornell.edu/supremecourt/text/594/595"
          },
          {
            "label": "Opinion · 357 U.S. 449",
            "url": "https://www.law.cornell.edu/supremecourt/text/357/449"
          },
          {
            "label": "Constitution · Amendment I",
            "url": "https://www.law.cornell.edu/constitution/amendment1"
          }
        ]
      },
      {
        "title": "Motion to Strike Permit Fee for Political Yard Signs",
        "difficulty": "medium",
        "ambiguous": true,
        "party": "plaintiff",
        "flavor": "A city requires any business or home displaying a political sign larger than two square feet to pay a $35 annual permit fee. The city argues the fee covers administrative review costs. Plaintiff argues the fee targets political speech and chills expression.",
        "explanation": "Nominal fees for permits to engage in expressive activity are sometimes upheld when genuinely tied to administrative costs. Whether $35 is a reasonable cost-recovery fee or an impermissible tax on speech is close enough that courts have split.",
        "citation": "U.S. Const. amend. I",
        "correctRuling": "either",
        "ruling": {
          "grant": "fee struck",
          "deny": "fee upheld"
        },
        "consequence": {
          "grant": "Permit fee struck down. Even a small fee specifically targeting political signs is a suspicious content-based levy.",
          "deny": "Permit fee upheld. A modest administrative cost-recovery fee does not meaningfully burden political speech."
        },
        "repEffect": {
          "grant": 5,
          "deny": 5
        },
        "id": "conLaw-031",
        "legacyTitles": [
          "Motion to Strike Permit Fee for Political Yard Signs"
        ],
        "topic": "firstA",
        "jurisdiction": "U.S. federal",
        "lastReviewed": null,
        "ambiguityReason": "Nominal fees for permits to engage in expressive activity are sometimes upheld when genuinely tied to administrative costs. Whether $35 is a reasonable cost-recovery fee or an impermissible tax on speech is close enough that courts have split.",
        "authorities": [
          {
            "label": "Constitution · Amendment I",
            "url": "https://www.law.cornell.edu/constitution/amendment1"
          }
        ]
      },
      {
        "title": "Motion to Strike State Statute — Incidental Burden on Interstate Trucking",
        "difficulty": "hard",
        "party": "plaintiff",
        "flavor": "A state statute uniquely requires all commercial trucks operating on state highways to use a state-specific rear mudguard style that differs from the standard used in every neighboring jurisdiction. The state offers only modest safety data, while plaintiff shows that interstate carriers must swap mudguards at state lines, imposing substantial compliance costs with minimal offsetting benefit.",
        "explanation": "Under Pike balancing, a non-discriminatory state law is invalid when the burden on interstate commerce is clearly excessive in relation to the putative local benefits. The Supreme Court struck a materially identical state-specific mudguard rule in Bibb, finding the interstate burden far outweighed any safety benefit.",
        "citation": "Pike v. Bruce Church, Inc., 397 U.S. 137 (1970); Bibb v. Navajo Freight Lines, Inc., 359 U.S. 520 (1959); U.S. Const. art. I, § 8, cl. 3",
        "correctRuling": "grant",
        "ruling": {
          "grant": "statute struck",
          "deny": "statute upheld"
        },
        "consequence": {
          "grant": "Statute struck. A state-specific mudguard rule is Bibb in all but name — the interstate burden is clearly excessive in relation to marginal safety benefits.",
          "deny": "A Bibb-style state-specific mudguard rule is upheld despite a thin safety record and real multi-state compliance costs."
        },
        "repEffect": {
          "grant": 12,
          "deny": -12
        },
        "id": "conLaw-032",
        "legacyTitles": [
          "Motion to Strike State Statute — Incidental Burden on Interstate Trucking"
        ],
        "topic": "commerce",
        "jurisdiction": "U.S. federal",
        "lastReviewed": null,
        "ambiguous": false,
        "ambiguityReason": null,
        "authorities": [
          {
            "label": "Opinion · 397 U.S. 137",
            "url": "https://www.law.cornell.edu/supremecourt/text/397/137"
          },
          {
            "label": "Opinion · 359 U.S. 520",
            "url": "https://www.law.cornell.edu/supremecourt/text/359/520"
          }
        ]
      },
      {
        "title": "Motion for Just Compensation — Landmark Designation Limits Air Rights",
        "difficulty": "hard",
        "party": "plaintiff",
        "flavor": "A city's landmark designation prevents plaintiff from building a planned 50-story office tower above a historic terminal. Plaintiff retains full use of the existing building, has been granted transferable development rights usable on adjacent parcels, and continues to earn a reasonable return — but claims the lost air rights are a regulatory taking.",
        "explanation": "Under Penn Central, courts weigh the regulation's economic impact, interference with distinct investment-backed expectations, and the character of the government action. Where the owner retains profitable present use and receives transferable development rights, the Supreme Court has held there is no compensable taking — these facts track Penn Central itself.",
        "citation": "Penn Central Transportation Co. v. New York City, 438 U.S. 104 (1978); U.S. Const. amend. V",
        "correctRuling": "deny",
        "ruling": {
          "grant": "compensation required",
          "deny": "no taking found"
        },
        "consequence": {
          "grant": "A taking is found on facts materially identical to Penn Central — directly contrary to Supreme Court precedent.",
          "deny": "No taking. Retained profitable use plus transferable development rights defeat the Penn Central claim, just as in Penn Central itself."
        },
        "repEffect": {
          "grant": -14,
          "deny": 12
        },
        "id": "conLaw-033",
        "legacyTitles": [
          "Motion for Just Compensation — Landmark Designation Limits Air Rights"
        ],
        "topic": "takings",
        "jurisdiction": "U.S. federal",
        "lastReviewed": null,
        "ambiguous": false,
        "ambiguityReason": null,
        "authorities": [
          {
            "label": "Opinion · 438 U.S. 104",
            "url": "https://www.law.cornell.edu/supremecourt/text/438/104"
          },
          {
            "label": "Constitution · Amendment V",
            "url": "https://www.law.cornell.edu/constitution/amendment5"
          }
        ]
      }
    ]
  },
  "recentScotus": {
    "name": "RECENT SUPREME COURT",
    "headerClass": "rs",
    "cardClass": "rs-card",
    "motions": [
      {
        "title": "Motion for Chevron Deference - Agency Statutory Reading",
        "difficulty": "easy",
        "party": "agency",
        "flavor": "A federal agency defends a costly rule by arguing that the statute is ambiguous and that, under Chevron, the court must defer to any reasonable agency interpretation. The regulated parties move to set the rule aside.",
        "explanation": "Loper Bright overruled Chevron. Courts must exercise independent judgment about the best reading of a statute, while still giving respectful consideration to persuasive agency views where appropriate.",
        "citation": "Loper Bright Enterprises v. Raimondo, 603 U.S. 369 (2024)",
        "correctRuling": "deny",
        "ruling": {
          "grant": "Chevron deference applied",
          "deny": "rule reviewed independently"
        },
        "consequence": {
          "grant": "The agency receives binding Chevron deference after Chevron has been overruled.",
          "deny": "Motion denied. The court must decide the statute's best meaning without Chevron deference."
        },
        "repEffect": {
          "grant": -16,
          "deny": 14
        },
        "id": "recentScotus-001",
        "legacyTitles": [
          "Motion for Chevron Deference - Agency Statutory Reading"
        ],
        "topic": "admin",
        "jurisdiction": "U.S. federal",
        "lastReviewed": null,
        "ambiguous": false,
        "ambiguityReason": null,
        "authorities": [
          {
            "label": "Read the opinion",
            "url": "https://www.law.cornell.edu/supremecourt/text/22-451"
          }
        ]
      },
      {
        "title": "Motion for Judgment Upholding EPA Rule — Major Questions",
        "difficulty": "easy",
        "party": "agency",
        "flavor": "EPA invokes a rarely used statutory phrase to restructure the nation's electricity generation mix, requiring a broad shift away from coal-fired plants. Congress has repeatedly considered but not enacted comparable nationwide cap-and-shift legislation. On the stipulated record, EPA moves for judgment that Section 111(d) authorizes this generation-shifting rule.",
        "explanation": "Under the major questions doctrine, an agency needs clear congressional authorization for decisions of vast economic and political significance. A vague or ancillary provision is not enough.",
        "citation": "West Virginia v. EPA, 597 U.S. 697 (2022)",
        "correctRuling": "deny",
        "ruling": {
          "grant": "EPA authority sustained",
          "deny": "EPA authority rejected"
        },
        "consequence": {
          "grant": "The court sustains the transformative program under authority West Virginia v. EPA found insufficient.",
          "deny": "Motion denied. Section 111(d) does not supply the clear authorization needed for this generation-shifting program."
        },
        "repEffect": {
          "grant": -16,
          "deny": 14
        },
        "id": "recentScotus-002",
        "legacyTitles": [
          "Motion to Enjoin EPA Rule - Major Questions Doctrine"
        ],
        "topic": "admin",
        "jurisdiction": "U.S. federal",
        "lastReviewed": null,
        "ambiguous": false,
        "ambiguityReason": null,
        "authorities": [
          {
            "label": "Read the opinion",
            "url": "https://www.supremecourt.gov/opinions/21pdf/597us2r65_5iel.pdf"
          }
        ],
        "contentUpdated": "2026-09-08"
      },
      {
        "title": "Motion to Dismiss - Student Loan Cancellation",
        "difficulty": "easy",
        "party": "government",
        "flavor": "The Secretary of Education invokes emergency HEROES Act authority to cancel hundreds of billions of dollars in student loan principal for broad categories of borrowers. A state-linked loan servicer challenges the program.",
        "explanation": "The Roberts Court treated broad debt cancellation as a major question requiring clear congressional authorization. General emergency authority to waive or modify terms did not support a program of that scale.",
        "citation": "Biden v. Nebraska, 600 U.S. 477 (2023)",
        "correctRuling": "deny",
        "ruling": {
          "grant": "challenge dismissed",
          "deny": "program blocked"
        },
        "consequence": {
          "grant": "The broad cancellation program survives despite the lack of clear authorization for debt forgiveness at that scale.",
          "deny": "Motion denied. The challenge proceeds and the program is blocked under the major questions doctrine."
        },
        "repEffect": {
          "grant": -14,
          "deny": 12
        },
        "id": "recentScotus-003",
        "legacyTitles": [
          "Motion to Dismiss - Student Loan Cancellation"
        ],
        "topic": "admin",
        "jurisdiction": "U.S. federal",
        "lastReviewed": null,
        "ambiguous": false,
        "ambiguityReason": null,
        "authorities": [
          {
            "label": "Read the opinion",
            "url": "https://www.law.cornell.edu/supremecourt/text/22-506"
          }
        ]
      },
      {
        "title": "Motion for Judgment - Wetlands Jurisdiction",
        "difficulty": "easy",
        "party": "landowner",
        "flavor": "EPA orders restoration of a residential lot because nearby wetlands sit across a road from a ditch that eventually feeds a navigable lake. The wetlands have no continuous surface connection to a relatively permanent covered water.",
        "explanation": "Sackett sharply limited Clean Water Act wetlands jurisdiction. Adjacent wetlands must have a continuous surface connection with a covered water, making it hard to tell where water ends and wetland begins.",
        "citation": "Sackett v. EPA, 598 U.S. 651 (2023)",
        "correctRuling": "grant",
        "ruling": {
          "grant": "jurisdiction rejected",
          "deny": "EPA order upheld"
        },
        "consequence": {
          "grant": "Jurisdiction rejected. The wetland lacks the continuous surface connection required after Sackett.",
          "deny": "EPA jurisdiction is upheld under the broader significant-nexus approach Sackett displaced."
        },
        "repEffect": {
          "grant": 12,
          "deny": -14
        },
        "id": "recentScotus-004",
        "legacyTitles": [
          "Motion for Judgment - Wetlands Jurisdiction"
        ],
        "topic": "admin",
        "jurisdiction": "U.S. federal",
        "lastReviewed": null,
        "ambiguous": false,
        "ambiguityReason": null,
        "authorities": [
          {
            "label": "Read the opinion",
            "url": "https://www.supremecourt.gov/opinions/22pdf/598us2r28_hgcj.pdf"
          }
        ]
      },
      {
        "title": "Motion to Strike Jury Demand — SEC Fraud Penalties",
        "difficulty": "easy",
        "party": "agency",
        "flavor": "The SEC seeks civil penalties for securities fraud and chooses an in-house administrative proceeding instead of federal court. The respondent demands an Article III jury trial. The SEC moves to strike the jury demand, asserting that it may adjudicate these civil fraud penalties in-house.",
        "explanation": "When the SEC seeks civil penalties for legal claims resembling common-law fraud, the Seventh Amendment entitles the defendant to a jury trial in federal court.",
        "citation": "SEC v. Jarkesy, 603 U.S. 109 (2024)",
        "correctRuling": "deny",
        "ruling": {
          "grant": "jury demand struck",
          "deny": "jury demand preserved"
        },
        "consequence": {
          "grant": "The jury demand is struck on fraud-penalty claims for which Jarkesy requires a federal jury trial.",
          "deny": "Motion denied. The respondent is entitled to a jury trial in federal court on these civil fraud penalties."
        },
        "repEffect": {
          "grant": -16,
          "deny": 14
        },
        "id": "recentScotus-005",
        "legacyTitles": [
          "Motion to Compel Jury Trial - SEC Civil Penalties"
        ],
        "topic": "admin",
        "jurisdiction": "U.S. federal",
        "lastReviewed": null,
        "ambiguous": false,
        "ambiguityReason": null,
        "authorities": [
          {
            "label": "Read the opinion",
            "url": "https://www.supremecourt.gov/opinions/23pdf/603us1r50_7kh7.pdf"
          }
        ],
        "contentUpdated": "2026-09-08"
      },
      {
        "title": "Motion to Dismiss APA Challenge - Six-Year Clock",
        "difficulty": "easy",
        "party": "agency",
        "flavor": "A small business opened in 2022 and was first injured by a 2011 agency rule when it began accepting debit cards. The agency moves to dismiss, arguing the six-year APA limitations period expired in 2017 for everyone.",
        "explanation": "Corner Post holds that an APA claim under the default six-year statute accrues when the plaintiff is injured by final agency action, not simply when the rule was issued.",
        "citation": "Corner Post, Inc. v. Board of Governors, 603 U.S. 799 (2024)",
        "correctRuling": "deny",
        "ruling": {
          "grant": "challenge time-barred",
          "deny": "challenge timely"
        },
        "consequence": {
          "grant": "The new business is barred before it ever had a complete claim.",
          "deny": "Motion denied. The limitations clock began when this plaintiff was injured."
        },
        "repEffect": {
          "grant": -12,
          "deny": 12
        },
        "id": "recentScotus-006",
        "legacyTitles": [
          "Motion to Dismiss APA Challenge - Six-Year Clock"
        ],
        "topic": "admin",
        "jurisdiction": "U.S. federal",
        "lastReviewed": null,
        "ambiguous": false,
        "ambiguityReason": null,
        "authorities": [
          {
            "label": "Read the opinion",
            "url": "https://www.law.cornell.edu/supremecourt/text/22-1008"
          }
        ]
      },
      {
        "title": "Motion to Strike Race-Conscious Admissions Program",
        "difficulty": "easy",
        "party": "plaintiff",
        "flavor": "A public university uses race as a plus factor in undergraduate admissions to pursue the educational benefits of diversity. The record shows race can determine the outcome for some applicants.",
        "explanation": "Students for Fair Admissions rejected the Harvard and UNC admissions programs. Race-conscious admissions must satisfy strict scrutiny, and broad diversity interests cannot justify the challenged systems.",
        "citation": "Students for Fair Admissions, Inc. v. Harvard, 600 U.S. 181 (2023)",
        "correctRuling": "grant",
        "ruling": {
          "grant": "program struck",
          "deny": "program upheld"
        },
        "consequence": {
          "grant": "Program struck. The admissions system uses race in a way SFFA forbids.",
          "deny": "A race-conscious admissions system is upheld on a diversity rationale SFFA rejected."
        },
        "repEffect": {
          "grant": 14,
          "deny": -16
        },
        "id": "recentScotus-007",
        "legacyTitles": [
          "Motion to Strike Race-Conscious Admissions Program"
        ],
        "topic": "equality",
        "jurisdiction": "U.S. federal",
        "lastReviewed": null,
        "ambiguous": false,
        "ambiguityReason": null,
        "authorities": [
          {
            "label": "Read the opinion",
            "url": "https://www.supremecourt.gov/opinions/22pdf/600us1r53_4g15.pdf"
          }
        ]
      },
      {
        "title": "Motion to Enjoin Handgun Carry Licensing Rule",
        "difficulty": "easy",
        "party": "plaintiff",
        "flavor": "A state requires ordinary law-abiding adults to show a special need for self-defense before receiving a public carry license. General concern for personal safety is not enough.",
        "explanation": "Bruen held that the Second Amendment protects public carry for ordinary self-defense and rejected discretionary proper-cause licensing regimes for law-abiding citizens.",
        "citation": "New York State Rifle & Pistol Association v. Bruen, 597 U.S. 1 (2022)",
        "correctRuling": "grant",
        "ruling": {
          "grant": "license rule enjoined",
          "deny": "license rule upheld"
        },
        "consequence": {
          "grant": "Rule enjoined. A special-need requirement for ordinary public carry violates Bruen.",
          "deny": "The state keeps a discretionary proper-cause rule Bruen invalidated."
        },
        "repEffect": {
          "grant": 14,
          "deny": -16
        },
        "id": "recentScotus-008",
        "legacyTitles": [
          "Motion to Enjoin Handgun Carry Licensing Rule"
        ],
        "topic": "secondA",
        "jurisdiction": "U.S. federal",
        "lastReviewed": null,
        "ambiguous": false,
        "ambiguityReason": null,
        "authorities": [
          {
            "label": "Read the opinion",
            "url": "https://www.supremecourt.gov/opinions/21pdf/597us1r54_7648.pdf"
          }
        ]
      },
      {
        "title": "Motion to Dismiss Gun Ban Challenge - Domestic Violence Order",
        "difficulty": "easy",
        "party": "government",
        "flavor": "Defendant is subject to a domestic-violence restraining order after a court found he poses a credible threat to an intimate partner. He argues the Second Amendment categorically bars disarming him.",
        "explanation": "Rahimi upheld the federal ban on firearm possession by people subject to qualifying domestic-violence restraining orders, finding a sufficient historical analogue for disarming dangerous individuals.",
        "citation": "United States v. Rahimi, 602 U.S. 680 (2024)",
        "correctRuling": "grant",
        "ruling": {
          "grant": "challenge dismissed",
          "deny": "ban struck"
        },
        "consequence": {
          "grant": "Challenge dismissed. Rahimi permits temporary disarmament after a judicial finding of dangerousness.",
          "deny": "The court strikes a ban Rahimi specifically upheld."
        },
        "repEffect": {
          "grant": 12,
          "deny": -14
        },
        "id": "recentScotus-009",
        "legacyTitles": [
          "Motion to Dismiss Gun Ban Challenge - Domestic Violence Order"
        ],
        "topic": "secondA",
        "jurisdiction": "U.S. federal",
        "lastReviewed": null,
        "ambiguous": false,
        "ambiguityReason": null,
        "authorities": [
          {
            "label": "Read the opinion",
            "url": "https://www.supremecourt.gov/opinions/23pdf/602us1r43_p860.pdf"
          }
        ]
      },
      {
        "title": "Motion to Enjoin Compelled Wedding Website",
        "difficulty": "easy",
        "party": "plaintiff",
        "flavor": "A website designer offers custom wedding websites using original words and visual design. The state says its public-accommodations law requires her to create sites celebrating marriages whose message she does not wish to express.",
        "explanation": "303 Creative held that public-accommodation laws may not compel an expressive business to create custom speech conveying a message the speaker rejects.",
        "citation": "303 Creative LLC v. Elenis, 600 U.S. 570 (2023)",
        "correctRuling": "grant",
        "ruling": {
          "grant": "compulsion enjoined",
          "deny": "compulsion allowed"
        },
        "consequence": {
          "grant": "Compulsion enjoined. The state cannot force custom expressive speech.",
          "deny": "The state compels a custom expressive message despite 303 Creative."
        },
        "repEffect": {
          "grant": 12,
          "deny": -14
        },
        "id": "recentScotus-010",
        "legacyTitles": [
          "Motion to Enjoin Compelled Wedding Website"
        ],
        "topic": "firstA",
        "jurisdiction": "U.S. federal",
        "lastReviewed": null,
        "ambiguous": false,
        "ambiguityReason": null,
        "authorities": [
          {
            "label": "Read the opinion",
            "url": "https://www.supremecourt.gov/opinions/22pdf/600us1r58_7khn.pdf"
          }
        ]
      },
      {
        "title": "Motion for Judgment Upholding Religious-School Aid Exclusion",
        "difficulty": "medium",
        "party": "government",
        "flavor": "A state pays tuition for students in rural districts without public high schools, but excludes otherwise eligible private schools if they provide religious instruction. Parents seek equal access to the benefit. The state moves for judgment upholding its exclusion solely because the otherwise eligible schools provide religious instruction.",
        "explanation": "Carson v. Makin held that a generally available tuition benefit may not exclude schools because they are religious or would use the funds for religious education.",
        "citation": "Carson v. Makin, 596 U.S. 767 (2022)",
        "correctRuling": "deny",
        "ruling": {
          "grant": "exclusion upheld",
          "deny": "state motion denied"
        },
        "consequence": {
          "grant": "The state wins judgment on a religious-use exclusion Carson rejected.",
          "deny": "Motion denied. Carson bars this religious-use exclusion from an otherwise generally available tuition benefit."
        },
        "repEffect": {
          "grant": -14,
          "deny": 12
        },
        "id": "recentScotus-011",
        "legacyTitles": [
          "Motion for Religious-School Tuition Aid"
        ],
        "topic": "firstA",
        "jurisdiction": "U.S. federal",
        "lastReviewed": null,
        "ambiguous": false,
        "ambiguityReason": null,
        "authorities": [
          {
            "label": "Read the opinion",
            "url": "https://www.supremecourt.gov/opinions/21pdf/596us2r49_7l48.pdf"
          }
        ],
        "contentUpdated": "2026-09-08"
      },
      {
        "title": "Motion for Summary Judgment - Coach Prayer",
        "difficulty": "medium",
        "party": "coach",
        "flavor": "A public high school suspends a football coach for kneeling in quiet personal prayer at midfield after games. The district says avoiding any perceived Establishment Clause issue justifies the discipline.",
        "explanation": "Kennedy rejected the idea that the Establishment Clause requires suppressing private religious expression merely because it occurs at school. The old Lemon/endorsement framework no longer controls.",
        "citation": "Kennedy v. Bremerton School District, 597 U.S. 507 (2022)",
        "correctRuling": "grant",
        "ruling": {
          "grant": "discipline unlawful",
          "deny": "discipline upheld"
        },
        "consequence": {
          "grant": "Discipline unlawful. The district suppressed private religious expression on a mistaken Establishment Clause theory.",
          "deny": "The school wins by relying on an Establishment Clause framework Kennedy rejected."
        },
        "repEffect": {
          "grant": 12,
          "deny": -14
        },
        "id": "recentScotus-012",
        "legacyTitles": [
          "Motion for Summary Judgment - Coach Prayer"
        ],
        "topic": "firstA",
        "jurisdiction": "U.S. federal",
        "lastReviewed": null,
        "ambiguous": false,
        "ambiguityReason": null,
        "authorities": [
          {
            "label": "Read the opinion",
            "url": "https://www.law.cornell.edu/supremecourt/text/21-418"
          }
        ]
      },
      {
        "title": "Motion for Summary Judgment — Religious Accommodation Costs",
        "difficulty": "medium",
        "party": "employer",
        "flavor": "An employer denied a Sabbath scheduling accommodation because it would impose more than a de minimis cost. The record does not show substantially increased costs in relation to the business. The employer moves for summary judgment on its undue-hardship defense, relying only on that more-than-de-minimis cost.",
        "explanation": "Groff clarified that Title VII undue hardship requires a substantial burden in the overall context of the employer's business, not merely more than a de minimis cost.",
        "citation": "Groff v. DeJoy, 600 U.S. 447 (2023)",
        "correctRuling": "deny",
        "ruling": {
          "grant": "employer wins judgment",
          "deny": "employer motion denied"
        },
        "consequence": {
          "grant": "The employer wins judgment under the insufficient de-minimis standard.",
          "deny": "Motion denied. The employer has not established the substantial business burden required by Groff."
        },
        "repEffect": {
          "grant": -12,
          "deny": 12
        },
        "id": "recentScotus-013",
        "legacyTitles": [
          "Motion to Reconsider Religious Accommodation Denial"
        ],
        "topic": "firstA",
        "jurisdiction": "U.S. federal",
        "lastReviewed": null,
        "ambiguous": false,
        "ambiguityReason": null,
        "authorities": [
          {
            "label": "Read the opinion",
            "url": "https://www.supremecourt.gov/opinions/22pdf/600us1r55_3dq4.pdf"
          }
        ],
        "contentUpdated": "2026-09-08"
      },
      {
        "title": "Motion for Parental Religious Opt-Out",
        "difficulty": "medium",
        "party": "parents",
        "flavor": "A public elementary school requires young children to participate in LGBTQ-themed storybook lessons and refuses religious opt-outs, while still allowing opt-outs for other noncore activities and sex-education units.",
        "explanation": "Mahmoud recognized a likely Free Exercise burden where schools require young children to receive instruction that substantially interferes with parents' religious upbringing and deny opt-outs while allowing comparable exemptions.",
        "citation": "Mahmoud v. Taylor, 606 U.S. 522 (2025)",
        "correctRuling": "grant",
        "ruling": {
          "grant": "opt-out required",
          "deny": "opt-out denied"
        },
        "consequence": {
          "grant": "Opt-out required. The refusal likely burdens religious exercise under Mahmoud.",
          "deny": "The school denies religious opt-outs despite comparable exemptions and Mahmoud's warning."
        },
        "repEffect": {
          "grant": 12,
          "deny": -14
        },
        "id": "recentScotus-014",
        "legacyTitles": [
          "Motion for Parental Religious Opt-Out"
        ],
        "topic": "firstA",
        "jurisdiction": "U.S. federal",
        "lastReviewed": null,
        "ambiguous": false,
        "ambiguityReason": null,
        "authorities": [
          {
            "label": "Read the opinion",
            "url": "https://www.law.cornell.edu/supremecourt/text/24-297"
          }
        ]
      },
      {
        "title": "Motion to Enjoin Online Age Verification",
        "difficulty": "medium",
        "party": "website",
        "flavor": "A state requires commercial websites dominated by sexual material harmful to minors to verify users are adults before access. Adults may still access the material after age verification.",
        "explanation": "Free Speech Coalition v. Paxton treated age verification for material obscene to minors as an incidental burden on adult speech subject to intermediate scrutiny, and upheld the Texas law.",
        "citation": "Free Speech Coalition, Inc. v. Paxton, 606 U.S. 461 (2025)",
        "correctRuling": "deny",
        "ruling": {
          "grant": "law enjoined",
          "deny": "law upheld"
        },
        "consequence": {
          "grant": "The court applies a stricter rule than Paxton and blocks a law Paxton upheld.",
          "deny": "Motion denied. Age verification for material harmful to minors survives intermediate scrutiny."
        },
        "repEffect": {
          "grant": -12,
          "deny": 12
        },
        "id": "recentScotus-015",
        "legacyTitles": [
          "Motion to Enjoin Online Age Verification"
        ],
        "topic": "firstA",
        "jurisdiction": "U.S. federal",
        "lastReviewed": null,
        "ambiguous": false,
        "ambiguityReason": null,
        "authorities": [
          {
            "label": "Read the opinion",
            "url": "https://www.law.cornell.edu/supremecourt/text/23-1122"
          }
        ]
      },
      {
        "title": "Motion to Dismiss Equal Protection Challenge - Youth Gender Care",
        "difficulty": "medium",
        "party": "state",
        "flavor": "A state bars minors from receiving puberty blockers or hormones for gender-transition purposes, while allowing the same drugs for other medical uses. Plaintiffs argue the law triggers heightened scrutiny as sex discrimination.",
        "explanation": "Skrmetti held that Tennessee's comparable law classified by age and medical use rather than sex or transgender status, so rational-basis review applied and the law survived.",
        "citation": "United States v. Skrmetti, 605 U.S. 495 (2025)",
        "correctRuling": "grant",
        "ruling": {
          "grant": "challenge dismissed",
          "deny": "law enjoined"
        },
        "consequence": {
          "grant": "Challenge dismissed. Under Skrmetti, rational-basis review applies and the law survives.",
          "deny": "The court uses heightened scrutiny in conflict with Skrmetti's equal-protection holding."
        },
        "repEffect": {
          "grant": 12,
          "deny": -14
        },
        "id": "recentScotus-016",
        "legacyTitles": [
          "Motion to Dismiss Equal Protection Challenge - Youth Gender Care"
        ],
        "topic": "equality",
        "jurisdiction": "U.S. federal",
        "lastReviewed": null,
        "ambiguous": false,
        "ambiguityReason": null,
        "authorities": [
          {
            "label": "Read the opinion",
            "url": "https://www.law.cornell.edu/supremecourt/text/23-477"
          }
        ]
      },
      {
        "title": "Motion to Enjoin Fifteen-Week Abortion Ban",
        "difficulty": "medium",
        "party": "clinic",
        "flavor": "A clinic challenges a state law banning most abortions after fifteen weeks, arguing Roe and Casey protect a pre-viability right to abortion.",
        "explanation": "Dobbs overruled Roe and Casey and held that the Constitution does not confer a right to abortion. Abortion regulations are generally reviewed under rational-basis principles.",
        "citation": "Dobbs v. Jackson Women's Health Organization, 597 U.S. 215 (2022)",
        "correctRuling": "deny",
        "ruling": {
          "grant": "ban enjoined",
          "deny": "ban upheld"
        },
        "consequence": {
          "grant": "The court enforces the pre-viability rule Dobbs overruled.",
          "deny": "Motion denied. Dobbs removes the federal constitutional abortion-right basis for the injunction."
        },
        "repEffect": {
          "grant": -16,
          "deny": 14
        },
        "id": "recentScotus-017",
        "legacyTitles": [
          "Motion to Enjoin Fifteen-Week Abortion Ban"
        ],
        "topic": "equality",
        "jurisdiction": "U.S. federal",
        "lastReviewed": null,
        "ambiguous": false,
        "ambiguityReason": null,
        "authorities": [
          {
            "label": "Read the opinion",
            "url": "https://www.law.cornell.edu/supremecourt/text/19-1392"
          }
        ]
      },
      {
        "title": "Motion to Dismiss Eighth Amendment Challenge - Public Camping",
        "difficulty": "medium",
        "party": "city",
        "flavor": "A city enforces generally applicable ordinances barring camping and overnight sleeping in public parks. Plaintiffs argue enforcement against unhoused people is cruel and unusual punishment whenever shelter beds are unavailable.",
        "explanation": "City of Grants Pass held that generally applicable public-camping restrictions do not violate the Eighth Amendment's Cruel and Unusual Punishments Clause merely because they apply to unhoused people.",
        "citation": "City of Grants Pass v. Johnson, 603 U.S. 520 (2024)",
        "correctRuling": "grant",
        "ruling": {
          "grant": "Eighth Amendment claim dismissed",
          "deny": "ordinance enjoined"
        },
        "consequence": {
          "grant": "Claim dismissed. Grants Pass rejects the Eighth Amendment theory used to block the ordinances.",
          "deny": "The ordinance is enjoined under the Ninth Circuit rule Grants Pass rejected."
        },
        "repEffect": {
          "grant": 12,
          "deny": -14
        },
        "id": "recentScotus-018",
        "legacyTitles": [
          "Motion to Dismiss Eighth Amendment Challenge - Public Camping"
        ],
        "topic": "fedPower",
        "jurisdiction": "U.S. federal",
        "lastReviewed": null,
        "ambiguous": false,
        "ambiguityReason": null,
        "authorities": [
          {
            "label": "Read the opinion",
            "url": "https://www.law.cornell.edu/supremecourt/text/23-175"
          }
        ]
      },
      {
        "title": "Motion to Dismiss Injunction Suit - Social Media Pressure",
        "difficulty": "medium",
        "party": "government",
        "flavor": "States and social-media users seek a forward-looking injunction against federal officials' communications with platforms, but cannot tie their future injuries to specific defendants or show likely redress.",
        "explanation": "Murthy v. Missouri rejected a broad injunction because the plaintiffs lacked Article III standing for forward-looking relief. Past platform moderation and generalized pressure were not enough.",
        "citation": "Murthy v. Missouri, 603 U.S. 43 (2024)",
        "correctRuling": "grant",
        "ruling": {
          "grant": "case dismissed",
          "deny": "injunction entered"
        },
        "consequence": {
          "grant": "Case dismissed. The plaintiffs fail Murthy's standing requirements for prospective relief.",
          "deny": "A sweeping injunction issues without the concrete traceability and redressability Murthy requires."
        },
        "repEffect": {
          "grant": 12,
          "deny": -14
        },
        "id": "recentScotus-019",
        "legacyTitles": [
          "Motion to Dismiss Injunction Suit - Social Media Pressure"
        ],
        "topic": "fedcourts",
        "jurisdiction": "U.S. federal",
        "lastReviewed": null,
        "ambiguous": false,
        "ambiguityReason": null,
        "authorities": [
          {
            "label": "Read the opinion",
            "url": "https://www.law.cornell.edu/supremecourt/text/23-411"
          }
        ]
      },
      {
        "title": "Motion to Enjoin FDA Mifepristone Actions — Standing",
        "difficulty": "medium",
        "party": "plaintiffs",
        "flavor": "Doctors who do not prescribe mifepristone challenge FDA approvals and safety changes. They object to abortion, but their asserted injuries depend on speculative future emergencies involving other doctors' patients. These doctors move for an injunction against FDA, relying only on those asserted injuries. Decide whether they have standing to obtain this relief, not the merits of the drug approvals.",
        "explanation": "FDA v. Alliance for Hippocratic Medicine held that the challengers lacked Article III standing because conscience objections and speculative downstream burdens did not establish a concrete, traceable injury.",
        "citation": "FDA v. Alliance for Hippocratic Medicine, 602 U.S. 367 (2024)",
        "correctRuling": "deny",
        "ruling": {
          "grant": "FDA action enjoined",
          "deny": "injunction denied"
        },
        "consequence": {
          "grant": "An injunction issues at the request of plaintiffs whose asserted injuries do not establish standing.",
          "deny": "Motion denied. These plaintiffs have not established the concrete, traceable injury needed for Article III standing."
        },
        "repEffect": {
          "grant": -14,
          "deny": 12
        },
        "id": "recentScotus-020",
        "legacyTitles": [
          "Motion to Dismiss Mifepristone Challenge - Standing"
        ],
        "topic": "fedcourts",
        "jurisdiction": "U.S. federal",
        "lastReviewed": null,
        "ambiguous": false,
        "ambiguityReason": null,
        "authorities": [
          {
            "label": "Read the opinion",
            "url": "https://www.supremecourt.gov/opinions/23pdf/602us1r35_h3ci.pdf"
          }
        ],
        "contentUpdated": "2026-09-08"
      },
      {
        "title": "Motion to Dismiss - Presidential Immunity",
        "difficulty": "hard",
        "party": "defendant",
        "flavor": "A former President is criminally charged based in part on official communications with the Justice Department and other executive officers while in office. The indictment also includes campaign conduct.",
        "explanation": "Trump v. United States recognizes absolute immunity for core constitutional powers, presumptive immunity for other official acts, and no immunity for unofficial conduct. The motion cannot be resolved by treating all charged conduct alike.",
        "citation": "Trump v. United States, 603 U.S. 593 (2024)",
        "correctRuling": "grant",
        "ruling": {
          "grant": "official-act allegations barred",
          "deny": "all allegations proceed unchanged"
        },
        "consequence": {
          "grant": "Motion granted in part. Official-act allegations require immunity analysis and may be barred.",
          "deny": "The prosecution proceeds unchanged without separating official from unofficial conduct."
        },
        "repEffect": {
          "grant": 12,
          "deny": -16
        },
        "id": "recentScotus-021",
        "legacyTitles": [
          "Motion to Dismiss - Presidential Immunity"
        ],
        "topic": "fedcourts",
        "jurisdiction": "U.S. federal",
        "lastReviewed": null,
        "ambiguous": false,
        "ambiguityReason": null,
        "authorities": [
          {
            "label": "Read the opinion",
            "url": "https://www.law.cornell.edu/supremecourt/text/23-939"
          }
        ]
      },
      {
        "title": "Motion to Dismiss Obstruction Count - January 6 Statute",
        "difficulty": "hard",
        "party": "defendant",
        "flavor": "Defendant is charged under 18 U.S.C. 1512(c)(2) for disrupting Congress on January 6. The indictment alleges no impairment of records, documents, objects, or other evidence used in an official proceeding.",
        "explanation": "Fischer narrowed Section 1512(c)(2): the residual clause must be tied to impairment of records, documents, objects, or other things used in an official proceeding.",
        "citation": "Fischer v. United States, 603 U.S. 480 (2024)",
        "correctRuling": "grant",
        "ruling": {
          "grant": "count dismissed",
          "deny": "count sustained"
        },
        "consequence": {
          "grant": "Count dismissed. The indictment lacks the evidence-impairment nexus Fischer requires.",
          "deny": "The obstruction count proceeds under the broader reading Fischer rejected."
        },
        "repEffect": {
          "grant": 12,
          "deny": -14
        },
        "id": "recentScotus-022",
        "legacyTitles": [
          "Motion to Dismiss Obstruction Count - January 6 Statute"
        ],
        "topic": "fedcourts",
        "jurisdiction": "U.S. federal",
        "lastReviewed": null,
        "ambiguous": false,
        "ambiguityReason": null,
        "authorities": [
          {
            "label": "Read the opinion",
            "url": "https://www.law.cornell.edu/supremecourt/text/23-5572"
          }
        ]
      },
      {
        "title": "Motion for Declaratory Judgment - Bump Stock Rule",
        "difficulty": "hard",
        "party": "plaintiff",
        "flavor": "ATF classifies bump stocks as machineguns because a shooter can maintain forward pressure and fire rapidly. The device still requires the trigger to reset and reengage for each shot.",
        "explanation": "Cargill held that a semiautomatic rifle with a bump stock is not a machinegun under the statutory definition because it does not fire multiple shots automatically by a single function of the trigger.",
        "citation": "Garland v. Cargill, 602 U.S. 406 (2024)",
        "correctRuling": "grant",
        "ruling": {
          "grant": "ATF rule invalid",
          "deny": "ATF rule upheld"
        },
        "consequence": {
          "grant": "ATF rule invalid. Cargill rejects treating bump stocks as statutory machineguns.",
          "deny": "The rule is upheld under an interpretation Cargill rejected."
        },
        "repEffect": {
          "grant": 12,
          "deny": -14
        },
        "id": "recentScotus-023",
        "legacyTitles": [
          "Motion for Declaratory Judgment - Bump Stock Rule"
        ],
        "topic": "admin",
        "jurisdiction": "U.S. federal",
        "lastReviewed": null,
        "ambiguous": false,
        "ambiguityReason": null,
        "authorities": [
          {
            "label": "Read the opinion",
            "url": "https://www.law.cornell.edu/supremecourt/text/22-976"
          }
        ]
      },
      {
        "title": "Motion for Judgment Invalidating CFPB Funding",
        "difficulty": "hard",
        "party": "plaintiff",
        "flavor": "A regulated lender argues the CFPB is unconstitutional because Congress funded it through capped draws from the Federal Reserve rather than annual appropriations. The lender moves for judgment declaring this funding structure invalid under the Appropriations Clause solely because it is not renewed annually.",
        "explanation": "The Court upheld the CFPB's funding structure. The Appropriations Clause requires congressional authorization identifying a source and purpose, not annual line-item appropriations.",
        "citation": "Consumer Financial Protection Bureau v. Community Financial Services Association, 601 U.S. 416 (2024)",
        "correctRuling": "deny",
        "ruling": {
          "grant": "funding declared invalid",
          "deny": "lender motion denied"
        },
        "consequence": {
          "grant": "The funding structure is invalidated on the annual-appropriation theory the Court rejected.",
          "deny": "Motion denied. The Appropriations Clause does not require annual appropriations, and the challenged structure satisfies it."
        },
        "repEffect": {
          "grant": -14,
          "deny": 12
        },
        "id": "recentScotus-024",
        "legacyTitles": [
          "Motion to Dismiss Appropriations Challenge - CFPB Funding"
        ],
        "topic": "admin",
        "jurisdiction": "U.S. federal",
        "lastReviewed": null,
        "ambiguous": false,
        "ambiguityReason": null,
        "authorities": [
          {
            "label": "Read the opinion",
            "url": "https://www.supremecourt.gov/opinions/23pdf/601us2r21_7648.pdf"
          }
        ],
        "contentUpdated": "2026-09-08"
      },
      {
        "title": "Motion to Dismiss Surplus-Equity Takings Claim",
        "difficulty": "hard",
        "party": "county",
        "flavor": "A county sells a home worth $40,000 to recover a $15,000 tax debt and keeps the $25,000 surplus for itself under state forfeiture law. The former owner sues for the surplus. The county moves to dismiss, arguing its forfeiture statute extinguished any property interest in that equity.",
        "explanation": "Tyler held that government retention of surplus equity after satisfying a tax debt can be a classic taking. State law cannot erase traditional property interests to avoid the Takings Clause.",
        "citation": "Tyler v. Hennepin County, 598 U.S. 631 (2023)",
        "correctRuling": "deny",
        "ruling": {
          "grant": "takings claim dismissed",
          "deny": "takings claim proceeds"
        },
        "consequence": {
          "grant": "The takings claim is dismissed on a state-law forfeiture theory Tyler rejected.",
          "deny": "Motion denied. Tyler recognizes a protected interest in surplus equity; the owner has plausibly alleged a taking."
        },
        "repEffect": {
          "grant": -14,
          "deny": 12
        },
        "id": "recentScotus-025",
        "legacyTitles": [
          "Motion to Enjoin Tax Foreclosure Windfall"
        ],
        "topic": "property",
        "jurisdiction": "U.S. federal",
        "lastReviewed": null,
        "ambiguous": false,
        "ambiguityReason": null,
        "authorities": [
          {
            "label": "Read the opinion",
            "url": "https://www.supremecourt.gov/opinions/22pdf/598us2r27_aplc.pdf"
          }
        ],
        "contentUpdated": "2026-09-08"
      },
      {
        "title": "Motion for Injunction - Union Access Regulation",
        "difficulty": "hard",
        "party": "grower",
        "flavor": "A state regulation grants union organizers a right to enter agricultural employers' private property for several hours a day, 120 days per year, without the owners' consent.",
        "explanation": "Cedar Point held that a regulation appropriating a right to physically invade private property is a per se taking, even if the access is intermittent rather than permanent.",
        "citation": "Cedar Point Nursery v. Hassid, 594 U.S. 139 (2021)",
        "correctRuling": "grant",
        "ruling": {
          "grant": "access rule invalid",
          "deny": "access rule upheld"
        },
        "consequence": {
          "grant": "Access rule invalid. The regulation appropriates a physical-access right under Cedar Point.",
          "deny": "The state compels recurring physical access without treating it as a per se taking."
        },
        "repEffect": {
          "grant": 12,
          "deny": -14
        },
        "id": "recentScotus-026",
        "legacyTitles": [
          "Motion for Injunction - Union Access Regulation"
        ],
        "topic": "property",
        "jurisdiction": "U.S. federal",
        "lastReviewed": null,
        "ambiguous": false,
        "ambiguityReason": null,
        "authorities": [
          {
            "label": "Read the opinion",
            "url": "https://www.law.cornell.edu/supremecourt/text/20-107"
          }
        ]
      },
      {
        "title": "Motion to Enjoin Congressional Map - Voting Rights Act",
        "difficulty": "hard",
        "party": "plaintiff",
        "flavor": "A state with a large, geographically compact Black population draws seven congressional districts but only one district in which Black voters can usually elect their preferred candidate. Plaintiffs satisfy the Gingles preconditions.",
        "explanation": "Allen v. Milligan reaffirmed Section 2 vote-dilution doctrine and upheld an injunction against Alabama's map on comparable facts.",
        "citation": "Allen v. Milligan, 599 U.S. 1 (2023); Thornburg v. Gingles, 478 U.S. 30 (1986)",
        "correctRuling": "grant",
        "ruling": {
          "grant": "map enjoined",
          "deny": "map upheld"
        },
        "consequence": {
          "grant": "Map enjoined. The facts track Milligan's Section 2 violation.",
          "deny": "The map survives despite proof satisfying the framework Milligan reaffirmed."
        },
        "repEffect": {
          "grant": 12,
          "deny": -12
        },
        "id": "recentScotus-027",
        "legacyTitles": [
          "Motion to Enjoin Congressional Map - Voting Rights Act"
        ],
        "topic": "elections",
        "jurisdiction": "U.S. federal",
        "lastReviewed": null,
        "ambiguous": false,
        "ambiguityReason": null,
        "authorities": [
          {
            "label": "Read the opinion",
            "url": "https://www.law.cornell.edu/supremecourt/text/21-1086"
          }
        ]
      },
      {
        "title": "Motion to Reinstate Legislature's Election Map",
        "difficulty": "hard",
        "party": "legislature",
        "flavor": "A state legislature argues that the Elections Clause gives it exclusive authority over federal-election rules, so state courts may not apply the state constitution to review a congressional map.",
        "explanation": "Moore v. Harper rejected the strongest independent-state-legislature theory. State legislatures remain bound by state constitutional limits enforced by state courts, subject to federal review for transgressing ordinary judicial review.",
        "citation": "Moore v. Harper, 600 U.S. 1 (2023)",
        "correctRuling": "deny",
        "ruling": {
          "grant": "map reinstated",
          "deny": "state-court review allowed"
        },
        "consequence": {
          "grant": "The legislature receives the unchecked authority Moore rejected.",
          "deny": "Motion denied. State constitutional review of federal-election rules is not categorically barred."
        },
        "repEffect": {
          "grant": -12,
          "deny": 12
        },
        "id": "recentScotus-028",
        "legacyTitles": [
          "Motion to Reinstate Legislature's Election Map"
        ],
        "topic": "elections",
        "jurisdiction": "U.S. federal",
        "lastReviewed": null,
        "ambiguous": false,
        "ambiguityReason": null,
        "authorities": [
          {
            "label": "Read the opinion",
            "url": "https://www.law.cornell.edu/supremecourt/text/21-1271"
          }
        ]
      },
      {
        "title": "Motion to Invalidate Indian Child Welfare Act",
        "difficulty": "hard",
        "party": "plaintiff",
        "flavor": "Foster parents and a state challenge ICWA's placement, notice, and active-efforts provisions, arguing Congress commandeered state courts and exceeded its authority over Indian affairs.",
        "explanation": "Haaland v. Brackeen rejected the principal Article I and anticommandeering challenges to ICWA and held that Congress may require state courts to apply federal law in child-custody proceedings.",
        "citation": "Haaland v. Brackeen, 599 U.S. 255 (2023)",
        "correctRuling": "deny",
        "ruling": {
          "grant": "ICWA invalidated",
          "deny": "ICWA upheld"
        },
        "consequence": {
          "grant": "ICWA is invalidated on theories Brackeen rejected.",
          "deny": "Motion denied. The challenged federal requirements survive under Brackeen."
        },
        "repEffect": {
          "grant": -12,
          "deny": 12
        },
        "id": "recentScotus-029",
        "legacyTitles": [
          "Motion to Invalidate Indian Child Welfare Act"
        ],
        "topic": "fedPower",
        "jurisdiction": "U.S. federal",
        "lastReviewed": null,
        "ambiguous": false,
        "ambiguityReason": null,
        "authorities": [
          {
            "label": "Read the opinion",
            "url": "https://www.law.cornell.edu/supremecourt/text/21-376"
          }
        ]
      },
      {
        "title": "Motion to Dismiss First Amendment Retaliation Claim - Regulator Pressure",
        "difficulty": "hard",
        "party": "official",
        "flavor": "A state financial regulator privately urges banks and insurers to cut ties with a controversial advocacy group, citing regulatory leverage and warning of consequences if they continue doing business with it.",
        "explanation": "NRA v. Vullo held that officials may criticize private speech but may not use coercive regulatory threats to punish or suppress disfavored viewpoints.",
        "citation": "National Rifle Association v. Vullo, 602 U.S. 175 (2024)",
        "correctRuling": "deny",
        "ruling": {
          "grant": "claim dismissed",
          "deny": "claim proceeds"
        },
        "consequence": {
          "grant": "The official escapes a plausible coercion claim despite Vullo.",
          "deny": "Motion denied. Alleged regulatory threats to suppress speech state a First Amendment claim."
        },
        "repEffect": {
          "grant": -12,
          "deny": 12
        },
        "id": "recentScotus-030",
        "legacyTitles": [
          "Motion to Dismiss First Amendment Retaliation Claim - Regulator Pressure"
        ],
        "topic": "firstA",
        "jurisdiction": "U.S. federal",
        "lastReviewed": null,
        "ambiguous": false,
        "ambiguityReason": null,
        "authorities": [
          {
            "label": "Read the opinion",
            "url": "https://www.law.cornell.edu/supremecourt/text/22-842"
          }
        ]
      }
    ]
  },
  "mixed": {
    "name": "MIXED DOCKET",
    "headerClass": "mx",
    "cardClass": "",
    "motions": []
  }
};
const TOPICS = {
  "evidence": [
    {
      "key": "character",
      "label": "Character"
    },
    {
      "key": "hearsay",
      "label": "Hearsay"
    },
    {
      "key": "authentication",
      "label": "Authentication"
    },
    {
      "key": "experts",
      "label": "Experts"
    },
    {
      "key": "privilege",
      "label": "Privilege"
    },
    {
      "key": "relevance",
      "label": "Relevance"
    },
    {
      "key": "other",
      "label": "Other"
    }
  ],
  "crimPro": [
    {
      "key": "sixthA",
      "label": "6th Amendment"
    },
    {
      "key": "fifthA",
      "label": "5th Amendment"
    },
    {
      "key": "fourthA",
      "label": "4th Amendment"
    },
    {
      "key": "trialAndPlea",
      "label": "Trial & Plea"
    },
    {
      "key": "other",
      "label": "Other"
    }
  ],
  "civPro": [
    {
      "key": "pleading",
      "label": "Pleading"
    },
    {
      "key": "jurisdiction",
      "label": "Jurisdiction"
    },
    {
      "key": "classAction",
      "label": "Class & Arbitration"
    },
    {
      "key": "discovery",
      "label": "Discovery & Sanctions"
    },
    {
      "key": "erieAndTrial",
      "label": "Erie & Trial"
    },
    {
      "key": "other",
      "label": "Other"
    }
  ],
  "conLaw": [
    {
      "key": "takings",
      "label": "Takings"
    },
    {
      "key": "secondA",
      "label": "2nd Amendment"
    },
    {
      "key": "fourthA",
      "label": "4th Amendment"
    },
    {
      "key": "commerce",
      "label": "Commerce & Federalism"
    },
    {
      "key": "dueProcess",
      "label": "Due Process"
    },
    {
      "key": "equalProt",
      "label": "Equal Protection"
    },
    {
      "key": "firstA",
      "label": "1st Amendment"
    },
    {
      "key": "other",
      "label": "Other"
    }
  ],
  "recentScotus": [
    {
      "key": "admin",
      "label": "Agency Power"
    },
    {
      "key": "firstA",
      "label": "Speech & Religion"
    },
    {
      "key": "secondA",
      "label": "2nd Amendment"
    },
    {
      "key": "equality",
      "label": "Equality & Liberty"
    },
    {
      "key": "fedcourts",
      "label": "Standing & Courts"
    },
    {
      "key": "elections",
      "label": "Elections"
    },
    {
      "key": "property",
      "label": "Property"
    },
    {
      "key": "fedPower",
      "label": "Federalism & Punishment"
    },
    {
      "key": "other",
      "label": "Other"
    }
  ]
};
if (typeof module !== "undefined") module.exports = { TRACKS, TOPICS };
