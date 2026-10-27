# Dependency-ordered portfolio backlog

Start at the earliest ready actionable issue. Parent totals roll up their sub-issues; only leaf estimates count toward effort. Every actionable task is at most 4 points. See [the sizing policy](backlog-policy.md) and [scope coverage](scope-coverage.md).

| Order | Issue | Kind | Points | Outcome | Prerequisites |
| --- | --- | --- | --- | --- | --- |
| 1 | [F01](https://github.com/paulsonrison/My-portfolio/issues/1) | task | 2 | Run both starter applications | — |
| 2 | [F02](https://github.com/paulsonrison/My-portfolio/issues/2) | task | 3 | Inventory the Figma reference | #1 (F01) |
| 3 | [F03](https://github.com/paulsonrison/My-portfolio/issues/3) | parent | 6 total | Define portfolio content and API contracts | #2 (F02) |
| 4 | [F03.a](https://github.com/paulsonrison/My-portfolio/issues/41) | subtask | 3 | Define content ownership and conditional feature scope | #2 (F02) |
| 5 | [F03.b](https://github.com/paulsonrison/My-portfolio/issues/42) | subtask | 3 | Specify project, contact and conditional admin API contracts | #2 (F02), #41 (F03.a) |
| 6 | [F04](https://github.com/paulsonrison/My-portfolio/issues/4) | task | 2 | Practice branches, commits and pull requests | #1 (F01) |
| 7 | [F05](https://github.com/paulsonrison/My-portfolio/issues/43) | parent | 6 total | Prepare frontend and isolated backend test harnesses | #1 (F01), #4 (F04) |
| 8 | [F05.a](https://github.com/paulsonrison/My-portfolio/issues/44) | subtask | 3 | Set up the frontend interaction-test harness | #1 (F01), #4 (F04) |
| 9 | [F05.b](https://github.com/paulsonrison/My-portfolio/issues/45) | subtask | 3 | Set up isolated API and database test fixtures | #1 (F01), #4 (F04) |
| 10 | [D01](https://github.com/paulsonrison/My-portfolio/issues/5) | task | 2 | Choose and load portfolio fonts | #2 (F02) |
| 11 | [D02](https://github.com/paulsonrison/My-portfolio/issues/6) | task | 3 | Define colors, spacing and type tokens | #5 (D01) |
| 12 | [D03](https://github.com/paulsonrison/My-portfolio/issues/7) | parent | 6 total | Build light and dark theme behavior | #6 (D02) |
| 13 | [D03.a](https://github.com/paulsonrison/My-portfolio/issues/46) | subtask | 3 | Establish light/dark theme tokens and initial preference resolution | #6 (D02) |
| 14 | [D03.b](https://github.com/paulsonrison/My-portfolio/issues/47) | subtask | 3 | Add accessible theme switching and persistence | #6 (D02), #46 (D03.a) |
| 15 | [D04](https://github.com/paulsonrison/My-portfolio/issues/8) | task | 3 | Set global custom styles and responsive rules | #6 (D02) |
| 16 | [D05](https://github.com/paulsonrison/My-portfolio/issues/9) | parent | 5 total | Create the shared Button component | #7 (D03), #8 (D04), #44 (F05.a) |
| 17 | [D05.a](https://github.com/paulsonrison/My-portfolio/issues/48) | subtask | 2 | Export and consume a native shared Button | #7 (D03), #8 (D04), #44 (F05.a) |
| 18 | [D05.b](https://github.com/paulsonrison/My-portfolio/issues/49) | subtask | 3 | Complete Button variants and accessible states | #7 (D03), #8 (D04), #44 (F05.a), #48 (D05.a) |
| 19 | [D06](https://github.com/paulsonrison/My-portfolio/issues/10) | task | 3 | Create inputs and form feedback | #8 (D04), #44 (F05.a) |
| 20 | [D07](https://github.com/paulsonrison/My-portfolio/issues/11) | task | 2 | Create ProgressBar and indicator states | #9 (D05), #2 (F02) |
| 21 | [U01](https://github.com/paulsonrison/My-portfolio/issues/12) | parent | 6 total | Build the responsive page shell | #9 (D05) |
| 22 | [U01.a](https://github.com/paulsonrison/My-portfolio/issues/50) | subtask | 2 | Build semantic page regions and skip navigation | #9 (D05) |
| 23 | [U01.b](https://github.com/paulsonrison/My-portfolio/issues/51) | subtask | 4 | Complete responsive and keyboard-accessible navigation | #9 (D05), #50 (U01.a) |
| 24 | [U02](https://github.com/paulsonrison/My-portfolio/issues/13) | task | 3 | Build the introduction and about sections | #12 (U01), #3 (F03) |
| 25 | [U03](https://github.com/paulsonrison/My-portfolio/issues/14) | task | 3 | Build skills and journey sections | #13 (U02), #11 (D07) |
| 26 | [U04](https://github.com/paulsonrison/My-portfolio/issues/15) | parent | 7 total | Build project cards and project details | #12 (U01), #3 (F03) |
| 27 | [U04.a](https://github.com/paulsonrison/My-portfolio/issues/52) | subtask | 3 | Render responsive project cards from the agreed data contract | #12 (U01), #3 (F03) |
| 28 | [U04.b](https://github.com/paulsonrison/My-portfolio/issues/53) | subtask | 4 | Build project detail routes and useful not-found behavior | #12 (U01), #3 (F03), #52 (U04.a) |
| 29 | [U05](https://github.com/paulsonrison/My-portfolio/issues/16) | parent | 6 total | Build the contact form interface | #10 (D06), #12 (U01), #3 (F03) |
| 30 | [U05.a](https://github.com/paulsonrison/My-portfolio/issues/54) | subtask | 3 | Build contact fields and accessible client validation | #10 (D06), #12 (U01), #3 (F03) |
| 31 | [U05.b](https://github.com/paulsonrison/My-portfolio/issues/55) | subtask | 3 | Implement contact submission states with a simulated transport | #10 (D06), #12 (U01), #3 (F03), #54 (U05.a) |
| 32 | [U06](https://github.com/paulsonrison/My-portfolio/issues/17) | parent | 5 total | Polish motion and reduced-motion behavior | #13 (U02), #14 (U03), #15 (U04) |
| 33 | [U06.a](https://github.com/paulsonrison/My-portfolio/issues/56) | subtask | 3 | Implement confirmed purposeful section transitions | #13 (U02), #14 (U03), #15 (U04) |
| 34 | [U06.b](https://github.com/paulsonrison/My-portfolio/issues/57) | subtask | 2 | Complete reduced-motion and mobile motion verification | #13 (U02), #14 (U03), #15 (U04), #56 (U06.a) |
| 35 | [U07](https://github.com/paulsonrison/My-portfolio/issues/58) | parent | 11 total | Reorder entire field rows with live rearrangement and accessible controls | #2 (F02), #3 (F03), #12 (U01), #44 (F05.a) |
| 36 | [U07.a](https://github.com/paulsonrison/My-portfolio/issues/59) | subtask | 3 | Define reorder state and stable identity contract | #2 (F02), #3 (F03), #12 (U01), #44 (F05.a) |
| 37 | [U07.b](https://github.com/paulsonrison/My-portfolio/issues/60) | subtask | 4 | Implement handle-driven whole-row dragging with live reflow | #2 (F02), #3 (F03), #12 (U01), #44 (F05.a), #59 (U07.a) |
| 38 | [U07.c](https://github.com/paulsonrison/My-portfolio/issues/61) | subtask | 4 | Complete touch, keyboard and reduced-motion reorder accessibility | #2 (F02), #3 (F03), #12 (U01), #44 (F05.a), #60 (U07.b) |
| 39 | [B07](https://github.com/paulsonrison/My-portfolio/issues/24) | task | 3 | Decide the admin authentication and authorization model | #3 (F03) |
| 40 | [B01](https://github.com/paulsonrison/My-portfolio/issues/18) | parent | 6 total | Validate environment configuration and database startup | #3 (F03), #24 (B07), #45 (F05.b) |
| 41 | [B01.a](https://github.com/paulsonrison/My-portfolio/issues/62) | subtask | 3 | Validate runtime configuration and environment examples | #3 (F03), #24 (B07), #45 (F05.b) |
| 42 | [B01.b](https://github.com/paulsonrison/My-portfolio/issues/63) | subtask | 3 | Connect Mongoose and expose database readiness | #3 (F03), #24 (B07), #45 (F05.b), #62 (B01.a) |
| 43 | [B02](https://github.com/paulsonrison/My-portfolio/issues/19) | task | 3 | Design project schemas and indexes | #18 (B01), #45 (F05.b) |
| 44 | [B03](https://github.com/paulsonrison/My-portfolio/issues/20) | parent | 6 total | Implement validation and safe API errors | #18 (B01), #3 (F03) |
| 45 | [B03.a](https://github.com/paulsonrison/My-portfolio/issues/64) | subtask | 3 | Validate API bodies, queries and identifiers | #18 (B01), #3 (F03) |
| 46 | [B03.b](https://github.com/paulsonrison/My-portfolio/issues/65) | subtask | 3 | Centralize safe HTTP errors and response contracts | #18 (B01), #3 (F03), #64 (B03.a) |
| 47 | [B04](https://github.com/paulsonrison/My-portfolio/issues/21) | parent | 6 total | Implement public project read endpoints | #19 (B02), #20 (B03) |
| 48 | [B04.a](https://github.com/paulsonrison/My-portfolio/issues/66) | subtask | 3 | Return bounded public project lists | #19 (B02), #20 (B03) |
| 49 | [B04.b](https://github.com/paulsonrison/My-portfolio/issues/67) | subtask | 3 | Return safe project detail by stable slug | #19 (B02), #20 (B03), #66 (B04.a) |
| 50 | [B05](https://github.com/paulsonrison/My-portfolio/issues/22) | parent | 6 total | Implement the contact-submission endpoint | #20 (B03), #3 (F03) |
| 51 | [B05.a](https://github.com/paulsonrison/My-portfolio/issues/68) | subtask | 3 | Validate and process synthetic contact submissions | #20 (B03), #3 (F03) |
| 52 | [B06](https://github.com/paulsonrison/My-portfolio/issues/23) | parent | 6 total | Apply HTTP security and CORS policy | #20 (B03) |
| 53 | [B06.a](https://github.com/paulsonrison/My-portfolio/issues/69) | subtask | 3 | Apply security headers, explicit CORS and body limits | #20 (B03) |
| 54 | [B06.b](https://github.com/paulsonrison/My-portfolio/issues/70) | subtask | 3 | Add baseline rate limits with trusted proxy policy | #20 (B03), #69 (B06.a) |
| 55 | [B05.b](https://github.com/paulsonrison/My-portfolio/issues/71) | subtask | 3 | Protect contact submissions from repeats and abuse | #20 (B03), #3 (F03), #68 (B05.a), #23 (B06) |
| 56 | [B08](https://github.com/paulsonrison/My-portfolio/issues/25) | parent | 12 total | Implement conditional admin login with bcrypt and JWT | #24 (B07), #20 (B03), #23 (B06) |
| 57 | [B08.a](https://github.com/paulsonrison/My-portfolio/issues/72) | subtask | 4 | Provision conditional admin credentials with bcrypt | #24 (B07), #20 (B03), #23 (B06) |
| 58 | [B08.b](https://github.com/paulsonrison/My-portfolio/issues/73) | subtask | 4 | Implement conditional enumeration-resistant admin login | #24 (B07), #20 (B03), #23 (B06), #72 (B08.a) |
| 59 | [B08.c](https://github.com/paulsonrison/My-portfolio/issues/74) | subtask | 4 | Verify conditional JWTs and enforce admin access | #24 (B07), #20 (B03), #23 (B06), #73 (B08.b) |
| 60 | [B09](https://github.com/paulsonrison/My-portfolio/issues/26) | parent | 15 total | Implement conditional session invalidation and account recovery | #25 (B08) |
| 61 | [B09.a](https://github.com/paulsonrison/My-portfolio/issues/75) | subtask | 4 | Enforce conditional session invalidation policy | #25 (B08) |
| 62 | [B09.b](https://github.com/paulsonrison/My-portfolio/issues/76) | subtask | 4 | Implement conditional account recovery token lifecycle | #25 (B08), #75 (B09.a) |
| 63 | [B09.c](https://github.com/paulsonrison/My-portfolio/issues/77) | subtask | 4 | Complete conditional password reset and authenticated change | #25 (B08), #76 (B09.b) |
| 64 | [B09.d](https://github.com/paulsonrison/My-portfolio/issues/78) | subtask | 3 | Implement email verification only if explicitly required | #25 (B08), #76 (B09.b) |
| 65 | [B10](https://github.com/paulsonrison/My-portfolio/issues/27) | parent | 8 total | Protect conditional project content mutations | #21 (B04), #25 (B08) |
| 66 | [B10.a](https://github.com/paulsonrison/My-portfolio/issues/79) | subtask | 4 | Implement conditional authorized project creation and update | #21 (B04), #25 (B08) |
| 67 | [B10.b](https://github.com/paulsonrison/My-portfolio/issues/80) | subtask | 4 | Implement conditional authorized project deletion | #21 (B04), #25 (B08), #79 (B10.a) |
| 68 | [B11](https://github.com/paulsonrison/My-portfolio/issues/28) | parent | 6 total | Add redacted logging and graceful shutdown | #18 (B01), #23 (B06) |
| 69 | [B11.a](https://github.com/paulsonrison/My-portfolio/issues/81) | subtask | 3 | Add structured redacted operational and security logs | #18 (B01), #23 (B06) |
| 70 | [B11.b](https://github.com/paulsonrison/My-portfolio/issues/82) | subtask | 3 | Drain HTTP and database resources on shutdown and fatal errors | #18 (B01), #23 (B06), #81 (B11.a) |
| 71 | [I01](https://github.com/paulsonrison/My-portfolio/issues/29) | parent | 7 total | Connect project UI to the Express API | #15 (U04), #21 (B04), #23 (B06) |
| 72 | [I01.a](https://github.com/paulsonrison/My-portfolio/issues/83) | subtask | 3 | Connect the project list to configured API data | #15 (U04), #21 (B04), #23 (B06) |
| 73 | [I01.b](https://github.com/paulsonrison/My-portfolio/issues/84) | subtask | 4 | Connect project detail routing and API failure behavior | #15 (U04), #21 (B04), #23 (B06), #83 (I01.a) |
| 74 | [I02](https://github.com/paulsonrison/My-portfolio/issues/30) | parent | 6 total | Connect the contact form end to end | #16 (U05), #22 (B05), #23 (B06) |
| 75 | [I02.a](https://github.com/paulsonrison/My-portfolio/issues/85) | subtask | 3 | Submit synthetic contact data through the real endpoint | #16 (U05), #22 (B05), #23 (B06) |
| 76 | [I02.b](https://github.com/paulsonrison/My-portfolio/issues/86) | subtask | 3 | Map contact validation, throttling and network failures | #16 (U05), #22 (B05), #23 (B06), #85 (I02.a) |
| 77 | [I03](https://github.com/paulsonrison/My-portfolio/issues/31) | parent | 8 total | Build conditional admin editing UI | #27 (B10), #29 (I01) |
| 78 | [I03.a](https://github.com/paulsonrison/My-portfolio/issues/87) | subtask | 4 | Connect the conditional authenticated admin access flow | #27 (B10), #29 (I01) |
| 79 | [I03.b](https://github.com/paulsonrison/My-portfolio/issues/88) | subtask | 4 | Connect conditional protected editing and validation | #27 (B10), #29 (I01), #87 (I03.a) |
| 80 | [Q01](https://github.com/paulsonrison/My-portfolio/issues/32) | parent | 8 total | Audit accessibility and responsive behavior | #29 (I01), #30 (I02), #17 (U06), #58 (U07) |
| 81 | [Q01.a](https://github.com/paulsonrison/My-portfolio/issues/89) | subtask | 3 | Audit keyboard, screen-reader and reorder accessibility | #29 (I01), #30 (I02), #17 (U06), #58 (U07) |
| 82 | [Q01.b](https://github.com/paulsonrison/My-portfolio/issues/90) | subtask | 3 | Audit responsive layouts, themes and reduced motion | #29 (I01), #30 (I02), #17 (U06), #58 (U07), #89 (Q01.a) |
| 83 | [Q01.c](https://github.com/paulsonrison/My-portfolio/issues/91) | subtask | 2 | Resolve and recheck accessibility findings | #29 (I01), #30 (I02), #17 (U06), #58 (U07), #90 (Q01.b) |
| 84 | [Q02](https://github.com/paulsonrison/My-portfolio/issues/33) | parent | 8 total | Add meaningful frontend and API regression tests | #29 (I01), #30 (I02), #58 (U07), #24 (B07), #26 (B09), #27 (B10) |
| 85 | [Q02.a](https://github.com/paulsonrison/My-portfolio/issues/92) | subtask | 3 | Cover frontend journeys and reorder regressions | #29 (I01), #30 (I02), #58 (U07), #24 (B07), #26 (B09), #27 (B10), #44 (F05.a) |
| 86 | [Q02.b](https://github.com/paulsonrison/My-portfolio/issues/93) | subtask | 3 | Cover API and applicable security failure paths | #29 (I01), #30 (I02), #58 (U07), #24 (B07), #26 (B09), #27 (B10), #21 (B04), #22 (B05), #23 (B06), #45 (F05.b) |
| 87 | [Q02.c](https://github.com/paulsonrison/My-portfolio/issues/94) | subtask | 2 | Run deterministic cross-layer regression checks in CI | #29 (I01), #30 (I02), #58 (U07), #24 (B07), #26 (B09), #27 (B10), #92 (Q02.a), #93 (Q02.b), #31 (I03) |
| 88 | [Q03](https://github.com/paulsonrison/My-portfolio/issues/34) | parent | 8 total | Improve SEO, metadata and asset performance | #32 (Q01), #15 (U04) |
| 89 | [Q03.a](https://github.com/paulsonrison/My-portfolio/issues/95) | subtask | 3 | Complete metadata and search-discovery files | #32 (Q01), #15 (U04) |
| 90 | [Q03.b](https://github.com/paulsonrison/My-portfolio/issues/96) | subtask | 2 | Optimize images, fonts and layout stability | #32 (Q01), #15 (U04), #95 (Q03.a) |
| 91 | [Q03.c](https://github.com/paulsonrison/My-portfolio/issues/97) | subtask | 3 | Measure and improve frontend performance | #32 (Q01), #15 (U04), #96 (Q03.b), #58 (U07) |
| 92 | [Q04](https://github.com/paulsonrison/My-portfolio/issues/35) | parent | 6 total | Review dependency health and CI coverage | #33 (Q02), #34 (Q03) |
| 93 | [Q04.a](https://github.com/paulsonrison/My-portfolio/issues/98) | subtask | 3 | Verify clean-clone CI and full lint/test coverage | #33 (Q02), #34 (Q03) |
| 94 | [Q04.b](https://github.com/paulsonrison/My-portfolio/issues/99) | subtask | 3 | Review dependency advisories and secret exposure | #33 (Q02), #34 (Q03), #98 (Q04.a) |
| 95 | [P01](https://github.com/paulsonrison/My-portfolio/issues/36) | task | 4 | Choose frontend/API/database hosting and document costs | #35 (Q04) |
| 96 | [P02](https://github.com/paulsonrison/My-portfolio/issues/37) | parent | 8 total | Provision production database and secrets safely | #36 (P01), #28 (B11) |
| 97 | [P02.a](https://github.com/paulsonrison/My-portfolio/issues/100) | subtask | 3 | Configure production database access and separation | #36 (P01), #28 (B11) |
| 98 | [P02.b](https://github.com/paulsonrison/My-portfolio/issues/101) | subtask | 3 | Configure and validate production secrets | #36 (P01), #28 (B11), #100 (P02.a) |
| 99 | [P02.c](https://github.com/paulsonrison/My-portfolio/issues/102) | subtask | 2 | Verify backup and restore expectations | #36 (P01), #28 (B11), #101 (P02.b) |
| 100 | [P03](https://github.com/paulsonrison/My-portfolio/issues/38) | parent | 6 total | Deploy and verify the API | #37 (P02), #23 (B06) |
| 101 | [P03.a](https://github.com/paulsonrison/My-portfolio/issues/103) | subtask | 3 | Deploy the reviewed API with production transport settings | #37 (P02), #23 (B06) |
| 102 | [P03.b](https://github.com/paulsonrison/My-portfolio/issues/104) | subtask | 3 | Verify deployed API readiness and failures | #37 (P02), #23 (B06), #103 (P03.a) |
| 103 | [P04](https://github.com/paulsonrison/My-portfolio/issues/39) | parent | 6 total | Deploy the frontend and configure its domain | #38 (P03), #34 (Q03) |
| 104 | [P04.a](https://github.com/paulsonrison/My-portfolio/issues/105) | subtask | 3 | Deploy the frontend and configure HTTPS/domain | #38 (P03), #34 (Q03) |
| 105 | [P04.b](https://github.com/paulsonrison/My-portfolio/issues/106) | subtask | 3 | Verify live frontend/API journeys | #38 (P03), #34 (Q03), #105 (P04.a), #58 (U07) |
| 106 | [P05](https://github.com/paulsonrison/My-portfolio/issues/40) | parent | 8 total | Run launch review and document maintenance | #39 (P04) |
| 107 | [P05.a](https://github.com/paulsonrison/My-portfolio/issues/107) | subtask | 3 | Complete launch functional, accessibility and security checks | #39 (P04), #35 (Q04) |
| 108 | [P05.b](https://github.com/paulsonrison/My-portfolio/issues/108) | subtask | 3 | Document monitoring, rollback and maintenance operations | #39 (P04), #107 (P05.a), #102 (P02.c) |
| 109 | [P05.c](https://github.com/paulsonrison/My-portfolio/issues/109) | subtask | 2 | Request final review and publish the maintenance handoff | #39 (P04), #108 (P05.b) |
