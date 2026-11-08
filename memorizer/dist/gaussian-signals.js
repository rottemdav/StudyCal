/* יחידות גאוסיות נפרדות: משתנים סקלריים ווקטורים ממשיים. */
window.GAUSSIAN_PACK = {
  "id": "gaussian-signals",
  "version": 1,
  "courseId": "signals",
  "courseName": "אותות אקראיים",
  "units": {
    "gaussian-scalars": "משתנים אקראיים גאוסיים",
    "gaussian-vectors": "וקטורים אקראיים גאוסיים"
  },
  "items": [
    {
      "id": "gs_density",
      "course": "signals",
      "unit": "gaussian-scalars",
      "title": "משתנה גאוסי: הגדרה וצפיפות",
      "type": "Definition",
      "topic": "הגדרה ונרמול",
      "statement": "משתנה ממשי X הוא גאוסי לא מנוון אם קיימים μ ממשי ו־σ²>0 שעבורם הצפיפות היא הפעמון הנתון. בכתיב N(μ,σ²), הפרמטר השני הוא השונות, ו־σ היא סטיית התקן.",
      "formula": "\\begin{gathered}X\\sim\\mathcal N(\\mu,\\sigma^2),\\quad \\sigma^2>0\\\\f_X(x)=\\frac{1}{\\sqrt{2\\pi\\sigma^2}}e^{-\\frac{(x-\\mu)^2}{2\\sigma^2}}\\\\\\mathbb E[X]=\\mu,\\quad\\operatorname{Var}(X)=\\sigma^2\\end{gathered}",
      "question": "נתון X~N(2,9). מהי סטיית התקן של X?",
      "choices": [
        "3",
        "9",
        "81",
        "2"
      ],
      "answer": 0,
      "explanation": "בכתיב הקורס הפרמטר השני הוא שונות. לכן σ²=9 ו־σ=3.",
      "links": [],
      "sources": [
        {
          "file": "Random Signals - Tutorial 02.pdf",
          "pages": [
            1
          ],
          "section": "הגדרת משתנה גאוסי ופונקציה אופיינית"
        }
      ],
      "origin": "direct"
    },
    {
      "id": "gs_standard",
      "course": "signals",
      "unit": "gaussian-scalars",
      "title": "גאוסי סטנדרטי",
      "type": "Definition",
      "topic": "הגדרה ונרמול",
      "statement": "גאוסי סטנדרטי הוא משתנה גאוסי שתוחלתו אפס ושונותו אחת. הצפיפות φ ופונקציית ההתפלגות Φ מתייחסות למשתנה זה.",
      "formula": "\\begin{gathered}Z\\sim\\mathcal N(0,1)\\\\\\varphi(z)=\\frac{1}{\\sqrt{2\\pi}}e^{-z^2/2}\\\\\\Phi(z)=\\int_{-\\infty}^{z}\\varphi(u)\\,du\\end{gathered}",
      "question": "איזה זוג פרמטרים מגדיר גאוסי סטנדרטי?",
      "choices": [
        "תוחלת 0 ושונות 1",
        "תוחלת 1 ושונות 0",
        "תוחלת 0 ושונות 0",
        "תוחלת 1 ושונות 1"
      ],
      "answer": 0,
      "explanation": "סטנדרטי פירושו ממורכז ובעל שונות יחידה.",
      "links": [
        "gs_density"
      ],
      "sources": [
        {
          "file": "Random Signals - Tutorial 02.pdf",
          "pages": [
            1
          ],
          "section": "הגדרת משתנה גאוסי ופונקציה אופיינית"
        }
      ],
      "origin": "supplement"
    },
    {
      "id": "gs_normalize",
      "course": "signals",
      "unit": "gaussian-scalars",
      "title": "נרמול גאוסי",
      "type": "Formula",
      "topic": "הגדרה ונרמול",
      "statement": "אם X~N(μ,σ²) ו־σ>0, מחסרים את התוחלת ומחלקים בסטיית התקן כדי לקבל גאוסי סטנדרטי. החלוקה היא ב־σ ולא ב־σ².",
      "formula": "Z=\\frac{X-\\mu}{\\sigma}\\sim\\mathcal N(0,1)",
      "question": "איך מנרמלים X~N(2,9) לגאוסי סטנדרטי?",
      "choices": [
        "(X−2)/3",
        "(X−2)/9",
        "X/3",
        "(X+2)/3"
      ],
      "answer": 0,
      "explanation": "מחסרים 2 ומחלקים בסטיית התקן √9=3.",
      "links": [
        "gs_standard"
      ],
      "sources": [
        {
          "file": "Random Signals - Tutorial 02.pdf",
          "pages": [
            1
          ],
          "section": "הגדרת משתנה גאוסי ופונקציה אופיינית"
        }
      ],
      "origin": "derived"
    },
    {
      "id": "gs_cdf",
      "course": "signals",
      "unit": "gaussian-scalars",
      "title": "התפלגות והסתברויות של גאוסי",
      "type": "Formula",
      "topic": "הגדרה ונרמול",
      "statement": "עבור σ>0 מחשבים הסתברויות באמצעות נרמול ופונקציית ההתפלגות של הגאוסי הסטנדרטי. לגאוסי לא מנוון אין מסה בנקודה, ולכן הכללת קצות הקטע אינה משנה את ההסתברות.",
      "formula": "\\begin{gathered}F_X(x)=\\Phi\\!\\left(\\frac{x-\\mu}{\\sigma}\\right)\\\\P(a<X\\le b)=\\Phi\\!\\left(\\frac{b-\\mu}{\\sigma}\\right)-\\Phi\\!\\left(\\frac{a-\\mu}{\\sigma}\\right)\\end{gathered}",
      "question": "נתון X~N(2,9). איך מבטאים את P(X≤5)?",
      "choices": [
        "Φ(1)",
        "Φ(3)",
        "Φ(1/3)",
        "1−Φ(1)"
      ],
      "answer": 0,
      "explanation": "הסף המנורמל הוא (5−2)/3=1.",
      "links": [
        "gs_normalize"
      ],
      "sources": [
        {
          "file": "Random Signals - Tutorial 02.pdf",
          "pages": [
            1
          ],
          "section": "הגדרת משתנה גאוסי ופונקציה אופיינית"
        },
        {
          "file": "Random Signals - Tutorial 08.pdf",
          "pages": [
            2,
            3
          ],
          "section": "תהליך גאוסי ומעבר במערכת לינארית"
        }
      ],
      "origin": "supplement"
    },
    {
      "id": "gs_tails",
      "course": "signals",
      "unit": "gaussian-scalars",
      "title": "פונקציית Q וסימטריית הזנבות",
      "type": "Formula",
      "topic": "הגדרה ונרמול",
      "statement": "עבור גאוסי סטנדרטי, Q(a) היא ההסתברות להיות מעל a. הסימטריה נותנת Φ(−a)=1−Φ(a). בנוסחה הדו־צדדית X~N(μ,σ²), σ>0 ו־a≥0.",
      "formula": "\\begin{gathered}Q(a)=P(Z>a)=1-\\Phi(a)\\\\\\Phi(-a)=1-\\Phi(a)\\\\P(|X-\\mu|>a\\sigma)=2Q(a),\\quad a\\ge0\\end{gathered}",
      "question": "אם X~N(μ,σ²), σ>0, מהו P(|X−μ|>2σ)?",
      "choices": [
        "2Q(2)",
        "Q(2)",
        "2Q(4)",
        "1−2Q(2)"
      ],
      "answer": 0,
      "explanation": "שני הזנבות שווים, וכל אחד מהם בעל הסתברות Q(2).",
      "links": [
        "gs_cdf"
      ],
      "sources": [
        {
          "file": "Random Signals - Tutorial 02.pdf",
          "pages": [
            1
          ],
          "section": "הגדרת משתנה גאוסי ופונקציה אופיינית"
        },
        {
          "file": "Random Signals - Tutorial 08.pdf",
          "pages": [
            2,
            3
          ],
          "section": "תהליך גאוסי ומעבר במערכת לינארית"
        }
      ],
      "origin": "supplement"
    },
    {
      "id": "gs_characteristic",
      "course": "signals",
      "unit": "gaussian-scalars",
      "title": "פונקציה אופיינית של גאוסי",
      "type": "Formula",
      "topic": "פונקציות יוצרות",
      "statement": "הפונקציה האופיינית היא התוחלת של exp(iνX). היא קיימת לכל ν ממשי ומאפיינת את הפילוג באופן יחיד. הנוסחה תקפה גם לשונות אפס.",
      "formula": "\\begin{gathered}\\phi_X(\\nu)=\\mathbb E[e^{i\\nu X}]\\\\=\\exp\\!\\left(i\\mu\\nu-\\frac{\\sigma^2\\nu^2}{2}\\right)\\end{gathered}",
      "question": "ל־X~N(0,4), מהי הפונקציה האופיינית?",
      "choices": [
        "exp(−2ν²)",
        "exp(−4ν²)",
        "exp(2ν²)",
        "exp(4iν)"
      ],
      "answer": 0,
      "explanation": "האיבר הלינארי נעלם, והמקדֵם הריבועי הוא −σ²/2=−2.",
      "links": [
        "gs_density"
      ],
      "sources": [
        {
          "file": "Random Signals - Tutorial 02.pdf",
          "pages": [
            1
          ],
          "section": "הגדרת משתנה גאוסי ופונקציה אופיינית"
        }
      ],
      "origin": "direct"
    },
    {
      "id": "gs_mgf",
      "course": "signals",
      "unit": "gaussian-scalars",
      "title": "יוצרת מומנטים של גאוסי",
      "type": "Formula",
      "topic": "פונקציות יוצרות",
      "statement": "יוצרת המומנטים של גאוסי קיימת לכל t ממשי. בניגוד לפונקציה האופיינית, כאן המעריך הוא tX ללא i, ולכן הסימן של האיבר הריבועי חיובי.",
      "formula": "M_X(t)=\\mathbb E[e^{tX}]=e^{\\mu t+\\sigma^2t^2/2}",
      "question": "אם X~N(1,2), מהו E[e^{2X}]?",
      "choices": [
        "e⁶",
        "e⁴",
        "e²",
        "e⁻²"
      ],
      "answer": 0,
      "explanation": "מציבים μ=1, σ²=2 ו־t=2: המעריך הוא 2+2·4/2=6.",
      "links": [
        "gs_characteristic"
      ],
      "sources": [
        {
          "file": "Random Signals - Tutorial 02.pdf",
          "pages": [
            5,
            6
          ],
          "section": "תרגיל 2: שימוש ביוצרת מומנטים גאוסית"
        }
      ],
      "origin": "derived"
    },
    {
      "id": "gs_second",
      "course": "signals",
      "unit": "gaussian-scalars",
      "title": "תוחלת, שונות ומומנט שני",
      "type": "Formula",
      "topic": "מומנטים",
      "statement": "לגאוסי X~N(μ,σ²), המומנט השני כולל גם את ריבוע התוחלת. השוויון E[X²]=σ² נכון רק כאשר μ=0.",
      "formula": "\\begin{gathered}\\mathbb E[X]=\\mu,\\quad\\operatorname{Var}(X)=\\sigma^2\\\\\\mathbb E[X^2]=\\sigma^2+\\mu^2\\end{gathered}",
      "question": "אם X~N(2,3), מהו E[X²]?",
      "choices": [
        "7",
        "3",
        "5",
        "9"
      ],
      "answer": 0,
      "explanation": "משתמשים בשונות ועוד ריבוע התוחלת: 3+2²=7.",
      "links": [
        "gs_density"
      ],
      "sources": [
        {
          "file": "Random Signals - Tutorial 02.pdf",
          "pages": [
            1
          ],
          "section": "הגדרת משתנה גאוסי ופונקציה אופיינית"
        }
      ],
      "origin": "derived"
    },
    {
      "id": "gs_odd",
      "course": "signals",
      "unit": "gaussian-scalars",
      "title": "מומנטים אי־זוגיים ממורכזים",
      "type": "Claim",
      "topic": "מומנטים",
      "statement": "סימטריית הפילוג סביב μ מאפסת כל מומנט מרכזי אי־זוגי. אין להסיק מכך שכל מומנט אי־זוגי של X עצמו אפס כאשר התוחלת אינה אפס.",
      "formula": "\\mathbb E[(X-\\mu)^{2m+1}]=0,\\quad m=0,1,2,\\ldots",
      "question": "לגאוסי בעל תוחלת μ, איזה גודל בהכרח אפס?",
      "choices": [
        "E[(X−μ)³]",
        "E[X³]",
        "E[X²]",
        "E[|X−μ|]"
      ],
      "answer": 0,
      "explanation": "החזקה האי־זוגית של המשתנה הממורכז מתבטלת במיצוע בזכות סימטריה.",
      "links": [
        "gs_density"
      ],
      "sources": [
        {
          "file": "Random Signals - Tutorial 02.pdf",
          "pages": [
            3,
            4
          ],
          "section": "תרגיל 1: מומנטים של גאוסי ממורכז"
        }
      ],
      "origin": "derived"
    },
    {
      "id": "gs_even",
      "course": "signals",
      "unit": "gaussian-scalars",
      "title": "מומנטים זוגיים של גאוסי ממורכז",
      "type": "Formula",
      "topic": "מומנטים",
      "statement": "אם X~N(0,σ²), המומנט מסדר 2m הוא מכפלת σ בחזקת 2m בכל המספרים האי־זוגיים עד 2m−1. הנוסחה היא למומנטים של משתנה ממורכז.",
      "formula": "\\begin{gathered}\\mathbb E[X^{2m}]=\\frac{(2m)!}{2^m m!}\\sigma^{2m}\\\\=(2m-1)!!\\,\\sigma^{2m},\\quad m\\ge1\\end{gathered}",
      "question": "אם X~N(0,σ²), מהו E[X⁶]?",
      "choices": [
        "15σ⁶",
        "6σ⁶",
        "3σ⁶",
        "σ⁶"
      ],
      "answer": 0,
      "explanation": "ל־m=3 מקבלים 1·3·5·σ⁶=15σ⁶.",
      "links": [
        "gs_odd"
      ],
      "sources": [
        {
          "file": "Random Signals - Tutorial 02.pdf",
          "pages": [
            3,
            4
          ],
          "section": "תרגיל 1: מומנטים של גאוסי ממורכז"
        }
      ],
      "origin": "direct"
    },
    {
      "id": "gs_fourth",
      "course": "signals",
      "unit": "gaussian-scalars",
      "title": "תכונת המומנט הרביעי",
      "type": "Formula",
      "topic": "מומנטים",
      "statement": "לגאוסי ממורכז, המומנט הרביעי הוא שלוש פעמים ריבוע השונות. הפרת הזהות מוכיחה שהמשתנה אינו גאוסי ממורכז; קיומה לבדו אינו מוכיח גאוסיות.",
      "formula": "X\\sim\\mathcal N(0,\\sigma^2)\\ \\Longrightarrow\\ \\mathbb E[X^4]=3\\sigma^4",
      "question": "למשתנה ממורכז שונות 2 ומומנט רביעי 9. מה אפשר להסיק?",
      "choices": [
        "הוא אינו גאוסי",
        "הוא בהכרח גאוסי",
        "הוא גאוסי סטנדרטי",
        "אי אפשר לשלול גאוסיות"
      ],
      "answer": 0,
      "explanation": "גאוסי ממורכז עם שונות 2 חייב לקיים E[X⁴]=3·2²=12, ולא 9.",
      "links": [
        "gs_even"
      ],
      "sources": [
        {
          "file": "Random Signals - Tutorial 02.pdf",
          "pages": [
            3,
            4
          ],
          "section": "תרגיל 1: מומנטים של גאוסי ממורכז"
        },
        {
          "file": "Random Signals - Tutorial 08.pdf",
          "pages": [
            4
          ],
          "section": "שלילת גאוסיות באמצעות מומנט רביעי"
        }
      ],
      "origin": "direct"
    },
    {
      "id": "gs_fourth-raw",
      "course": "signals",
      "unit": "gaussian-scalars",
      "title": "מומנט רביעי כשהתוחלת אינה אפס",
      "type": "Formula",
      "topic": "מומנטים",
      "statement": "ל־X~N(μ,σ²), המומנט הרביעי הלא ממורכז מתקבל מפיתוח X=μ+(X−μ). איברים אי־זוגיים של המשתנה הממורכז נעלמים. אין להציב 3σ⁴ אם μ≠0.",
      "formula": "\\mathbb E[X^4]=\\mu^4+6\\mu^2\\sigma^2+3\\sigma^4",
      "question": "אם X~N(1,2), מהו E[X⁴]?",
      "choices": [
        "25",
        "12",
        "19",
        "9"
      ],
      "answer": 0,
      "explanation": "מציבים μ=1 ו־σ²=2: מתקבל 1+12+12=25.",
      "links": [
        "gs_odd",
        "gs_fourth"
      ],
      "sources": [
        {
          "file": "Random Signals - Tutorial 02.pdf",
          "pages": [
            3,
            4
          ],
          "section": "תרגיל 1: מומנטים של גאוסי ממורכז"
        }
      ],
      "origin": "derived"
    },
    {
      "id": "gs_square",
      "course": "signals",
      "unit": "gaussian-scalars",
      "title": "השונות של ריבוע גאוסי",
      "type": "Formula",
      "topic": "מומנטים",
      "statement": "ריבועו של גאוסי אינו בדרך כלל גאוסי. את שונותו מחשבים ממומנטים שני ורביעי של X. במקרה הממורכז היא שווה לפעמיים ריבוע השונות של X.",
      "formula": "\\begin{gathered}\\operatorname{Var}(X^2)=2\\sigma^4+4\\mu^2\\sigma^2\\\\\\mu=0:\\quad\\operatorname{Var}(X^2)=2\\sigma^4\\end{gathered}",
      "question": "אם X~N(0,2), מהי Var(X²)?",
      "choices": [
        "8",
        "4",
        "12",
        "2"
      ],
      "answer": 0,
      "explanation": "כאן σ²=2, ולכן 2σ⁴=2·2²=8.",
      "links": [
        "gs_second",
        "gs_fourth-raw"
      ],
      "sources": [
        {
          "file": "Random Signals - Tutorial 02.pdf",
          "pages": [
            3,
            4
          ],
          "section": "תרגיל 1: מומנטים של גאוסי ממורכז"
        }
      ],
      "origin": "derived"
    },
    {
      "id": "gs_affine",
      "course": "signals",
      "unit": "gaussian-scalars",
      "title": "טרנספורמציה אפינית של גאוסי",
      "type": "Theorem",
      "topic": "טרנספורמציות ודוגמאות",
      "statement": "עבור קבועים דטרמיניסטיים a,b, טרנספורמציה aX+b של גאוסי היא גאוסית. השונות מוכפלת ב־a² גם כאשר a שלילי. כאשר a=0 מתקבל משתנה גאוסי מנוון.",
      "formula": "X\\sim\\mathcal N(\\mu,\\sigma^2)\\ \\Longrightarrow\\ aX+b\\sim\\mathcal N(a\\mu+b,a^2\\sigma^2)",
      "question": "אם X~N(1,4), כיצד מתפלג Y=−2X+3?",
      "choices": [
        "N(1,16)",
        "N(1,8)",
        "N(5,16)",
        "N(−2,4)"
      ],
      "answer": 0,
      "explanation": "התוחלת היא −2·1+3=1, והשונות היא (−2)²·4=16.",
      "links": [
        "gs_density"
      ],
      "sources": [
        {
          "file": "Random Signals - Tutorial 03.pdf",
          "pages": [
            2,
            3
          ],
          "section": "טרנספורמציות, אי־תלות והתניה גאוסית"
        }
      ],
      "origin": "derived"
    },
    {
      "id": "gs_sum",
      "course": "signals",
      "unit": "gaussian-scalars",
      "title": "סכום של גאוסיים בלתי תלויים",
      "type": "Theorem",
      "topic": "טרנספורמציות ודוגמאות",
      "statement": "למספר קבוע של משתנים גאוסיים בלתי תלויים ולמקדמים דטרמיניסטיים, הסכום המשוקלל גאוסי. השונויות מתחברות עם ריבועי המקדמים. סכום של משתנים גאוסיים שולית אך תלויים אינו בהכרח גאוסי.",
      "formula": "\\begin{gathered}X_i\\overset{\\mathrm{ind}}\\sim\\mathcal N(\\mu_i,\\sigma_i^2)\\\\\\sum_{i=1}^n a_iX_i\\sim\\mathcal N\\!\\left(\\sum_i a_i\\mu_i,\\sum_i a_i^2\\sigma_i^2\\right)\\end{gathered}",
      "question": "ל־X~N(1,2) ו־Y~N(−1,3) בלתי תלויים, מהו פילוג X+Y?",
      "choices": [
        "N(0,5)",
        "N(0,1)",
        "N(2,5)",
        "לא בהכרח גאוסי"
      ],
      "answer": 0,
      "explanation": "אי־התלות מבטיחה גאוסיות במשותף. התוחלות מתחברות ל־0 והשונויות ל־5.",
      "links": [
        "gs_affine"
      ],
      "sources": [
        {
          "file": "Random Signals - Tutorial 03.pdf",
          "pages": [
            5,
            6
          ],
          "section": "תרגיל 3: סכום במספר קבוע של גאוסיים"
        }
      ],
      "origin": "direct"
    },
    {
      "id": "gs_random-sign",
      "course": "signals",
      "unit": "gaussian-scalars",
      "title": "כפל גאוסי ממורכז בסימן אקראי",
      "type": "Claim",
      "topic": "טרנספורמציות ודוגמאות",
      "statement": "אם X גאוסי ממורכז ו־B סימן ±1 בלתי תלוי בו, אז BX בעל אותו פילוג כמו X. בתרגול B שווה־הסתברות. כאן המקדם אקראי, והגאוסיות נובעת מסימטריית X ומאי־התלות, ולא ממשפט הטרנספורמציה הדטרמיניסטית.",
      "formula": "\\begin{gathered}X\\sim\\mathcal N(0,\\sigma^2),\\quad B\\perp X,\\quad B\\in\\{-1,1\\}\\\\BX\\overset d=X\\end{gathered}",
      "question": "מדוע BX נשאר גאוסי כש־X ממורכז ו־B סימן בלתי תלוי?",
      "choices": [
        "כי X ו־−X בעלי אותו פילוג",
        "כי כל כפל במקדם אקראי משמר גאוסיות",
        "כי BX בהכרח בלתי תלוי ב־X",
        "כי B הוא גאוסי"
      ],
      "answer": 0,
      "explanation": "מתנים בסימן: בשני הענפים מתקבל אותו פילוג גאוסי ממורכז.",
      "links": [
        "gs_affine"
      ],
      "sources": [
        {
          "file": "Random Signals - Tutorial 03.pdf",
          "pages": [
            4,
            5
          ],
          "section": "תרגיל 1: כפל בסימן אקראי"
        }
      ],
      "origin": "direct"
    },
    {
      "id": "gs_symmetry",
      "course": "signals",
      "unit": "gaussian-scalars",
      "title": "סימטריית גאוסי לא מנוון",
      "type": "Claim",
      "topic": "הגדרה ונרמול",
      "statement": "לגאוסי בעל שונות חיובית, ההסתברות להיות משני צדדי התוחלת היא חצי. בפרט, עבור גאוסי ממורכז P(X>0)=½. אם השונות אפס, כל המסה בתוחלת והטענה עם אי־שוויון חזק אינה תקפה.",
      "formula": "\\sigma^2>0:\\quad P(X>\\mu)=P(X<\\mu)=\\frac12",
      "question": "נתון X~N(0,1/3). מהו P(X>0)?",
      "choices": [
        "1/2",
        "1/3",
        "0",
        "1"
      ],
      "answer": 0,
      "explanation": "תוחלת אפס ושונות חיובית מספיקות כאן בזכות גאוסיות וסימטריה. זהו גם חישוב ההסתברות במוצא מעגל בתרגול.",
      "links": [
        "gs_density"
      ],
      "sources": [
        {
          "file": "Random Signals - Tutorial 02.pdf",
          "pages": [
            1
          ],
          "section": "הגדרת משתנה גאוסי ופונקציה אופיינית"
        },
        {
          "file": "Random Signals - Tutorial 08.pdf",
          "pages": [
            3
          ],
          "section": "תרגיל 1: ההסתברות שמתח המוצא חיובי"
        }
      ],
      "origin": "derived"
    },
    {
      "id": "gs_degenerate",
      "course": "signals",
      "unit": "gaussian-scalars",
      "title": "גאוסי מנוון: שונות אפס",
      "type": "Definition",
      "topic": "הגדרה ונרמול",
      "statement": "בקורס כוללים גם משתנה גאוסי בעל שונות אפס: הוא שווה לקבוע μ כמעט בוודאות. אין לו צפיפות רגילה ביחס לאורך על הישר; נוסחת הפעמון עם חלוקה ב־σ אינה חלה.",
      "formula": "\\begin{gathered}X\\sim\\mathcal N(\\mu,0)\\ \\Longleftrightarrow\\ P(X=\\mu)=1\\\\\\phi_X(\\nu)=e^{i\\mu\\nu}\\end{gathered}",
      "question": "האם משתנה השווה לקבוע 5 כמעט בוודאות יכול להיחשב גאוסי בקורס?",
      "choices": [
        "כן, N(5,0)",
        "לא, גאוסי חייב שונות חיובית",
        "כן, N(0,5)",
        "רק אם הקבוע אפס"
      ],
      "answer": 0,
      "explanation": "התרגול כולל במפורש גאוסי מנוון. הוא דטרמיניסטי, עם שונות אפס.",
      "links": [
        "gs_characteristic"
      ],
      "sources": [
        {
          "file": "Random Signals - Tutorial 02.pdf",
          "pages": [
            1
          ],
          "section": "הגדרת משתנה גאוסי ופונקציה אופיינית"
        }
      ],
      "origin": "direct"
    },
    {
      "id": "gs_random-sum",
      "course": "signals",
      "unit": "gaussian-scalars",
      "title": "מספר אקראי של מחוברים גאוסיים",
      "type": "Claim",
      "topic": "טרנספורמציות ודוגמאות",
      "statement": "יהיו X_i בלתי תלויים N(0,σ²), σ²>0, ו־N בלתי תלוי בהם, עם הסתברויות שוות ל־1 ול־2. בהינתן N הסכום גאוסי, אך ללא ההתניה מתקבלת תערובת של שתי שונויות ולכן הסכום אינו גאוסי.",
      "formula": "\\begin{gathered}S_N=\\sum_{i=1}^N X_i\\\\S_N\\mid N\\sim\\mathcal N(0,N\\sigma^2)\\\\\\phi_{S_N}(\\nu)=\\tfrac12 e^{-\\sigma^2\\nu^2/2}+\\tfrac12 e^{-\\sigma^2\\nu^2}\\end{gathered}",
      "question": "מה הבעיה בהסקה שסכום של מספר אקראי של גאוסיים הוא תמיד גאוסי?",
      "choices": [
        "משפט הסגירות אינו חל אוטומטית על מספר מחוברים אקראי",
        "כל סכום של גאוסיים אינו גאוסי",
        "אי אפשר להתנות ב־N",
        "לסכום אין שונות"
      ],
      "answer": 0,
      "explanation": "בתנאי התרגיל זהו ממוצע של שתי פונקציות אופייניות בעלות שונויות שונות, ולא אקספוננט גאוסי יחיד.",
      "links": [
        "gs_sum",
        "gs_characteristic",
        "cm_random-gaussian-sum"
      ],
      "sources": [
        {
          "file": "Random Signals - Tutorial 03.pdf",
          "pages": [
            5,
            6
          ],
          "section": "תרגיל 3: מספר אקראי של מחוברים"
        }
      ],
      "origin": "direct"
    },
    {
      "id": "gs_random-phase",
      "course": "signals",
      "unit": "gaussian-scalars",
      "title": "פאזה אקראית שוללת גאוסיות באמצעות מומנט רביעי",
      "type": "Claim",
      "topic": "טרנספורמציות ודוגמאות",
      "statement": "אם X~N(0,r), r>0, ו־Θ אחידה על [0,2π] ובלתי תלויה ב־X, אז Y=XcosΘ אינו גאוסי. שונותו r/2 אך המומנט הרביעי שלו 9r²/8, שאינו מתאים לגאוסי בעל אותה שונות.",
      "formula": "\\begin{gathered}\\mathbb E[Y^2]=r/2,\\quad\\mathbb E[Y^4]=9r^2/8\\\\3(\\mathbb E[Y^2])^2=3r^2/4\\ne9r^2/8\\end{gathered}",
      "question": "יהיו X~N(0,r), r>0, ו־Θ אחידה על [0,2π] ובלתי תלויה ב־X. נגדיר Y=XcosΘ. מהו E[Y⁴]?",
      "choices": [
        "9r²/8",
        "3r²/4",
        "3r²",
        "r²/4"
      ],
      "answer": 0,
      "explanation": "בגלל אי־התלות: E[X⁴]E[cos⁴Θ]=3r²·3/8=9r²/8.",
      "links": [
        "gs_fourth",
        "cm_random-phase"
      ],
      "sources": [
        {
          "file": "Random Signals - Tutorial 08.pdf",
          "pages": [
            4
          ],
          "section": "תרגיל 2: אפנון בפאזה אקראית"
        }
      ],
      "origin": "direct"
    },
    {
      "id": "gs_absolute",
      "course": "signals",
      "unit": "gaussian-scalars",
      "title": "ערך מוחלט של גאוסי ממורכז",
      "type": "Formula",
      "topic": "טרנספורמציות ודוגמאות",
      "statement": "אם X~N(0,σ²), σ>0, אז |X| אינו גאוסי: הוא לא שלילי ולא קבוע. הממוצע שלו הוא σ√(2/π), ומכיוון שריבועו שווה ל־X² אפשר לחשב גם את שונותו.",
      "formula": "\\begin{gathered}\\mathbb E[|X|]=\\sigma\\sqrt{2/\\pi}\\\\\\operatorname{Var}(|X|)=\\sigma^2(1-2/\\pi)\\end{gathered}",
      "question": "אם X~N(0,σ²), σ>0, האם |X| גאוסי?",
      "choices": [
        "לא, הוא לא שלילי ולא מנוון",
        "כן, N(0,σ²)",
        "כן, N(σ,σ²)",
        "כן, משום שכפל קבוע שומר גאוסיות"
      ],
      "answer": 0,
      "explanation": "טרנספורמציית ערך מוחלט אינה אפינית. משתנה גאוסי לא מנוון מקבל גם ערכים שליליים.",
      "links": [
        "gs_second",
        "cm_absolute",
        "cm_sign"
      ],
      "sources": [
        {
          "file": "Random Signals - Tutorial 04.pdf",
          "pages": [
            5,
            6,
            7
          ],
          "section": "תרגיל 3: מדידת ערך מוחלט וסימן של גאוסי"
        }
      ],
      "origin": "derived"
    },
    {
      "id": "gs_nonlinear",
      "course": "signals",
      "unit": "gaussian-scalars",
      "title": "טרנספורמציה לא לינארית אינה משמרת גאוסיות בכלליות",
      "type": "Claim",
      "topic": "טרנספורמציות ודוגמאות",
      "statement": "סגירות גאוסית חלה על טרנספורמציות אפיניות דטרמיניסטיות. עבור X גאוסי ממורכז לא מנוון, X² ו־|X| אינם גאוסיים, ו־sign(X) הוא סימן בדיד שווה־הסתברות. יש לבדוק כל טרנספורמציה לא לינארית בנפרד.",
      "formula": "\\begin{gathered}X\\sim\\mathcal N(0,\\sigma^2),\\quad\\sigma>0\\\\P(\\operatorname{sign}X=1)=P(\\operatorname{sign}X=-1)=1/2\\end{gathered}",
      "question": "איזו טרנספורמציה משמרת גאוסיות לכל X גאוסי?",
      "choices": [
        "2X+1",
        "X²",
        "|X|",
        "sign(X)"
      ],
      "answer": 0,
      "explanation": "2X+1 אפינית ודטרמיניסטית. שלוש האחרות נותנות דוגמאות שאינן גאוסיות עבור X לא מנוון.",
      "links": [
        "gs_affine",
        "gs_absolute"
      ],
      "sources": [
        {
          "file": "Random Signals - Tutorial 03.pdf",
          "pages": [
            2,
            3
          ],
          "section": "טרנספורמציות, אי־תלות והתניה גאוסית"
        },
        {
          "file": "Random Signals - Tutorial 04.pdf",
          "pages": [
            5,
            6,
            7
          ],
          "section": "מדידות לא לינאריות של גאוסי"
        }
      ],
      "origin": "derived"
    },
    {
      "id": "gv_definition",
      "course": "signals",
      "unit": "gaussian-vectors",
      "title": "וקטור גאוסי: כל צירוף לינארי דטרמיניסטי",
      "type": "Definition",
      "topic": "הגדרה ופילוג",
      "statement": "וקטור ממשי X=(X₁,…,Xₙ)ᵀ הוא גאוסי אם לכל וקטור מקדמים דטרמיניסטי a, המשתנה aᵀX גאוסי, כולל האפשרות המנוונת. הדרישה היא לכל a; בדיקת הרכיבים בלבד אינה מספיקה. בנוסחה μ=E[X] ו־Σ=Cov(X).",
      "formula": "\\begin{gathered}\\forall a\\in\\mathbb R^n:\\\\a^{\\mathsf T}X\\sim\\mathcal N(a^{\\mathsf T}\\mu,a^{\\mathsf T}\\Sigma a)\\end{gathered}",
      "question": "מה צריך להראות כדי להוכיח שווקטור אקראי הוא גאוסי לפי ההגדרה?",
      "choices": [
        "כל צירוף לינארי עם מקדמים דטרמיניסטיים הוא גאוסי",
        "כל רכיב גאוסי בלבד",
        "כל זוג רכיבים חסר מתאם",
        "קיימת צפיפות משותפת"
      ],
      "answer": 0,
      "explanation": "זו ההגדרה בתרגול. היא כוללת גם צירופים בעלי שונות אפס.",
      "links": [
        "gs_density",
        "gs_degenerate"
      ],
      "sources": [
        {
          "file": "Random Signals - Tutorial 03.pdf",
          "pages": [
            1,
            2
          ],
          "section": "הגדרות ותכונות של וקטור גאוסי"
        }
      ],
      "origin": "direct"
    },
    {
      "id": "gv_joint",
      "course": "signals",
      "unit": "gaussian-vectors",
      "title": "גאוסיים במשותף לעומת גאוסיים כל אחד לחוד",
      "type": "Definition",
      "topic": "הגדרה ופילוג",
      "statement": "המשתנים X₁,…,Xₙ נקראים גאוסיים במשותף כאשר הווקטור המורכב מהם גאוסי. גאוסיות במשותף מבטיחה גאוסיות של כל רכיב, אך הכיוון ההפוך אינו נכון בכלליות.",
      "formula": "(X_1,\\ldots,X_n)^{\\mathsf T}\\sim\\mathcal N(\\mu,\\Sigma)\\ \\Longrightarrow\\ X_i\\sim\\mathcal N(\\mu_i,\\Sigma_{ii})",
      "question": "האם גאוסיות של כל רכיב בנפרד מבטיחה וקטור גאוסי?",
      "choices": [
        "לא, צריך גאוסיות במשותף",
        "כן, תמיד",
        "כן, אם התוחלות אפס",
        "כן, אם השונויות שוות"
      ],
      "answer": 0,
      "explanation": "פילוגים שוליים אינם קובעים את התלות המשותפת. דוגמת הסימן האקראי בתרגול מפריכה את ההסקה.",
      "links": [
        "gv_definition"
      ],
      "sources": [
        {
          "file": "Random Signals - Tutorial 03.pdf",
          "pages": [
            1,
            2
          ],
          "section": "הגדרות ותכונות של וקטור גאוסי"
        }
      ],
      "origin": "direct"
    },
    {
      "id": "gv_parameters",
      "course": "signals",
      "unit": "gaussian-vectors",
      "title": "תוחלת וקווריאנס של וקטור גאוסי",
      "type": "Definition",
      "topic": "הגדרה ופילוג",
      "statement": "לוקטור גאוסי ממשי, μ הוא וקטור התוחלות ו־Σ היא מטריצת הקווריאנס. היא סימטרית וחיובית למחצה. האלכסון מכיל שונויות; המטריצה E[XXᵀ] שווה לקווריאנס רק אם הווקטור ממורכז.",
      "formula": "\\begin{gathered}\\mu=\\mathbb E[X]\\\\\\Sigma=\\mathbb E[(X-\\mu)(X-\\mu)^{\\mathsf T}]\\succeq0\\\\\\mathbb E[XX^{\\mathsf T}]=\\Sigma+\\mu\\mu^{\\mathsf T}\\end{gathered}",
      "question": "מהו האיבר Σᵢᵢ במטריצת הקווריאנס?",
      "choices": [
        "Var(Xᵢ)",
        "E[Xᵢ]",
        "E[Xᵢ²] תמיד",
        "Cov(Xᵢ,Xⱼ) עבור i≠j"
      ],
      "answer": 0,
      "explanation": "איבר אלכסוני הוא שונות. מומנט שני כולל גם את ריבוע התוחלת.",
      "links": [
        "gv_definition"
      ],
      "sources": [
        {
          "file": "Random Signals - Tutorial 03.pdf",
          "pages": [
            1,
            2
          ],
          "section": "הגדרות ותכונות של וקטור גאוסי"
        }
      ],
      "origin": "direct"
    },
    {
      "id": "gv_characteristic",
      "course": "signals",
      "unit": "gaussian-vectors",
      "title": "פונקציה אופיינית וקטורית וקביעת הפילוג",
      "type": "Theorem",
      "topic": "הגדרה ופילוג",
      "statement": "וקטור ממשי הוא גאוסי אם ורק אם הפונקציה האופיינית שלו היא האקספוננט הנתון, עם μ ממשי ו־Σ סימטרית וחיובית למחצה. לכן תוחלת וקווריאנס קובעים את כל הפילוג בתוך משפחת הווקטורים הגאוסיים.",
      "formula": "\\begin{gathered}\\phi_X(\\nu)=\\mathbb E[e^{i\\nu^{\\mathsf T}X}]\\\\=\\exp\\!\\left(i\\nu^{\\mathsf T}\\mu-\\tfrac12\\nu^{\\mathsf T}\\Sigma\\nu\\right)\\end{gathered}",
      "question": "לשני וקטורים גאוסיים אותה תוחלת ואותה מטריצת קווריאנס. מה נכון?",
      "choices": [
        "יש להם אותו פילוג",
        "הם אותו משתנה בכל מימוש",
        "הם בהכרח בלתי תלויים",
        "הם בהכרח בעלי צפיפות"
      ],
      "answer": 0,
      "explanation": "הפונקציות האופייניות שוות ולכן הפילוגים שווים. זה אינו אומר שהווקטורים שווים כמעט בוודאות.",
      "links": [
        "gv_parameters",
        "gs_characteristic"
      ],
      "sources": [
        {
          "file": "Random Signals - Tutorial 03.pdf",
          "pages": [
            1,
            2
          ],
          "section": "הגדרות ותכונות של וקטור גאוסי"
        }
      ],
      "origin": "direct"
    },
    {
      "id": "gv_density",
      "course": "signals",
      "unit": "gaussian-vectors",
      "title": "צפיפות משותפת של וקטור גאוסי לא מנוון",
      "type": "Formula",
      "topic": "הגדרה ופילוג",
      "statement": "ל־X~N(μ,Σ) בממד n קיימת צפיפות רגילה במרחב המלא כאשר Σ חיובית ממש, ולכן הפיכה. הנוסחה משתמשת בדטרמיננטה ובהופכית של הקווריאנס, ובווקטור הממורכז x−μ.",
      "formula": "\\begin{gathered}\\Sigma\\succ0\\\\f_X(x)=\\frac{e^{-\\frac12(x-\\mu)^{\\mathsf T}\\Sigma^{-1}(x-\\mu)}}{(2\\pi)^{n/2}\\sqrt{\\det\\Sigma}}\\end{gathered}",
      "question": "מה נדרש כדי להשתמש בנוסחת הצפיפות הגאוסית עם Σ⁻¹?",
      "choices": [
        "Σ חיובית ממש",
        "כל רכיב גאוסי בנפרד",
        "Σ סינגולרית",
        "כל האיברים של Σ חיוביים"
      ],
      "answer": 0,
      "explanation": "מטריצת קווריאנס סימטרית וחיובית למחצה היא הפיכה בדיוק כאשר היא חיובית ממש.",
      "links": [
        "gv_characteristic"
      ],
      "sources": [
        {
          "file": "Random Signals - Tutorial 03.pdf",
          "pages": [
            1,
            2
          ],
          "section": "הגדרות ותכונות של וקטור גאוסי"
        }
      ],
      "origin": "direct"
    },
    {
      "id": "gv_singular",
      "course": "signals",
      "unit": "gaussian-vectors",
      "title": "גאוסי סינגולרי ותלות אפינית",
      "type": "Claim",
      "topic": "הגדרה ופילוג",
      "statement": "וקטור גאוסי יכול להיות בעל קווריאנס סינגולרי. אם a≠0 נמצא בגרעין Σ, אז aᵀ(X−μ)=0 כמעט בוודאות: הווקטור נתמך בתת־מרחב אפיני מממד נמוך יותר, ואין לו צפיפות ביחס לנפח במרחב המלא.",
      "formula": "\\begin{gathered}\\Sigma a=0,\\quad a\\ne0\\\\\\operatorname{Var}(a^{\\mathsf T}X)=a^{\\mathsf T}\\Sigma a=0\\\\a^{\\mathsf T}X=a^{\\mathsf T}\\mu\\quad\\text{a.s.}\\end{gathered}",
      "question": "אם Σ סינגולרית, מה בהכרח נכון?",
      "choices": [
        "קיים צירוף אפיני דטרמיניסטי בין הרכיבים כמעט בוודאות",
        "הווקטור אינו גאוסי",
        "כל הרכיבים קבועים",
        "כל הרכיבים בלתי תלויים"
      ],
      "answer": 0,
      "explanation": "יש כיוון בעל שונות אפס. רק הצירוף בכיוון הזה דטרמיניסטי; הרכיבים עצמם יכולים להיות אקראיים.",
      "links": [
        "gv_parameters",
        "gs_degenerate"
      ],
      "sources": [
        {
          "file": "Random Signals - Tutorial 03.pdf",
          "pages": [
            1,
            2
          ],
          "section": "הגדרות ותכונות של וקטור גאוסי"
        }
      ],
      "origin": "derived"
    },
    {
      "id": "gv_singular-example",
      "course": "signals",
      "unit": "gaussian-vectors",
      "title": "הדוגמה (Z,2Z): גאוסי ללא צפיפות דו־ממדית",
      "type": "Claim",
      "topic": "הגדרה ופילוג",
      "statement": "אם Z~N(0,1) ו־X=(Z,2Z)ᵀ, אז כל צירוף לינארי של רכיבי X הוא כפולה דטרמיניסטית של Z, ולכן X גאוסי. כל המימושים נמצאים על הישר x₂=2x₁.",
      "formula": "\\begin{gathered}\\Sigma=\\begin{pmatrix}1&2\\\\2&4\\end{pmatrix},\\quad\\det\\Sigma=0\\\\a^{\\mathsf T}X=(a_1+2a_2)Z\\end{gathered}",
      "question": "איזה תיאור נכון לווקטור (Z,2Z) כש־Z גאוסי סטנדרטי?",
      "choices": [
        "גאוסי עם קווריאנס סינגולרי",
        "אינו גאוסי כי הרכיבים תלויים",
        "גאוסי עם שני רכיבים בלתי תלויים",
        "בעל צפיפות חיובית בכל המישור"
      ],
      "answer": 0,
      "explanation": "תלות אינה סותרת גאוסיות במשותף. היא גורמת כאן לריכוז הפילוג על ישר.",
      "links": [
        "gv_definition",
        "gv_singular"
      ],
      "sources": [
        {
          "file": "Random Signals - Tutorial 03.pdf",
          "pages": [
            2
          ],
          "section": "דוגמה 1: וקטור גאוסי סינגולרי"
        }
      ],
      "origin": "direct"
    },
    {
      "id": "gv_marginals",
      "course": "signals",
      "unit": "gaussian-vectors",
      "title": "תת־וקטור ושוליים של וקטור גאוסי",
      "type": "Claim",
      "topic": "הגדרה ופילוג",
      "statement": "כל בחירה של רכיבים מתוך וקטור גאוסי נותנת וקטור גאוסי. את תוחלתו ואת הקווריאנס שלו מקבלים מבחירת אותם אינדקסים ב־μ וב־Σ. בפרט, צפיפות שולית מתקבלת ללא התניה.",
      "formula": "X_I\\sim\\mathcal N(\\mu_I,\\Sigma_{II})",
      "question": "בוחרים קבוצת אינדקסים I מתוך וקטור גאוסי X. מהו הקווריאנס של תת־הווקטור X_I?",
      "choices": [
        "תת־המטריצה Σ_II המתאימה לאינדקסים שנבחרו",
        "תמיד מטריצת היחידה",
        "תמיד משלים שור",
        "ההופכית של Σ"
      ],
      "answer": 0,
      "explanation": "שוליים משתמשים בתת־מטריצה של הקווריאנס. משלים שור מופיע בפילוג מותנה.",
      "links": [
        "gv_joint",
        "gv_parameters"
      ],
      "sources": [
        {
          "file": "Random Signals - Tutorial 03.pdf",
          "pages": [
            1,
            2
          ],
          "section": "הגדרות ותכונות של וקטור גאוסי"
        },
        {
          "file": "Random Signals - Tutorial 03.pdf",
          "pages": [
            2,
            3
          ],
          "section": "טרנספורמציות, אי־תלות והתניה גאוסית"
        }
      ],
      "origin": "derived"
    },
    {
      "id": "gv_independent-build",
      "course": "signals",
      "unit": "gaussian-vectors",
      "title": "משתנים גאוסיים בלתי תלויים יוצרים וקטור גאוסי",
      "type": "Theorem",
      "topic": "קווריאנס ואי־תלות",
      "statement": "אם הרכיבים גאוסיים ובלתי תלויים במשותף, הווקטור שלהם גאוסי ומטריצת הקווריאנס אלכסונית. אי־התלות היא הנחה מספיקה לבניית וקטור גאוסי, אך אינה תנאי הכרחי לגאוסיות.",
      "formula": "\\begin{gathered}X_i\\overset{\\mathrm{ind}}\\sim\\mathcal N(\\mu_i,\\sigma_i^2)\\\\X\\sim\\mathcal N\\!\\left(\\mu,\\operatorname{diag}(\\sigma_1^2,\\ldots,\\sigma_n^2)\\right)\\end{gathered}",
      "question": "מה מבטיח שווקטור של רכיבים גאוסיים הוא גאוסי במשותף?",
      "choices": [
        "אי־תלות משותפת של הרכיבים",
        "שוויון השונויות",
        "תוחלות אפס בלבד",
        "חוסר מתאם בלבד ללא הנחה נוספת"
      ],
      "answer": 0,
      "explanation": "מכפלת הפונקציות האופייניות היא פונקציה אופיינית של וקטור גאוסי עם קווריאנס אלכסוני.",
      "links": [
        "gv_joint",
        "gs_sum"
      ],
      "sources": [
        {
          "file": "Random Signals - Tutorial 03.pdf",
          "pages": [
            1,
            2
          ],
          "section": "הגדרות ותכונות של וקטור גאוסי"
        }
      ],
      "origin": "direct"
    },
    {
      "id": "gv_affine",
      "course": "signals",
      "unit": "gaussian-vectors",
      "title": "טרנספורמציה אפינית של וקטור גאוסי",
      "type": "Theorem",
      "topic": "טרנספורמציות",
      "statement": "אם X וקטור גאוסי ו־A,b דטרמיניסטיים מממדים מתאימים, אז Y=AX+b גאוסי. הנוסחה תקפה גם כאשר A מלבנית או מורידה דרגה, ואז Y עשוי להיות מנוון.",
      "formula": "\\begin{gathered}X\\sim\\mathcal N(\\mu,\\Sigma),\\quad Y=AX+b\\\\Y\\sim\\mathcal N(A\\mu+b,A\\Sigma A^{\\mathsf T})\\end{gathered}",
      "question": "מהו הקווריאנס של AX+b?",
      "choices": [
        "AΣAᵀ",
        "AΣ",
        "Σ+Aᵀb",
        "AΣA⁻¹ לכל A"
      ],
      "answer": 0,
      "explanation": "ההזזה אינה משנה קווריאנס. משני הצדדים כופלים ב־A ובשחלוף שלה, לא בהופכית.",
      "links": [
        "gv_definition",
        "gv_parameters"
      ],
      "sources": [
        {
          "file": "Random Signals - Tutorial 03.pdf",
          "pages": [
            2,
            3
          ],
          "section": "טרנספורמציות, אי־תלות והתניה גאוסית"
        }
      ],
      "origin": "direct"
    },
    {
      "id": "gv_linear-combination",
      "course": "signals",
      "unit": "gaussian-vectors",
      "title": "צירוף לינארי: ממוצע ושונות עם איברי מתאם",
      "type": "Formula",
      "topic": "טרנספורמציות",
      "statement": "ל־X וקטור גאוסי, כל aᵀX גאוסי עם תוחלת aᵀμ ושונות aᵀΣa. עבור שני רכיבים, השונות כוללת את איבר הקווריאנס; אין לחבר שונויות בלבד ללא הצדקה.",
      "formula": "\\begin{gathered}a^{\\mathsf T}X\\sim\\mathcal N(a^{\\mathsf T}\\mu,a^{\\mathsf T}\\Sigma a)\\\\\\operatorname{Var}(aX_1+bX_2)\\\\=a^2\\Sigma_{11}+b^2\\Sigma_{22}+2ab\\Sigma_{12}\\end{gathered}",
      "question": "לזוג גאוסי ממורכז עם Σ=[[3,1],[1,3]], מהי Var(X₁−X₂)?",
      "choices": [
        "4",
        "6",
        "8",
        "2"
      ],
      "answer": 0,
      "explanation": "השונות היא 3+3−2·1=4. סימן המקדמים קובע את סימן איבר הקווריאנס.",
      "links": [
        "gv_affine"
      ],
      "sources": [
        {
          "file": "Random Signals - Tutorial 03.pdf",
          "pages": [
            2,
            3
          ],
          "section": "טרנספורמציות, אי־תלות והתניה גאוסית"
        }
      ],
      "origin": "derived"
    },
    {
      "id": "gv_uncorrelated",
      "course": "signals",
      "unit": "gaussian-vectors",
      "title": "גאוסיות במשותף: חוסר מתאם שקול לאי־תלות",
      "type": "Theorem",
      "topic": "קווריאנס ואי־תלות",
      "statement": "לרכיבים של וקטור גאוסי ממשי, חוסר מתאם בין כל זוג רכיבים גורר אי־תלות משותפת. ההנחה שהווקטור גאוסי במשותף חיונית; גאוסיות של כל רכיב בלבד אינה מספיקה.",
      "formula": "\\begin{gathered}\\Sigma=\\operatorname{diag}(\\sigma_1^2,\\ldots,\\sigma_n^2)\\\\\\Longleftrightarrow\\\\\\phi_X(\\nu)=\\prod_{i=1}^n\\phi_{X_i}(\\nu_i)\\end{gathered}",
      "question": "ידוע ש־X ו־Y גאוסיים במשותף וחסרי מתאם. מה נובע?",
      "choices": [
        "הם בלתי תלויים",
        "הם שווים כמעט בוודאות",
        "אחד מהם קבוע",
        "אין מסקנה על אי־תלות"
      ],
      "answer": 0,
      "explanation": "בפילוג גאוסי משותף, קווריאנס אלכסוני מפרק את הפונקציה האופיינית למכפלת פונקציות אופייניות שוליות.",
      "links": [
        "gv_joint",
        "gv_characteristic"
      ],
      "sources": [
        {
          "file": "Random Signals - Tutorial 03.pdf",
          "pages": [
            2,
            3
          ],
          "section": "טרנספורמציות, אי־תלות והתניה גאוסית"
        }
      ],
      "origin": "direct"
    },
    {
      "id": "gv_block-independent",
      "course": "signals",
      "unit": "gaussian-vectors",
      "title": "אי־תלות בין בלוקים גאוסיים",
      "type": "Theorem",
      "topic": "קווריאנס ואי־תלות",
      "statement": "אם הווקטור המאוחד (U,V) גאוסי במשותף, אז U ו־V בלתי תלויים בדיוק כאשר כל מטריצת הקווריאנס המצטלבת מתאפסת. לא די בכך שכל בלוק בנפרד גאוסי.",
      "formula": "\\Sigma_{UV}=0\\ \\Longleftrightarrow\\ U\\perp V",
      "question": "מתי אפס קווריאנס מצטלב בין שני וקטורים מבטיח אי־תלות?",
      "choices": [
        "כאשר הווקטור המאוחד גאוסי",
        "כאשר כל בלוק גאוסי בנפרד בלבד",
        "כאשר הממדים שווים",
        "כאשר כל השונויות חיוביות"
      ],
      "answer": 0,
      "explanation": "צריך להפעיל את משפט אי־התלות על הפילוג המשותף של שני הבלוקים.",
      "links": [
        "gv_uncorrelated"
      ],
      "sources": [
        {
          "file": "Random Signals - Tutorial 03.pdf",
          "pages": [
            2,
            3
          ],
          "section": "טרנספורמציות, אי־תלות והתניה גאוסית"
        }
      ],
      "origin": "derived"
    },
    {
      "id": "gv_diagonalize",
      "course": "signals",
      "unit": "gaussian-vectors",
      "title": "לכסון הקווריאנס מפריד רכיבים גאוסיים",
      "type": "Theorem",
      "topic": "טרנספורמציות",
      "statement": "אם Σ=QΛQᵀ עם Q אורתוגונלית ו־Λ אלכסונית, אז Y=Qᵀ(X−μ) הוא וקטור גאוסי בעל רכיבים בלתי תלויים ושונויות הערכים העצמיים. ערכים עצמיים אפס נותנים רכיבים קבועים.",
      "formula": "\\begin{gathered}\\Sigma=Q\\Lambda Q^{\\mathsf T}\\\\Y=Q^{\\mathsf T}(X-\\mu)\\sim\\mathcal N(0,\\Lambda)\\end{gathered}",
      "question": "מה מתקבל מלכסון אורתוגונלי של הקווריאנס של וקטור גאוסי ממורכז?",
      "choices": [
        "רכיבים גאוסיים בלתי תלויים עם שונויות הערכים העצמיים",
        "רכיבים בעלי שונות 1 בהכרח",
        "רכיבים שווים זה לזה",
        "וקטור שאינו גאוסי"
      ],
      "answer": 0,
      "explanation": "סיבוב מאפס קווריאנסים. רק לאחר חלוקה נוספת בסטיות התקן מתקבל הלבנה.",
      "links": [
        "gv_affine",
        "gv_uncorrelated"
      ],
      "sources": [
        {
          "file": "Random Signals - Tutorial 03.pdf",
          "pages": [
            3
          ],
          "section": "טענה 5: לכסון והפרדת רכיבים"
        }
      ],
      "origin": "direct"
    },
    {
      "id": "gv_diagonal-example",
      "course": "signals",
      "unit": "gaussian-vectors",
      "title": "דוגמת התרגול: סכום והפרש בלתי תלויים",
      "type": "Formula",
      "topic": "טרנספורמציות",
      "statement": "ל־X ממורכז וגאוסי עם קווריאנס [[3,1],[1,3]], הסיבוב הנתון יוצר סכום והפרש מנורמלים. הרכיבים החדשים בלתי תלויים, אך אינם שניהם סטנדרטיים: שונויותיהם 4 ו־2.",
      "formula": "\\begin{gathered}Y=\\frac1{\\sqrt2}\\begin{pmatrix}1&1\\\\1&-1\\end{pmatrix}X\\\\\\operatorname{Cov}(Y)=\\begin{pmatrix}4&0\\\\0&2\\end{pmatrix}\\end{gathered}",
      "question": "ל־X גאוסי ממורכז עם Σ=[[3,1],[1,3]], נגדיר Y₁=(X₁+X₂)/√2 ו־Y₂=(X₁−X₂)/√2. מהן השונויות של Y₁ ו־Y₂, לפי הסדר?",
      "choices": [
        "4 ו־2",
        "1 ו־1",
        "3 ו־3",
        "2 ו־4"
      ],
      "answer": 0,
      "explanation": "לסכום המנורמל שונות (3+3+2)/2=4 ולהפרש שונות (3+3−2)/2=2.",
      "links": [
        "gv_diagonalize"
      ],
      "sources": [
        {
          "file": "Random Signals - Tutorial 03.pdf",
          "pages": [
            5
          ],
          "section": "תרגיל 2: מטריצה המפרידה רכיבים"
        }
      ],
      "origin": "direct"
    },
    {
      "id": "gv_whitening",
      "course": "signals",
      "unit": "gaussian-vectors",
      "title": "הלבנה של וקטור גאוסי לא מנוון",
      "type": "Formula",
      "topic": "טרנספורמציות",
      "statement": "אם Σ חיובית ממש, אפשר לסובב לצירים העצמיים ואז לחלק כל רכיב בשורש הערך העצמי שלו. מתקבל וקטור גאוסי סטנדרטי עם רכיבים בלתי תלויים. עבור וקטור שאינו גאוסי, קווריאנס יחידה מבטיח חוסר מתאם בלבד.",
      "formula": "\\begin{gathered}\\Sigma=Q\\Lambda Q^{\\mathsf T}\\succ0\\\\Z=\\Lambda^{-1/2}Q^{\\mathsf T}(X-\\mu)\\\\Z\\sim\\mathcal N(0,I)\\end{gathered}",
      "question": "מה צריך להוסיף ללכסון כדי לקבל שונות 1 בכל רכיב?",
      "choices": [
        "חלוקה בשורש הערך העצמי המתאים",
        "חלוקה בערך העצמי בריבוע",
        "חיבור וקטור התוחלות",
        "כפל כל הרכיבים באותו קבוע בהכרח"
      ],
      "answer": 0,
      "explanation": "רכיב בעל שונות λᵢ מחולק ב־√λᵢ. נדרשים ערכים עצמיים חיוביים כדי לחלק בכולם.",
      "links": [
        "gv_diagonalize",
        "gs_normalize"
      ],
      "sources": [
        {
          "file": "Random Signals - Tutorial 03.pdf",
          "pages": [
            3,
            5
          ],
          "section": "הרחבה ללכסון הקווריאנס"
        }
      ],
      "origin": "derived"
    },
    {
      "id": "gv_construct",
      "course": "signals",
      "unit": "gaussian-vectors",
      "title": "בניית וקטור גאוסי מתוחלת וקווריאנס",
      "type": "Claim",
      "topic": "טרנספורמציות",
      "statement": "לכל μ ו־Σ סימטרית וחיובית למחצה אפשר לבנות וקטור גאוסי X=μ+LZ, כאשר Z סטנדרטי ו־LLᵀ=Σ. Σ אינה חייבת להיות הפיכה; במקרה הסינגולרי L יכולה להיות מורידת דרגה.",
      "formula": "\\begin{gathered}Z\\sim\\mathcal N(0,I),\\quad LL^{\\mathsf T}=\\Sigma\\\\X=\\mu+LZ\\sim\\mathcal N(\\mu,\\Sigma)\\end{gathered}",
      "question": "איזו מטריצה יכולה לשמש קווריאנס של וקטור גאוסי ממשי?",
      "choices": [
        "כל מטריצה סימטרית וחיובית למחצה",
        "רק מטריצת היחידה",
        "רק מטריצה הפיכה",
        "כל מטריצה בעלת אלכסון חיובי"
      ],
      "answer": 0,
      "explanation": "סימטריה וחיוביות למחצה הן התנאים. אלכסון חיובי לבדו אינו מבטיח אותן.",
      "links": [
        "gv_affine",
        "gv_parameters",
        "gv_independent-build"
      ],
      "sources": [
        {
          "file": "Random Signals - Tutorial 03.pdf",
          "pages": [
            1,
            2
          ],
          "section": "הגדרות ותכונות של וקטור גאוסי"
        },
        {
          "file": "Random Signals - Tutorial 03.pdf",
          "pages": [
            2,
            3
          ],
          "section": "טרנספורמציות, אי־תלות והתניה גאוסית"
        }
      ],
      "origin": "derived"
    },
    {
      "id": "gv_sum",
      "course": "signals",
      "unit": "gaussian-vectors",
      "title": "סכום וקטורים גאוסיים בלתי תלויים",
      "type": "Theorem",
      "topic": "טרנספורמציות",
      "statement": "אם U ו־V וקטורים גאוסיים מאותו ממד ובלתי תלויים זה בזה, סכומם גאוסי. התוחלות והקווריאנסים מתחברים. ללא אי־תלות או גאוסיות משותפת של האיחוד, גאוסיות נפרדת של הווקטורים אינה מספיקה.",
      "formula": "\\begin{gathered}U\\perp V\\\\U+V\\sim\\mathcal N(\\mu_U+\\mu_V,\\Sigma_U+\\Sigma_V)\\end{gathered}",
      "question": "לשני וקטורים גאוסיים בלתי תלויים, מהו קווריאנס הסכום?",
      "choices": [
        "Σᵤ+Σᵥ",
        "ΣᵤΣᵥ",
        "Σᵤ−Σᵥ",
        "תמיד I"
      ],
      "answer": 0,
      "explanation": "בגלל אי־התלות הקווריאנסים המצטלבים אפס, והאיחוד גאוסי כך שגם הסכום גאוסי.",
      "links": [
        "gv_affine",
        "gv_independent-build"
      ],
      "sources": [
        {
          "file": "Random Signals - Tutorial 03.pdf",
          "pages": [
            1,
            2
          ],
          "section": "הגדרות ותכונות של וקטור גאוסי"
        },
        {
          "file": "Random Signals - Tutorial 03.pdf",
          "pages": [
            2,
            3
          ],
          "section": "טרנספורמציות, אי־תלות והתניה גאוסית"
        }
      ],
      "origin": "derived"
    },
    {
      "id": "gv_conditional",
      "course": "signals",
      "unit": "gaussian-vectors",
      "title": "פילוג מותנה של בלוק בווקטור גאוסי",
      "type": "Theorem",
      "topic": "התניה ומומנטים",
      "statement": "נניח (U,V) גאוסי במשותף ו־Σᵥᵥ הפיכה. גם U בהינתן V=v גאוסי, עם ממוצע אפיני בתצפית וקווריאנס שהוא משלים שור. הקווריאנס המותנה אינו תלוי בערך v ויכול להיות סינגולרי.",
      "formula": "\\begin{gathered}U\\mid V=v\\sim\\mathcal N(m(v),C)\\\\m(v)=\\mu_U+\\Sigma_{UV}\\Sigma_{VV}^{-1}(v-\\mu_V)\\\\C=\\Sigma_{UU}-\\Sigma_{UV}\\Sigma_{VV}^{-1}\\Sigma_{VU}\\end{gathered}",
      "question": "מה נכון לקווריאנס המותנה של בלוק גאוסי בהינתן בלוק אחר?",
      "choices": [
        "אינו תלוי בערך התצפית",
        "שווה תמיד לקווריאנס השולי",
        "הפיך תמיד",
        "מחושב רק מחלוקת צפיפויות שוליות"
      ],
      "answer": 0,
      "explanation": "משלים שור תלוי במטריצות הקווריאנס, אך לא במימוש v. נדרשת הפיכות בלוק התצפית.",
      "links": [
        "gv_parameters",
        "cm_gaussian-vector"
      ],
      "sources": [
        {
          "file": "Random Signals - Tutorial 03.pdf",
          "pages": [
            3
          ],
          "section": "טענה 7: פילוג מותנה של בלוקים גאוסיים"
        }
      ],
      "origin": "direct"
    },
    {
      "id": "gv_residual",
      "course": "signals",
      "unit": "gaussian-vectors",
      "title": "השגיאה הגאוסית בלתי תלויה במדידות",
      "type": "Claim",
      "topic": "התניה ומומנטים",
      "statement": "במודל גאוסי במשותף, השארית e=U−E[U|V] היא גאוסית, ממורכזת ובלתי תלויה בווקטור המדידות V. זו מסקנה חזקה מניצבות בלבד, ונובעת מכך שהמשערך אפיני ושאריתו חסרת מתאם עם המדידות.",
      "formula": "\\begin{gathered}e=U-\\mathbb E[U\\mid V]\\\\\\mathbb E[e]=0,\\quad\\operatorname{Cov}(e,V)=0\\\\e\\perp V,\\quad\\operatorname{Cov}(e)=C\\end{gathered}",
      "question": "מה מאפשר להסיק אי־תלות בין שגיאת MMSE למדידות במקרה הגאוסי?",
      "choices": [
        "השארית והמדידות גאוסיות במשותף וחסרות מתאם",
        "אפס תוחלת של השארית בלבד",
        "כל שגיאת MMSE בלתי תלויה במדידות",
        "שונות חיובית של המדידות בלבד"
      ],
      "answer": 0,
      "explanation": "ניצבות קיימת גם במודלים שאינם גאוסיים. אי־התלות דורשת כאן את הגאוסיות במשותף.",
      "links": [
        "gv_conditional",
        "gv_block-independent",
        "cm_orthogonality"
      ],
      "sources": [
        {
          "file": "Random Signals - Tutorial 03.pdf",
          "pages": [
            3
          ],
          "section": "התניה גאוסית"
        },
        {
          "file": "Random Signals - Tutorial 04.pdf",
          "pages": [
            1,
            2
          ],
          "section": "עקרון הניצבות"
        }
      ],
      "origin": "derived"
    },
    {
      "id": "gv_conditional-pair",
      "course": "signals",
      "unit": "gaussian-vectors",
      "title": "זוג גאוסי: פירוק באמצעות מקדם המתאם",
      "type": "Formula",
      "topic": "התניה ומומנטים",
      "statement": "לזוג גאוסי במשותף בעל שונויות חיוביות, התוחלת המותנית ב־Y=y משתנה לינארית עם y, והשונות היא σₓ²(1−ρ²). כאשר |ρ|=1 הפילוג המותנה מנוון; כאשר ρ=0 הפילוג המותנה שווה לשולי.",
      "formula": "\\begin{gathered}\\rho=\\frac{\\operatorname{Cov}(X,Y)}{\\sigma_X\\sigma_Y}\\\\m(y)=\\mu_X+\\rho\\frac{\\sigma_X}{\\sigma_Y}(y-\\mu_Y)\\\\v=\\sigma_X^2(1-\\rho^2)\\\\X\\mid Y=y\\sim\\mathcal N(m(y),v)\\end{gathered}",
      "question": "אם ρ=1/2 ו־Var(X)=4, מהי Var(X|Y) לזוג גאוסי במשותף?",
      "choices": [
        "3",
        "4",
        "1",
        "2"
      ],
      "answer": 0,
      "explanation": "מחשבים 4·(1−1/4)=3. הערך אינו תלוי בתצפית y.",
      "links": [
        "gv_conditional",
        "cm_gaussian-scalar"
      ],
      "sources": [
        {
          "file": "Random Signals - Tutorial 03.pdf",
          "pages": [
            3
          ],
          "section": "טענה 6: התניה בזוג גאוסי"
        }
      ],
      "origin": "direct"
    },
    {
      "id": "gv_fourth",
      "course": "signals",
      "unit": "gaussian-vectors",
      "title": "מומנט רביעי משותף: סכום של שלושה זיווגים",
      "type": "Formula",
      "topic": "התניה ומומנטים",
      "statement": "לארבעה משתנים גאוסיים במשותף וממורכזים, תוחלת המכפלה מתפרקת לסכום של שלוש מכפלות קווריאנס, אחת לכל זיווג. האינדקסים יכולים לחזור; התוחלות חייבות להיות אפס בנוסחה הזו.",
      "formula": "\\begin{aligned}\\mathbb E[X_1X_2X_3X_4]&=\\Sigma_{12}\\Sigma_{34}\\\\&\\quad+\\Sigma_{13}\\Sigma_{24}\\\\&\\quad+\\Sigma_{14}\\Sigma_{23}\\end{aligned}",
      "question": "כמה איברי זיווג יש בנוסחת המומנט הרביעי של ארבעה גאוסיים ממורכזים במשותף?",
      "choices": [
        "3",
        "2",
        "4",
        "6"
      ],
      "answer": 0,
      "explanation": "יש שלוש חלוקות לזוגות: 12|34, 13|24, ו־14|23.",
      "links": [
        "gv_characteristic",
        "gs_fourth"
      ],
      "sources": [
        {
          "file": "Random Signals - Tutorial 03.pdf",
          "pages": [
            1
          ],
          "section": "תכונת המומנט הרביעי של וקטור גאוסי"
        }
      ],
      "origin": "direct"
    },
    {
      "id": "gv_squared-covariance",
      "course": "signals",
      "unit": "gaussian-vectors",
      "title": "תוחלת וקווריאנס של ריבועי זוג גאוסי",
      "type": "Formula",
      "topic": "התניה ומומנטים",
      "statement": "ל־X,Y גאוסיים במשותף וממורכזים, מסמנים vₓ=Var(X), vᵧ=Var(Y), c=Cov(X,Y). הצבת X,X,Y,Y בנוסחת הזיווגים נותנת את E[X²Y²], ומכאן את קווריאנס הריבועים. אין צורך באי־תלות.",
      "formula": "\\begin{gathered}\\mathbb E[X^2Y^2]=v_Xv_Y+2c^2\\\\\\operatorname{Cov}(X^2,Y^2)=2c^2\\end{gathered}",
      "question": "לזוג גאוסי ממורכז עם שונויות 2 ו־3 וקווריאנס 1, מהו E[X²Y²]?",
      "choices": [
        "8",
        "6",
        "7",
        "12"
      ],
      "answer": 0,
      "explanation": "הזיווג XX|YY נותן 2·3, ושני הזיווגים XY|XY נותנים עוד 2·1²: סך הכול 8.",
      "links": [
        "gv_fourth"
      ],
      "sources": [
        {
          "file": "Random Signals - Tutorial 03.pdf",
          "pages": [
            1
          ],
          "section": "הצבת אינדקסים חוזרים בתכונת המומנט הרביעי"
        }
      ],
      "origin": "derived"
    },
    {
      "id": "gv_random-sign-counterexample",
      "course": "signals",
      "unit": "gaussian-vectors",
      "title": "דוגמת נגד: שוליים גאוסיים וקווריאנס יחידה",
      "type": "Claim",
      "topic": "קווריאנס ואי־תלות",
      "statement": "יהיו X~N(0,1), B=±1 שווה־הסתברות ובלתי תלוי בו, ו־Y=BX. אז X,Y גאוסיים וחסרי מתאם, אבל |X|=|Y| ולכן הם תלויים. הזוג אינו גאוסי: X+Y מתאפס בהסתברות ½, וביתר הזמן שווה ל־2X.",
      "formula": "\\begin{gathered}\\operatorname{Cov}\\begin{pmatrix}X\\\\Y\\end{pmatrix}=I_2,\\quad |X|=|Y|\\\\P(X+Y=0)=\\tfrac12,\\quad\\operatorname{Var}(X+Y)=2\\end{gathered}",
      "question": "יהיו X~N(0,1), B=±1 שווה־הסתברות ובלתי תלוי ב־X, ו־Y=BX. מה שולל גאוסיות במשותף של X ו־Y?",
      "choices": [
        "ל־X+Y מסה בנקודה 0 ושונות חיובית",
        "כל אחד מהמשתנים גאוסי",
        "הקווריאנס ביניהם אפס",
        "התוחלות שוות אפס"
      ],
      "answer": 0,
      "explanation": "גאוסי לא מנוון אינו בעל מסה בנקודה; גאוסי מנוון היה בעל שונות אפס. הסכום אינו אף אחד מהם.",
      "links": [
        "gv_definition",
        "gv_joint",
        "gs_random-sign",
        "cm_sign-flip"
      ],
      "sources": [
        {
          "file": "Random Signals - Tutorial 03.pdf",
          "pages": [
            4,
            5
          ],
          "section": "תרגיל 1: שוליים גאוסיים ללא גאוסיות משותפת"
        }
      ],
      "origin": "direct"
    },
    {
      "id": "gv_redundant",
      "course": "signals",
      "unit": "gaussian-vectors",
      "title": "מדידות מיותרות בווקטור גאוסי",
      "type": "Claim",
      "topic": "התניה ומומנטים",
      "statement": "בדוגמת תרגול 05, הווקטור (X,Y₁,Y₂,Y₃) גאוסי ממורכז, Var(X)=1 ו־Cov(Y,X)=(1,1,2)ᵀ. קווריאנס המדידות סינגולרי ומתקיים Y₃=Y₁+Y₂ כמעט בוודאות. אפשר להסיר את המדידה השלישית לפני השערוך.",
      "formula": "\\begin{gathered}\\Sigma_Y=\\begin{pmatrix}2&2&4\\\\2&3&5\\\\4&5&9\\end{pmatrix}\\\\Y_3=Y_1+Y_2\\quad\\text{a.s.}\\\\\\mathbb E[X\\mid Y]=Y_1/2,\\quad\\operatorname{Var}(X\\mid Y)=1/2\\end{gathered}",
      "question": "במודל גאוסי מתקיים Y₃=Y₁+Y₂ כמעט בוודאות. למה מותר להסיר את Y₃ משערוך X כש־Y₁ ו־Y₂ עדיין נתונים?",
      "choices": [
        "הוא סכום של שתי המדידות האחרות כמעט בוודאות",
        "הוא בהכרח בלתי תלוי ב־X",
        "כל רכיב שלישי בווקטור גאוסי מיותר",
        "כל מדידה שקווריאנסה חיובי מיותרת"
      ],
      "answer": 0,
      "explanation": "Y₃ ניתן לשחזור מן המדידות האחרות, ולכן אינו מוסיף מידע בהינתן שתיהן. בפני עצמו הוא עשוי להיות שימושי.",
      "links": [
        "gv_singular",
        "gv_conditional",
        "cm_redundant"
      ],
      "sources": [
        {
          "file": "Random Signals - Tutorial 05.pdf",
          "pages": [
            2,
            3,
            4
          ],
          "section": "תרגיל 1: מדידות בעלות קווריאנס סינגולרי"
        }
      ],
      "origin": "direct"
    },
    {
      "id": "gv_process",
      "course": "signals",
      "unit": "gaussian-vectors",
      "title": "תהליך גאוסי: כל וקטור דגימות גאוסי במשותף",
      "type": "Definition",
      "topic": "יישומים באותות",
      "statement": "תהליך נקרא גאוסי אם לכל מספר סופי של זמנים, וקטור הדגימות באותם זמנים גאוסי. לא מספיק להראות ש־Xₜ גאוסי לכל t בנפרד, וגם בדיקה של זמן יחיד אינה מוכיחה גאוסיות של התהליך.",
      "formula": "\\begin{gathered}\\forall k,\\ t_1<\\cdots<t_k:\\\\(X_{t_1},\\ldots,X_{t_k})^{\\mathsf T}\\sim\\mathcal N(\\mu_{\\boldsymbol t},\\Sigma_{\\boldsymbol t})\\end{gathered}",
      "question": "מה נדרש להוכחת גאוסיות של תהליך?",
      "choices": [
        "גאוסיות משותפת של כל וקטור דגימות סופי",
        "גאוסיות בכל זמן בנפרד בלבד",
        "סטציונריות במובן הרחב",
        "אוטוקורלציה אקספוננציאלית"
      ],
      "answer": 0,
      "explanation": "ההגדרה היא של כל הפילוגים הסופיים במשותף, ולא של השוליים החד־ממדיים בלבד.",
      "links": [
        "gv_definition",
        "gv_joint"
      ],
      "sources": [
        {
          "file": "Random Signals - Tutorial 08.pdf",
          "pages": [
            2,
            5
          ],
          "section": "הגדרת תהליך גאוסי והערה על הוכחה לכל וקטור זמנים"
        }
      ],
      "origin": "direct"
    },
    {
      "id": "gv_linear-system",
      "course": "signals",
      "unit": "gaussian-vectors",
      "title": "מערכת לינארית דטרמיניסטית משמרת תהליך גאוסי",
      "type": "Theorem",
      "topic": "יישומים באותות",
      "statement": "דגימות מוצא שהן צירופים לינאריים דטרמיניסטיים של דגימות תהליך גאוסי יוצרות וקטור גאוסי. הדבר מתרחב לאינטגרל לינארי כאשר הוא מוגדר וקיים כראוי, למשל כגבול בממוצע ריבועי. אין צורך שהמערכת תהיה קבועה בזמן.",
      "formula": "\\begin{gathered}Y_t=\\sum_j a_j(t)X_{s_j}\\\\Y_t=\\int X_s h_t(s)\\,ds\\end{gathered}",
      "question": "האם מערכת לינארית התלויה בזמן יכולה לשמר תהליך גאוסי?",
      "choices": [
        "כן, אם המקדמים דטרמיניסטיים והמוצא מוגדר היטב",
        "לא, חייבים מערכת קבועה בזמן",
        "לא, חייבים רכיבי כניסה בלתי תלויים",
        "רק אם תוחלת הכניסה אפס"
      ],
      "answer": 0,
      "explanation": "הסגירות נובעת מלינאריות דטרמיניסטית וגאוסיות משותפת, ולא מסטציונריות או מקביעות בזמן.",
      "links": [
        "gv_affine",
        "gv_process"
      ],
      "sources": [
        {
          "file": "Random Signals - Tutorial 08.pdf",
          "pages": [
            2,
            3
          ],
          "section": "תהליך גאוסי ומעבר במערכת לינארית"
        }
      ],
      "origin": "direct"
    },
    {
      "id": "gv_wss",
      "course": "signals",
      "unit": "gaussian-vectors",
      "title": "בתהליך גאוסי: סטציונריות רחבה גוררת חזקה",
      "type": "Theorem",
      "topic": "יישומים באותות",
      "statement": "תהליך גאוסי שהוא סטציונרי במובן הרחב הוא גם סטציונרי במובן החזק. הזזה משותפת של כל הזמנים שומרת על וקטור התוחלות ומטריצת הקווריאנס של כל וקטור דגימות, ובגאוסיות הם קובעים את הפילוג כולו.",
      "formula": "\\begin{gathered}\\mathbb E[X_t]=\\mu,\\quad\\operatorname{Cov}(X_t,X_s)=C(t-s)\\\\(X_{t_1+h},\\ldots,X_{t_k+h})\\overset d=(X_{t_1},\\ldots,X_{t_k})\\end{gathered}",
      "question": "למה סטציונריות רחבה מספיקה לסטציונריות חזקה בתהליך גאוסי?",
      "choices": [
        "התוחלת והקווריאנס קובעים כל פילוג סופי",
        "כי כל תהליך רחב הוא חזק",
        "כי דגימות גאוסיות תמיד בלתי תלויות",
        "כי כל התוחלות חייבות להיות אפס"
      ],
      "answer": 0,
      "explanation": "וקטורי הדגימות לפני ואחרי ההזזה גאוסיים עם אותם פרמטרים, ולכן בעלי אותו פילוג.",
      "links": [
        "gv_process",
        "gv_characteristic"
      ],
      "sources": [
        {
          "file": "Random Signals - Tutorial 08.pdf",
          "pages": [
            2
          ],
          "section": "טענה 3: תהליך גאוסי סטציונרי במובן הרחב"
        }
      ],
      "origin": "direct"
    },
    {
      "id": "gv_quadrature",
      "course": "signals",
      "unit": "gaussian-vectors",
      "title": "שני אותות ופאזה: הוכחת גאוסיות של כל וקטור דגימות",
      "type": "Claim",
      "topic": "יישומים באותות",
      "statement": "יהיו X,W תהליכים גאוסיים ממורכזים, בלתי תלויים ובעלי אותה אוטוקורלציה R של תהליך סטציונרי במובן הרחב. Θ אחידה ובלתי תלויה בשניהם. עבור Vₜ=Xₜcos(ωt+Θ)+Wₜsin(ωt+Θ), כל וקטור דגימות גאוסי בהינתן Θ, עם פרמטרים שאינם תלויים בה. לכן גם בלי ההתניה כל וקטור דגימות גאוסי.",
      "formula": "\\begin{gathered}\\mathbb E[V_{t_i}\\mid\\Theta]=0\\\\\\operatorname{Cov}(V_{t_i},V_{t_j}\\mid\\Theta)\\\\=R(t_j-t_i)\\cos(\\omega(t_i-t_j))\\end{gathered}",
      "question": "מה מאפשר להסיר את ההתניה בפאזה ולהסיק שכל וקטור דגימות נשאר גאוסי?",
      "choices": [
        "הפילוג הגאוסי המותנה כולו אינו תלוי בפאזה",
        "כל תערובת של גאוסיים היא גאוסית",
        "גאוסיות של דגימה בודדת מספיקה",
        "השונויות של X ושל W חייבות להיות אפס"
      ],
      "answer": 0,
      "explanation": "מראים תוחלת וקווריאנס מותנים קבועים לכל וקטור זמנים. רק גאוסיות של כל Vₜ בנפרד לא הייתה מספיקה.",
      "links": [
        "gv_process",
        "gv_conditional",
        "cm_quadrature",
        "gs_random-phase"
      ],
      "sources": [
        {
          "file": "Random Signals - Tutorial 08.pdf",
          "pages": [
            4,
            5,
            6,
            7,
            8
          ],
          "section": "תרגיל 2, סעיף 3 והשלמה בכתב יד לווקטורי דגימות"
        }
      ],
      "origin": "derived"
    }
  ]
};
window.SIGNAL_UNITS={'conditional-moments':'תוחלת ושונות מותנות',...window.GAUSSIAN_PACK.units};
window.signalsUnitFor = filter => filter==='all'?'':window.SIGNAL_UNITS[filter]?filter:'conditional-moments';
window.addGaussianContent = function(data) {
  const pack=window.GAUSSIAN_PACK;
  if((data.contentPacks?.[pack.id]||0)>=pack.version)return data;
  let course=data.courses.find(c=>c.id===pack.courseId);
  if(!course){course={id:pack.courseId,name:pack.courseName,demo:false};data.courses.push(course);}
  course.demo=false;
  const existing=new Set(data.items.map(i=>i.id));
  for(const item of pack.items)if(!existing.has(item.id))data.items.push(structuredClone(item));
  // A referenced prerequisite may have been intentionally removed on this device.
  const ids=new Set(data.items.map(i=>i.id));
  for(const item of data.items)if(item.id.startsWith('gs_')||item.id.startsWith('gv_'))item.links=item.links.filter(id=>ids.has(id));
  data.contentPacks={...(data.contentPacks||{}),[pack.id]:pack.version};
  return data;
};
