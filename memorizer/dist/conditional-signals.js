/* תוחלת ושונות מותנות — חבילת לימוד מבוססת על התרגולים שצורפו. */
window.CONDITIONAL_PACK = {
  "id": "conditional-moments",
  "version": 3,
  "courseId": "signals",
  "courseName": "אותות אקראיים",
  "items": [
    {
      "id": "cm_law-discrete",
      "course": "signals",
      "unit": "conditional-moments",
      "title": "התפלגות מותנית: התניה בערך בדיד",
      "type": "Definition",
      "topic": "הסתברות ופילוגים מותנים",
      "statement": "עבור X ו־Y בדידים וכאשר ההסתברות לערך y של Y חיובית, ההתפלגות המותנית מתקבלת מהפילוג המשותף באמצעות חלוקה בהסתברות התנאי. בנוסחת בייס אפשר לפרק את המונה למכפלת הסבירות באפריורי.",
      "formula": "P(X=x\\mid Y=y)=\\frac{P(X=x,Y=y)}{P(Y=y)}=\\frac{P(Y=y\\mid X=x)P(X=x)}{P(Y=y)}",
      "question": "באיזו הסתברות מחלקים כדי לחשב את ההסתברות המותנית של X בהינתן Y=y?",
      "choices": [
        "בהסתברות של X=x",
        "בהסתברות של Y=y",
        "בהסתברות המשותפת",
        "לא מחלקים: הפילוג המשותף הוא הפילוג המותנה"
      ],
      "answer": 1,
      "explanation": "מנרמלים בהסתברות התנאי. סכום ההסתברויות המותנות על כל ערכי X צריך להיות 1.",
      "links": [],
      "sources": [
        {
          "file": "Random Signals - Tutorial 02.pdf",
          "pages": [
            1,
            2
          ],
          "section": "סעיף 2: פילוגים מותנים ותוחלת מותנית"
        }
      ],
      "origin": "direct"
    },
    {
      "id": "cm_law-continuous",
      "course": "signals",
      "unit": "conditional-moments",
      "title": "צפיפות מותנית והתניה במשתנה רציף",
      "type": "Definition",
      "topic": "הסתברות ופילוגים מותנים",
      "statement": "אם קיימת צפיפות משותפת ו־f_Y(y)>0, הצפיפות המותנית היא היחס בין הצפיפות המשותפת לצפיפות השולית. ברציף אין לחלק ב־P(Y=y), השווה לאפס; הנוסחה מוגדרת כמעט בכל מקום ביחס לפילוג Y.",
      "formula": "f_{X\\mid Y}(x\\mid y)=\\frac{f_{X,Y}(x,y)}{f_Y(y)},\\quad f_Y(y)>0",
      "question": "מדוע אי אפשר לחשב צפיפות מותנית ברציף באמצעות חלוקה ב־P(Y=y)?",
      "choices": [
        "כי תוחלת מותנית קיימת רק בבדיד",
        "כי X ו־Y חייבים להיות בלתי תלויים",
        "כי צפיפות שולית תמיד שווה ל־1",
        "כי לאירוע נקודתי של משתנה רציף יש הסתברות אפס"
      ],
      "answer": 3,
      "explanation": "משתמשים בצפיפויות, או בהגדרה באמצעות גבול של התניה בקטע קטן, ולא ביחס הסתברויות של אירוע נקודתי.",
      "links": [],
      "sources": [
        {
          "file": "Random Signals - Tutorial 02.pdf",
          "pages": [
            2
          ],
          "section": "סעיף 2: פילוגים מותנים ותוחלת מותנית"
        }
      ],
      "origin": "direct"
    },
    {
      "id": "cm_conditional-cdf",
      "course": "signals",
      "unit": "conditional-moments",
      "title": "פונקציית התפלגות מותנית",
      "type": "Definition",
      "topic": "הסתברות ופילוגים מותנים",
      "statement": "פונקציית ההתפלגות המותנית היא הסתברות האי־שוויון X≤x בהינתן Y=y. עבור Y בדיד בעל הסתברות חיובית לערך y, מחשבים יחס הסתברויות. אם ההתפלגות המותנית רציפה בהחלט, נגזרתה לפי x היא הצפיפות המותנית.",
      "formula": "F_{X\\mid Y}(x\\mid y)=P(X\\leq x\\mid Y=y),\\qquad f_{X\\mid Y}(x\\mid y)=\\frac{\\partial}{\\partial x}F_{X\\mid Y}(x\\mid y)",
      "question": "לפי איזה משתנה גוזרים את פונקציית ההתפלגות המותנית כדי לקבל צפיפות מותנית, כשהיא קיימת?",
      "choices": [
        "לפי y בלבד",
        "לפי פרמטר הרעש",
        "לפי x, תוך התייחסות ל־y כקבוע",
        "לפי שני המשתנים יחד בהכרח"
      ],
      "answer": 2,
      "explanation": "x הוא סף ההתפלגות של המשתנה המשוערך. y מציין את התצפית שבה מותנית ההתפלגות.",
      "links": [
        "cm_law-discrete",
        "cm_law-continuous"
      ],
      "sources": [
        {
          "file": "Random Signals - Tutorial 02.pdf",
          "pages": [
            1,
            2
          ],
          "section": "הגדרות 2–3"
        }
      ],
      "origin": "direct"
    },
    {
      "id": "cm_bayes-mixed",
      "course": "signals",
      "unit": "conditional-moments",
      "title": "בייס: אות בדיד ותצפית רציפה",
      "type": "Formula",
      "topic": "הסתברות ופילוגים מותנים",
      "statement": "כאשר X בדיד ו־Y רציף, משקל האות לאחר התצפית פרופורציוני למכפלת ההסתברות האפריורית בצפיפות התצפית בהינתן האות. המכנה הוא סכום המשקלים; נדרש שיהיה חיובי.",
      "formula": "P(X=x\\mid Y=y)=\\frac{f_{Y\\mid X}(y\\mid x)P(X=x)}{\\sum_u f_{Y\\mid X}(y\\mid u)P(X=u)}",
      "question": "אות בדיד נמדד עם רעש רציף. מה מחשבים במכנה של נוסחת בייס?",
      "choices": [
        "סכום צפיפויות המדידה המשוקללות בהסתברויות האפריוריות",
        "רק את צפיפות הרעש בנקודה אפס",
        "רק את ההסתברות האפריורית של הערך שנבדק",
        "מכפלת כל הצפיפויות המותנות"
      ],
      "answer": 0,
      "explanation": "הצפיפות השולית של התצפית היא תערובת של צפיפויות מותנות, עם משקלי האפריורי.",
      "links": [
        "cm_law-discrete",
        "cm_law-continuous"
      ],
      "sources": [
        {
          "file": "Random Signals - Tutorial 02.pdf",
          "pages": [
            2
          ],
          "section": "חוק בייס, מקרה 3"
        }
      ],
      "origin": "direct"
    },
    {
      "id": "cm_bayes-event",
      "course": "signals",
      "unit": "conditional-moments",
      "title": "בייס: אות רציף ותצפית בדידה",
      "type": "Formula",
      "topic": "הסתברות ופילוגים מותנים",
      "statement": "כאשר X רציף ו־Y בדיד, למשל מדידה שעברה כימות, הצפיפות לאחר המדידה מתקבלת מכפל צפיפות האות בהסתברות המדידה בהינתן האות, וחלוקה בהסתברות המדידה.",
      "formula": "f_{X\\mid Y}(x\\mid y)=\\frac{P(Y=y\\mid X=x)f_X(x)}{P(Y=y)},\\quad P(Y=y)>0",
      "question": "X רציף אך המדידה Y מציינת רק אם האות עבר סף. איזה תיאור נכון?",
      "choices": [
        "ל־X בהינתן Y תמיד יש התפלגות בדידה",
        "נדרשת צפיפות משותפת רגילה של X ושל Y",
        "ייתכן של־X בהינתן Y יש צפיפות, אף ש־Y בדיד",
        "אי אפשר להתנות במדידת סף"
      ],
      "answer": 2,
      "explanation": "סוג המשתנה המתנה אינו קובע אם המשתנה שאותו משערכים רציף או בדיד.",
      "links": [
        "cm_law-continuous",
        "cm_law-discrete"
      ],
      "sources": [
        {
          "file": "Random Signals - Tutorial 02.pdf",
          "pages": [
            2
          ],
          "section": "חוק בייס, מקרה 4"
        }
      ],
      "origin": "direct"
    },
    {
      "id": "cm_mean-rv",
      "course": "signals",
      "unit": "conditional-moments",
      "title": "תוחלת מותנית: פונקציה לעומת משתנה מקרי",
      "type": "Definition",
      "topic": "תוחלת מותנית",
      "statement": "נסמן m(y)=E[X|Y=y]. זהו מספר עבור ערך תצפית קבוע. לעומת זאת E[X|Y]=m(Y) הוא משתנה מקרי שהוא פונקציה של התצפית בלבד. נניח E|X|<∞; ערכים נקבעים עד כדי שוויון כמעט בוודאות.",
      "formula": "m(y)=\\mathbb E[X\\mid Y=y],\\qquad \\mathbb E[X\\mid Y]=m(Y)",
      "question": "לפני שנמדד Y, מהו E[X|Y]?",
      "choices": [
        "מספר קבוע השווה תמיד ל־E[X]",
        "הערך המדויק של X בכל מקרה",
        "פונקציה של X שאינה תלויה ב־Y",
        "משתנה מקרי שהוא פונקציה של Y"
      ],
      "answer": 3,
      "explanation": "אחרי הצבת ערך התצפית מקבלים מספר. לפני ההצבה, התוחלת המותנית עצמה אקראית.",
      "links": [
        "cm_law-discrete",
        "cm_law-continuous"
      ],
      "sources": [
        {
          "file": "Random Signals - Tutorial 02.pdf",
          "pages": [
            2,
            3
          ],
          "section": "סעיף 2: פילוגים מותנים ותוחלת מותנית"
        }
      ],
      "origin": "direct"
    },
    {
      "id": "cm_mean-discrete",
      "course": "signals",
      "unit": "conditional-moments",
      "title": "תוחלת מותנית: סכום לפי הפילוג המותנה",
      "type": "Formula",
      "topic": "תוחלת מותנית",
      "statement": "אם הפילוג של X בהינתן Y=y בדיד, מחשבים את התוחלת של g(X) עם המשקלים המותנים. יש להשתמש בתמיכה המותנית ולדרוש קיום של התוחלת.",
      "formula": "\\mathbb E[g(X)\\mid Y=y]=\\sum_x g(x)P(X=x\\mid Y=y)",
      "question": "איזה שינוי נדרש כאשר מחשבים E[X²|Y=y] במקום E[X|Y=y]?",
      "choices": [
        "מעלים בריבוע רק את ההסתברויות",
        "מחליפים את x ב־x² בתוך הסכום, ומשאירים את המשקלים המותנים",
        "מעלים בריבוע את התוצאה של E[X|Y=y]",
        "מחשבים לפי הפילוג השולי של X"
      ],
      "answer": 1,
      "explanation": "מומנט שני מותנה הוא תוחלת של X². הוא אינו, בדרך כלל, ריבוע התוחלת המותנית.",
      "links": [
        "cm_mean-rv",
        "cm_law-discrete"
      ],
      "sources": [
        {
          "file": "Random Signals - Tutorial 02.pdf",
          "pages": [
            2
          ],
          "section": "סעיף 2: פילוגים מותנים ותוחלת מותנית"
        },
        {
          "file": "Random Signals - Tutorial 04.pdf",
          "pages": [
            4
          ],
          "section": "תרגיל 2: אות ורעש פואסוניים"
        }
      ],
      "origin": "direct"
    },
    {
      "id": "cm_mean-continuous",
      "course": "signals",
      "unit": "conditional-moments",
      "title": "תוחלת מותנית: אינטגרל לפי הצפיפות המותנית",
      "type": "Formula",
      "topic": "תוחלת מותנית",
      "statement": "אם ל־X בהינתן Y=y יש צפיפות, מחשבים את התוחלת של g(X) באינטגרל לפי צפיפות זו. גבולות האינטגרציה יכולים להיות תלויים בערך התצפית.",
      "formula": "\\mathbb E[g(X)\\mid Y=y]=\\int_{-\\infty}^{\\infty}g(x)f_{X\\mid Y}(x\\mid y)\\,dx",
      "question": "כאשר נתון ש־X בהינתן Y=y אחיד בקטע שתלוי ב־y, לפי איזו צפיפות מחשבים מומנט מותנה?",
      "choices": [
        "לפי הצפיפות האחידה על הקטע המותנה",
        "לפי הצפיפות השולית של Y",
        "לפי הצפיפות השולית של X בלי התחשבות ב־y",
        "לפי מכפלת שתי הצפיפויות השוליות"
      ],
      "answer": 0,
      "explanation": "ההתניה משנה את הפילוג ואת התמיכה. מתייחסים ל־y כקבוע בזמן האינטגרציה.",
      "links": [
        "cm_mean-rv",
        "cm_law-continuous"
      ],
      "sources": [
        {
          "file": "Random Signals - Tutorial 02.pdf",
          "pages": [
            3,
            6,
            7
          ],
          "section": "סעיף 2: פילוגים מותנים ותוחלת מותנית"
        }
      ],
      "origin": "direct"
    },
    {
      "id": "cm_event-mean",
      "course": "signals",
      "unit": "conditional-moments",
      "title": "תוחלת ושונות מותנות במאורע",
      "type": "Definition",
      "topic": "תוחלת מותנית",
      "statement": "למאורע A עם הסתברות חיובית ול־X אינטגרבילי, התוחלת המותנית ב־A היא ממוצע X על אותו מאורע, לאחר נרמול. היא מספר, ולא משתנה מקרי של תצפית. אם גם המומנט השני סופי, השונות המותנית במאורע מתקבלת ממומנט שני מותנה פחות ריבוע התוחלת המותנית.",
      "formula": "\\begin{aligned}\\mathbb E[X\\mid A]&=\\frac{\\mathbb E[X\\mathbf1_A]}{P(A)},\\quad P(A)>0\\\\\\operatorname{Var}(X\\mid A)&=\\frac{\\mathbb E[X^2\\mathbf1_A]}{P(A)}-(\\mathbb E[X\\mid A])^2\\end{aligned}",
      "question": "אם A בעל הסתברות חיובית, מהי E[X·1_A]?",
      "choices": [
        "E[X|A] בלבד",
        "E[X]P(A), גם ללא אי־תלות",
        "P(A)E[X|A]",
        "P(A)/E[X|A]"
      ],
      "answer": 2,
      "explanation": "הכפלה באינדיקטור מגבילה את הממוצע למאורע, אך אינה מנרמלת בהסתברותו.",
      "links": [
        "cm_mean-rv"
      ],
      "sources": [
        {
          "file": "Random Signals - Tutorial 02.pdf",
          "pages": [
            1,
            2
          ],
          "section": "סעיף 2: פילוגים מותנים ותוחלת מותנית"
        },
        {
          "file": "Random Signals - Tutorial 07.pdf",
          "pages": [
            5
          ],
          "section": "תרגיל 4: ידוע שהתרחש אירוע אחד"
        }
      ],
      "origin": "supplement"
    },
    {
      "id": "cm_indicator",
      "course": "signals",
      "unit": "conditional-moments",
      "title": "הסתברות מותנית כתוחלת של אינדיקטור",
      "type": "Claim",
      "topic": "תוחלת מותנית",
      "statement": "הסתברות מותנית של מאורע היא תוחלת מותנית של האינדיקטור שלו. כך אפשר להשתמש בהחלקה גם לחישוב הסתברויות ופונקציות התפלגות.",
      "formula": "P(A\\mid Y)=\\mathbb E[\\mathbf 1_A\\mid Y],\\qquad P(A)=\\mathbb E[P(A\\mid Y)]",
      "question": "מהו E[1_A|Y]?",
      "choices": [
        "ההסתברות המותנית של A בהינתן Y",
        "האינדיקטור של התוחלת של Y",
        "תמיד ההסתברות הלא מותנית של A",
        "תמיד 0 או 1"
      ],
      "answer": 0,
      "explanation": "ההסתברות המותנית יכולה לקבל כל ערך בין 0 ל־1; היא אינה חייבת להיות אינדיקטור.",
      "links": [
        "cm_mean-rv"
      ],
      "sources": [
        {
          "file": "Random Signals - Tutorial 02.pdf",
          "pages": [
            1,
            3
          ],
          "section": "סעיף 2: פילוגים מותנים ותוחלת מותנית"
        },
        {
          "file": "Random Signals - Tutorial 03.pdf",
          "pages": [
            4
          ],
          "section": "תרגיל 1: שימוש בהסתברות שלמה"
        }
      ],
      "origin": "supplement"
    },
    {
      "id": "cm_linearity",
      "course": "signals",
      "unit": "conditional-moments",
      "title": "לינאריות של תוחלת מותנית",
      "type": "Claim",
      "topic": "תוחלת מותנית",
      "statement": "עבור משתנים אינטגרביליים וקבועים דטרמיניסטיים, התוחלת המותנית לינארית. אין צורך באי־תלות בין המשתנים.",
      "formula": "\\mathbb E[aX+bW\\mid Y]=a\\mathbb E[X\\mid Y]+b\\mathbb E[W\\mid Y]",
      "question": "האם נדרשת אי־תלות כדי לפרק תוחלת מותנית של סכום לסכום תוחלות מותנות?",
      "choices": [
        "כן, אי־תלות זוגית מספיקה",
        "כן, אך רק במשותף",
        "רק אם המשתנים אינם גאוסיים",
        "לא; נדרש שקיום התוחלות יהיה מובטח"
      ],
      "answer": 3,
      "explanation": "לינאריות אינה נוסחה לפירוק מכפלות. פירוק מכפלה דורש תנאים אחרים.",
      "links": [
        "cm_mean-rv"
      ],
      "sources": [
        {
          "file": "Random Signals - Tutorial 04.pdf",
          "pages": [
            3
          ],
          "section": "תרגיל 1, פירוק הסכום"
        }
      ],
      "origin": "derived"
    },
    {
      "id": "cm_pull-out",
      "course": "signals",
      "unit": "conditional-moments",
      "title": "הוצאת מידע ידוע מן ההתניה",
      "type": "Claim",
      "topic": "תוחלת מותנית",
      "statement": "פונקציה של המשתנה שעליו מתנים נחשבת ידועה בתוך התוחלת המותנית. אפשר להוציא אותה החוצה כשהמכפלה אינטגרבילית. בפרט, התוחלת המותנית של g(Y) בהינתן Y היא g(Y).",
      "formula": "\\mathbb E[g(Y)X\\mid Y]=g(Y)\\mathbb E[X\\mid Y],\\qquad \\mathbb E[g(Y)\\mid Y]=g(Y)",
      "question": "מהו E[Y·X|Y], בהנחת קיום התוחלות?",
      "choices": [
        "E[Y]E[X|Y]",
        "Y·E[X|Y]",
        "E[Y]E[X]",
        "Y·E[X], תמיד"
      ],
      "answer": 1,
      "explanation": "Y ידוע ביחס למידע שבו מתנים, אך אינו הופך לתוחלת הלא מותנית שלו.",
      "links": [
        "cm_linearity"
      ],
      "sources": [
        {
          "file": "Random Signals - Tutorial 04.pdf",
          "pages": [
            3,
            6
          ],
          "section": "תרגילים 1 ו־3"
        }
      ],
      "origin": "direct"
    },
    {
      "id": "cm_independence",
      "course": "signals",
      "unit": "conditional-moments",
      "title": "אי־תלות ותוחלת מותנית",
      "type": "Claim",
      "topic": "תוחלת מותנית",
      "statement": "אם X בלתי תלוי ב־Y, ההתניה ב־Y אינה משנה את פילוג X. לכן התוחלת והשונות המותנות שוות לגדלים הלא מותנים, כאשר הם קיימים. חוסר מתאם בלבד אינו מספיק.",
      "formula": "X\\perp Y\\ \\Longrightarrow\\ \\mathbb E[X\\mid Y]=\\mathbb E[X],\\quad \\operatorname{Var}(X\\mid Y)=\\operatorname{Var}(X)",
      "question": "איזה תנאי מספיק להסרת Y מההתניה בכל התוחלות של פונקציות אינטגרביליות של X?",
      "choices": [
        "שוויון בין השונויות",
        "תוחלות אפס של X ושל Y",
        "אי־תלות של X ושל Y",
        "שונות משותפת אפס בלבד"
      ],
      "answer": 2,
      "explanation": "אי־תלות שומרת על הפילוג כולו. חוסר מתאם מתאר רק קשר מסדר שני.",
      "links": [
        "cm_mean-rv"
      ],
      "sources": [
        {
          "file": "Random Signals - Tutorial 04.pdf",
          "pages": [
            3,
            6
          ],
          "section": "שערוך אופטימלי"
        },
        {
          "file": "Random Signals - Tutorial 03.pdf",
          "pages": [
            4,
            5
          ],
          "section": "הבחנה בין חוסר מתאם ואי־תלות"
        }
      ],
      "origin": "direct"
    },
    {
      "id": "cm_tower",
      "course": "signals",
      "unit": "conditional-moments",
      "title": "משפט ההחלקה: חוק התוחלת השלמה",
      "type": "Theorem",
      "topic": "תוחלת מותנית",
      "statement": "נניח E|X|<∞ ונסמן m(y)=E[X|Y=y]. התוחלת הפנימית ממוצעת על X לפי הפילוג המותנה של X בהינתן y, ונותנת מספר לכל y. כעת m(Y) היא פונקציה של Y: בתוחלת החיצונית משקללים את m(y) לפי P(Y=y) כש־Y בדיד, או לפי f_Y(y) כשיש ל־Y צפיפות. אין שלב נוסף של מיצוע לפי הפילוג השולי של X.",
      "formula": "\\begin{gathered}m(y)=\\mathbb E[X\\mid Y=y]\\\\\\mathbb E[X]=\\mathbb E_Y[\\mathbb E[X\\mid Y]]\\\\[6pt]Y\\ \\text{בדיד}\\\\\\mathbb E[X]=\\sum_y m(y)P(Y=y)\\\\[6pt]Y\\ \\text{רציף}\\\\\\mathbb E[X]=\\int_{-\\infty}^{\\infty}m(y)f_Y(y)\\,dy\\end{gathered}",
      "question": "לפי איזה פילוג מחשבים את התוחלת החיצונית ב־E[E[X|Y]]?",
      "choices": [
        "לפי הפילוג המותנה של X לכל y, בלי מיצוע על y",
        "לפי הפילוג השולי של X",
        "לפי התפלגות אחידה שרירותית",
        "לפי הפילוג של Y"
      ],
      "answer": 3,
      "explanation": "קודם מחשבים m(y)=E[X|Y=y] לכל ערך נתון של Y, תוך מיצוע X לפי הפילוג המותנה שלו. אחר כך נשארת פונקציה של Y בלבד, ולכן מסכמים את m(y) במשקל P(Y=y), או משלבים אותה באינטגרל במשקל f_Y(y). למשל, אם P(Y=0)=¼, P(Y=1)=¾, ו־m(0)=2, m(1)=6, אז E[X]=2·¼+6·¾=5. זהו מיצוע על ערכי Y; לא כופלים שוב ב־P(X=x) או ב־f_X(x).",
      "links": [
        "cm_mean-discrete",
        "cm_mean-continuous"
      ],
      "sources": [
        {
          "file": "Random Signals - Tutorial 02.pdf",
          "pages": [
            3
          ],
          "section": "משפט 1: החלקה"
        },
        {
          "file": "Random Signals - Tutorial 04.pdf",
          "pages": [
            2
          ],
          "section": "משפט 3"
        }
      ],
      "origin": "direct"
    },
    {
      "id": "cm_tower-conditional",
      "course": "signals",
      "unit": "conditional-moments",
      "title": "החלקה עם מידע נוסף",
      "type": "Theorem",
      "topic": "תוחלת מותנית",
      "statement": "אפשר להכניס משתנה עזר Y, להתנות ב־Y ובמידע הקיים Z, ואז למצע את Y בהינתן Z. אין לאבד בדרך את המידע שכבר היה נתון.",
      "formula": "\\mathbb E[X\\mid Z]=\\mathbb E[\\mathbb E[X\\mid Y,Z]\\mid Z]",
      "question": "בפירוק E[X|Z] באמצעות משתנה עזר Y, מהי ההתניה שבתוחלת הפנימית?",
      "choices": [
        "גם Y וגם Z",
        "רק Y, תמיד",
        "ללא התניה",
        "רק Z, ואז ממוצע בלתי מותנה"
      ],
      "answer": 0,
      "explanation": "Z נשאר בשני שלבי החישוב. המיצוע החיצוני הוא לפי הפילוג של Y בהינתן Z.",
      "links": [
        "cm_tower"
      ],
      "sources": [
        {
          "file": "Random Signals - Tutorial 04.pdf",
          "pages": [
            2
          ],
          "section": "משפט 3, נוסחה 4"
        },
        {
          "file": "Random Signals - Tutorial 04.pdf",
          "pages": [
            3
          ],
          "section": "תרגיל 1, סעיף 3"
        }
      ],
      "origin": "direct"
    },
    {
      "id": "cm_nested-information",
      "course": "signals",
      "unit": "conditional-moments",
      "title": "מגדל התניות ומידע מקונן",
      "type": "Claim",
      "topic": "תוחלת מותנית",
      "statement": "אם Z הוא פונקציה של Y, המידע ב־Z נכלל במידע ב־Y. אז מיצוע E[X|Y] בהינתן Z מחזיר E[X|Z]. ללא הכלת מידע, הסרה שרירותית של התניות אינה חוקית.",
      "formula": "Z=h(Y)\\ \\Longrightarrow\\ \\mathbb E[\\mathbb E[X\\mid Y]\\mid Z]=\\mathbb E[X\\mid Z]",
      "question": "מתי מותר להשתמש בזהות E[E[X|Y]|Z]=E[X|Z] ללא הנחות נוספות על X?",
      "choices": [
        "רק כאשר X גאוסי",
        "כאשר המידע ב־Z כלול במידע ב־Y",
        "כאשר Cov(Y,Z)=0",
        "בכל פעם שלשניהם אותה תוחלת"
      ],
      "answer": 1,
      "explanation": "זהו מגדל עבור מידע מקונן. כאשר Z אינו פונקציה של Y, משתמשים בזהות עם Y וגם Z בפנים.",
      "links": [
        "cm_tower-conditional"
      ],
      "sources": [
        {
          "file": "Random Signals - Tutorial 04.pdf",
          "pages": [
            2
          ],
          "section": "שערוך אופטימלי"
        },
        {
          "file": "Random Signals - Tutorial 02.pdf",
          "pages": [
            7
          ],
          "section": "תרגיל 3, סעיף 3"
        }
      ],
      "origin": "supplement"
    },
    {
      "id": "cm_invertible",
      "course": "signals",
      "unit": "conditional-moments",
      "title": "התניה בפונקציה הפיכה של התצפית",
      "type": "Claim",
      "topic": "תוחלת מותנית",
      "statement": "כאשר h הפיכה על תמיכת Y וההופכית מדידה, Y ו־h(Y) מכילים אותו מידע. לכן ההתניה בהם שקולה. פונקציה שאינה הפיכה, כגון ריבוע של משתנה בעל שני סימנים, עשויה לאבד מידע.",
      "formula": "\\mathbb E[X\\mid h(Y)]=\\mathbb E[X\\mid Y]",
      "question": "מה נכון לגבי ההתניה ב־Y³ עבור משתנה Y ממשי?",
      "choices": [
        "היא תמיד מאבדת את הסימן של Y",
        "היא מחייבת לחשב את E[X³|Y]",
        "היא שקולה להתניה ב־Y",
        "היא שקולה להתניה ב־Y²"
      ],
      "answer": 2,
      "explanation": "פונקציית החזקה השלישית הפיכה על הישר הממשי; הפונקציה הריבועית אינה הפיכה על כולו.",
      "links": [
        "cm_nested-information"
      ],
      "sources": [
        {
          "file": "Random Signals - Tutorial 02.pdf",
          "pages": [
            7
          ],
          "section": "תרגיל 3, סעיף 3"
        },
        {
          "file": "Random Signals - Tutorial 11.pdf",
          "pages": [
            4
          ],
          "section": "הערה על פונקציה הפיכה"
        }
      ],
      "origin": "derived"
    },
    {
      "id": "cm_conditional-independence",
      "course": "signals",
      "unit": "conditional-moments",
      "title": "אי־תלות מותנית והסרת מידע",
      "type": "Claim",
      "topic": "תוחלת מותנית",
      "statement": "אם X ו־Y בלתי תלויים בהינתן Z, ידיעת Y אינה משנה את פילוג X לאחר שכבר נודע Z. אין לבלבל זאת עם אי־תלות לא מותנית.",
      "formula": "X\\perp Y\\mid Z\\ \\Longrightarrow\\ \\mathbb E[X\\mid Y,Z]=\\mathbb E[X\\mid Z]",
      "question": "בהינתן Z, המשתנים X ו־Y בלתי תלויים. מה ניתן להסיק?",
      "choices": [
        "X ו־Y בהכרח בלתי תלויים ללא התניה",
        "E[X|Y,Z] בהכרח שווה לאפס",
        "Z בהכרח קבוע",
        "אפשר להשמיט את Y מן התוחלת המותנית, אך להשאיר את Z"
      ],
      "answer": 3,
      "explanation": "אי־תלות מותנית נוגעת לפילוג לאחר ידיעת Z. היא אינה מבטיחה אי־תלות שולית.",
      "links": [
        "cm_independence",
        "cm_tower-conditional"
      ],
      "sources": [
        {
          "file": "Random Signals - Tutorial 11.pdf",
          "pages": [
            1
          ],
          "section": "תכונת מרקוב"
        },
        {
          "file": "Random Signals - Tutorial 04.pdf",
          "pages": [
            3
          ],
          "section": "מידע מן העבר"
        }
      ],
      "origin": "supplement"
    },
    {
      "id": "cm_variance",
      "course": "signals",
      "unit": "conditional-moments",
      "title": "שונות מותנית ומומנט שני מותנה",
      "type": "Definition",
      "topic": "שונות מותנית",
      "statement": "עבור X בעל מומנט שני סופי, השונות המותנית היא התוחלת המותנית של ריבוע הסטייה מהתוחלת המותנית. בדרך כלל היא משתנה מקרי התלוי בתצפית.",
      "formula": "\\operatorname{Var}(X\\mid Y)=\\mathbb E[(X-\\mathbb E[X\\mid Y])^2\\mid Y]=\\mathbb E[X^2\\mid Y]-(\\mathbb E[X\\mid Y])^2",
      "question": "איזה ביטוי הוא השונות המותנית של X בהינתן Y?",
      "choices": [
        "E[X²|Y] − (E[X|Y])²",
        "E[X²|Y] − (E[X])²",
        "(E[X²|Y] − E[X|Y])²",
        "E[X²] − (E[X|Y])²"
      ],
      "answer": 0,
      "explanation": "בשני האיברים משתמשים באותו מידע מותנה. רק התוחלת המותנית עצמה מועלת בריבוע.",
      "links": [
        "cm_mean-rv",
        "cm_pull-out"
      ],
      "sources": [
        {
          "file": "Random Signals - Tutorial 03.pdf",
          "pages": [
            3
          ],
          "section": "טענות 6–7"
        },
        {
          "file": "Random Signals - Tutorial 04.pdf",
          "pages": [
            1,
            6
          ],
          "section": "שערוך אופטימלי"
        }
      ],
      "origin": "supplement"
    },
    {
      "id": "cm_variance-zero",
      "course": "signals",
      "unit": "conditional-moments",
      "title": "שונות מותנית אפס: שחזור מדויק",
      "type": "Claim",
      "topic": "שונות מותנית",
      "statement": "שונות מותנית היא אי־שלילית. עבור X בעל מומנט שני סופי, היא מתאפסת כמעט בוודאות אם ורק אם X שווה לתוחלת המותנית שלו, כלומר ניתן לשחזור מן התצפית עד כדי קבוצת הסתברות אפס.",
      "formula": "\\operatorname{Var}(X\\mid Y)=0\\ \\text{a.s.}\\iff X=\\mathbb E[X\\mid Y]\\ \\text{a.s.}",
      "question": "אם Var(X|Y)=0 כמעט בוודאות, מה בהכרח נכון?",
      "choices": [
        "X קבוע ללא קשר לתצפית",
        "Y אינו נושא מידע על X",
        "אפשר לשחזר את X בדיוק מתוך Y כמעט בוודאות",
        "X ו־Y חייבים להיות בלתי תלויים"
      ],
      "answer": 2,
      "explanation": "האי־ודאות שנותרה אחרי ידיעת Y היא אפס; לפני המדידה X עדיין יכול להיות אקראי.",
      "links": [
        "cm_variance"
      ],
      "sources": [
        {
          "file": "Random Signals - Tutorial 02.pdf",
          "pages": [
            6,
            7
          ],
          "section": "ענף הפילוג המנוון בתרגיל 3"
        },
        {
          "file": "Random Signals - Tutorial 04.pdf",
          "pages": [
            3
          ],
          "section": "מקרה הקצה m=n"
        }
      ],
      "origin": "derived"
    },
    {
      "id": "cm_variance-affine",
      "course": "signals",
      "unit": "conditional-moments",
      "title": "שונות מותנית של טרנספורמציה אפינית",
      "type": "Formula",
      "topic": "שונות מותנית",
      "statement": "כאשר a(Y) ו־b(Y) ידועים בהינתן Y והמומנטים הנדרשים סופיים, הזזה ידועה אינה משנה שונות מותנית, וכפל ידוע מכפיל אותה בריבוע המקדם.",
      "formula": "\\operatorname{Var}(a(Y)X+b(Y)\\mid Y)=a^2(Y)\\operatorname{Var}(X\\mid Y)",
      "question": "מהי Var(3X+Y|Y), בהנחת מומנטים מתאימים?",
      "choices": [
        "3Var(X|Y)+Var(Y)",
        "9Var(X|Y)",
        "9Var(X|Y)+Var(Y)",
        "Var(X|Y)+Y²"
      ],
      "answer": 1,
      "explanation": "בהינתן Y, האיבר Y הוא הזזה ידועה. המקדם 3 נכנס לשונות בריבוע.",
      "links": [
        "cm_variance",
        "cm_pull-out"
      ],
      "sources": [
        {
          "file": "Random Signals - Tutorial 04.pdf",
          "pages": [
            6
          ],
          "section": "תרגיל 3: סימן וערך מוחלט"
        }
      ],
      "origin": "supplement"
    },
    {
      "id": "cm_conditional-cov",
      "course": "signals",
      "unit": "conditional-moments",
      "title": "קווריאנס מותנה ושונות של סכום",
      "type": "Definition",
      "topic": "שונות מותנית",
      "statement": "קווריאנס מותנה משתמש באותן תוחלות מותנות בשני המשתנים. שונות מותנית של סכום כוללת פעמיים קווריאנס מותנה. אי־תלות לא מותנית לבדה אינה מבטיחה שהאיבר המותנה ייעלם.",
      "formula": "\\begin{aligned}\\operatorname{Cov}(X,W\\mid Y)&=\\mathbb E[XW\\mid Y]-\\mathbb E[X\\mid Y]\\mathbb E[W\\mid Y]\\\\\\operatorname{Var}(X+W\\mid Y)&=\\operatorname{Var}(X\\mid Y)+\\operatorname{Var}(W\\mid Y)+2\\operatorname{Cov}(X,W\\mid Y)\\end{aligned}",
      "question": "מתי מותר לחבר ישירות שונויות מותנות של שני איברים בסכום?",
      "choices": [
        "כאשר לשני האיברים תוחלת אפס ללא התניה",
        "כאשר המתנה Y רציף",
        "כאשר שני האיברים בלתי תלויים לפני ההתניה, ללא תנאי נוסף",
        "כאשר הקווריאנס ביניהם בהינתן Y שווה לאפס"
      ],
      "answer": 3,
      "explanation": "התניה יכולה ליצור תלות. צריך לבדוק את הקווריאנס המותנה ולא רק את הקווריאנס השולי.",
      "links": [
        "cm_variance"
      ],
      "sources": [
        {
          "file": "Random Signals - Tutorial 03.pdf",
          "pages": [
            3
          ],
          "section": "קווריאנס מותנה גאוסי"
        },
        {
          "file": "Random Signals - Tutorial 04.pdf",
          "pages": [
            4
          ],
          "section": "התניה בסכום אות ורעש"
        }
      ],
      "origin": "supplement"
    },
    {
      "id": "cm_total-variance",
      "course": "signals",
      "unit": "conditional-moments",
      "title": "חוק השונות השלמה",
      "type": "Theorem",
      "topic": "שונות מותנית",
      "statement": "עבור X בעל מומנט שני סופי, השונות הכוללת מתפרקת לאי־הוודאות שנותרת לאחר המדידה ולשונות שבין התוחלות המותנות. שני האיברים אינם שליליים.",
      "formula": "\\operatorname{Var}(X)=\\mathbb E[\\operatorname{Var}(X\\mid Y)]+\\operatorname{Var}(\\mathbb E[X\\mid Y])",
      "question": "מהו האיבר החסר בזהות Var(X)=E[Var(X|Y)]+… ?",
      "choices": [
        "E[(E[X|Y])²] בלבד",
        "Var(E[X|Y])",
        "Var(E[X])",
        "E[Var(Y|X)]"
      ],
      "answer": 1,
      "explanation": "ממוצע השונות המותנית אינו בדרך כלל כל השונות. נוסף אליו הפיזור של התוחלת המותנית סביב E[X].",
      "links": [
        "cm_variance",
        "cm_tower"
      ],
      "sources": [
        {
          "file": "Random Signals - Tutorial 04.pdf",
          "pages": [
            1,
            2
          ],
          "section": "זהויות שגיאת השערוך והחלקה"
        }
      ],
      "origin": "supplement"
    },
    {
      "id": "cm_conditional-total-variance",
      "course": "signals",
      "unit": "conditional-moments",
      "title": "חוק השונות השלמה בהינתן מידע נוסף",
      "type": "Theorem",
      "topic": "שונות מותנית",
      "statement": "אפשר לפרק שונות בהינתן Z באמצעות תצפית נוספת Y. גם הממוצע וגם השונות החיצוניים מחושבים בהינתן Z.",
      "formula": "\\operatorname{Var}(X\\mid Z)=\\mathbb E[\\operatorname{Var}(X\\mid Y,Z)\\mid Z]+\\operatorname{Var}(\\mathbb E[X\\mid Y,Z]\\mid Z)",
      "question": "בפירוק Var(X|Z) באמצעות Y, האם מותר להשמיט את Z מן המיצוע החיצוני?",
      "choices": [
        "לא; כל הפירוק נעשה בתוך המידע Z",
        "כן, תמיד",
        "כן, כל עוד X בעל תוחלת אפס",
        "כן, אם Y בדיד"
      ],
      "answer": 0,
      "explanation": "זו גרסה מותנית של פירוק השונות, המשמשת כשמכניסים משתנה עזר מבלי לאבד את התצפית הקיימת.",
      "links": [
        "cm_total-variance",
        "cm_tower-conditional"
      ],
      "sources": [
        {
          "file": "Random Signals - Tutorial 04.pdf",
          "pages": [
            2,
            3,
            4
          ],
          "section": "החלקה עם משתנה עזר M"
        }
      ],
      "origin": "supplement"
    },
    {
      "id": "cm_information",
      "course": "signals",
      "unit": "conditional-moments",
      "title": "הוספת מידע מקטינה שגיאה בממוצע",
      "type": "Claim",
      "topic": "שונות מותנית",
      "statement": "הוספת תצפית אינה יכולה להגדיל את השגיאה הריבועית המינימלית בממוצע. אין בכך טענה שהשונות המותנית תקטן בכל מימוש של התצפיות.",
      "formula": "\\mathbb E[\\operatorname{Var}(X\\mid Y,Z)]\\leq\\mathbb E[\\operatorname{Var}(X\\mid Y)]\\leq\\operatorname{Var}(X)",
      "question": "איזו טענה נכונה תמיד עבור X בעל מומנט שני סופי?",
      "choices": [
        "שונות מותנית קטנה מהשונות השולית בכל ערך תצפית",
        "כל תצפית חדשה מקטינה שגיאה באופן ממש",
        "הוספת מידע אינה מגדילה את השגיאה המינימלית הממוצעת",
        "תצפית לא לינארית לעולם אינה מועילה"
      ],
      "answer": 2,
      "explanation": "ייתכן שתצפית תגלה שהמימוש הנוכחי דווקא קשה יותר לשערוך. ההבטחה הכללית היא על הממוצע.",
      "links": [
        "cm_conditional-total-variance"
      ],
      "sources": [
        {
          "file": "Random Signals - Tutorial 04.pdf",
          "pages": [
            3
          ],
          "section": "דיון בשגיאה כתלות במספר המדידות"
        }
      ],
      "origin": "derived"
    },
    {
      "id": "cm_jensen",
      "course": "signals",
      "unit": "conditional-moments",
      "title": "אי־שוויון ינסן מותנה",
      "type": "Claim",
      "topic": "תוחלת מותנית",
      "statement": "עבור פונקציה קמורה φ ומומנטים מתאימים, הפעלת φ אחרי התוחלת המותנית אינה גדולה מהתוחלת המותנית של φ(X). במקרה הריבוע מתקבלת אי־שליליות השונות המותנית.",
      "formula": "\\varphi(\\mathbb E[X\\mid Y])\\leq\\mathbb E[\\varphi(X)\\mid Y],\\qquad (\\mathbb E[X\\mid Y])^2\\leq\\mathbb E[X^2\\mid Y]",
      "question": "איזה יחס נכון בין (E[X|Y])² ובין E[X²|Y]?",
      "choices": [
        "הראשון גדול או שווה תמיד",
        "הם תמיד שווים",
        "אין שום יחס גם עם מומנט שני סופי",
        "הראשון קטן או שווה כמעט בוודאות"
      ],
      "answer": 3,
      "explanation": "ההפרש הוא Var(X|Y), שאינו שלילי. שוויון כמעט בוודאות מתקבל כאשר אין שגיאת שחזור.",
      "links": [
        "cm_variance"
      ],
      "sources": [
        {
          "file": "Random Signals - Tutorial 04.pdf",
          "pages": [
            1,
            2
          ],
          "section": "משלים לזהות MMSE"
        }
      ],
      "origin": "supplement"
    },
    {
      "id": "cm_total-cov",
      "course": "signals",
      "unit": "conditional-moments",
      "title": "חוק הקווריאנס השלם",
      "type": "Formula",
      "topic": "שונות מותנית",
      "statement": "עבור משתנים בעלי מומנטים שניים סופיים, הקווריאנס מתפרק לממוצע הקווריאנס המותנה ולקווריאנס בין התוחלות המותנות. התניה יכולה לחשוף קשרים שאינם נראים במומנטים השוליים.",
      "formula": "\\operatorname{Cov}(X,W)=\\mathbb E[\\operatorname{Cov}(X,W\\mid Y)]+\\operatorname{Cov}(\\mathbb E[X\\mid Y],\\mathbb E[W\\mid Y])",
      "question": "מה חסר ב־Cov(X,W)=E[Cov(X,W|Y)]+… ?",
      "choices": [
        "Cov(E[X|Y],E[W|Y])",
        "E[X|Y]E[W|Y] ללא מיצוע",
        "Var(Y)",
        "Cov(X,Y)Cov(W,Y) תמיד"
      ],
      "answer": 0,
      "explanation": "כאשר מציבים W=X, מקבלים את חוק השונות השלמה.",
      "links": [
        "cm_conditional-cov",
        "cm_total-variance"
      ],
      "sources": [
        {
          "file": "Random Signals - Tutorial 03.pdf",
          "pages": [
            3
          ],
          "section": "טענות 6–7"
        },
        {
          "file": "Random Signals - Tutorial 04.pdf",
          "pages": [
            2
          ],
          "section": "שערוך אופטימלי"
        }
      ],
      "origin": "supplement"
    },
    {
      "id": "cm_nonlinear",
      "course": "signals",
      "unit": "conditional-moments",
      "title": "פונקציה לא לינארית אינה יוצאת מן התוחלת",
      "type": "Claim",
      "topic": "תוחלת מותנית",
      "statement": "באופן כללי התוחלת המותנית של g(X) אינה שווה ל־g של התוחלת המותנית. לינאריות והוצאת פונקציה של התצפית אינן מתירות להוציא פונקציה שרירותית של המשתנה המשוערך.",
      "formula": "\\mathbb E[g(X)\\mid Y]\\not\\equiv g(\\mathbb E[X\\mid Y])",
      "question": "נתון E[X|Y]=Y. האם בהכרח E[X³|Y]=Y³?",
      "choices": [
        "כן, לפי לינאריות",
        "לא; יש לחשב את המומנט השלישי לפי הפילוג המותנה",
        "כן, אם Y רציף",
        "כן, גם ללא קיום מומנט שלישי"
      ],
      "answer": 1,
      "explanation": "בתרגיל 3 בקובץ 02, עבור Y≥0 התוצאה היא Y³+Y ולא Y³.",
      "links": [
        "cm_mean-discrete",
        "cm_mean-continuous"
      ],
      "sources": [
        {
          "file": "Random Signals - Tutorial 02.pdf",
          "pages": [
            6,
            7
          ],
          "section": "תרגיל 3"
        }
      ],
      "origin": "derived"
    },
    {
      "id": "cm_mmse",
      "course": "signals",
      "unit": "conditional-moments",
      "title": "התוחלת המותנית כמשערך MMSE",
      "type": "Theorem",
      "topic": "שערוך מותנה",
      "statement": "ל־X בעל מומנט שני סופי, המשערך שממזער שגיאה ריבועית ממוצעת מבין כל הפונקציות המדידות של התצפית הוא E[X|Y]. התצפית יכולה להיות וקטור.",
      "formula": "\\widehat X_{\\rm MMSE}(Y)=\\mathbb E[X\\mid Y]",
      "question": "איזה משערך הוא אופטימלי בין כל הפונקציות של וקטור המדידות Y?",
      "choices": [
        "תמיד המשערך הלינארי",
        "כל משערך חסר הטיה",
        "הפונקציה E[X|Y]",
        "E[Y|X]"
      ],
      "answer": 2,
      "explanation": "זו אופטימליות בין כל המשערכים, ולא רק בין צירופים לינאריים של המדידות.",
      "links": [
        "cm_mean-rv"
      ],
      "sources": [
        {
          "file": "Random Signals - Tutorial 04.pdf",
          "pages": [
            1
          ],
          "section": "משפט 1"
        }
      ],
      "origin": "direct"
    },
    {
      "id": "cm_conditional-risk",
      "course": "signals",
      "unit": "conditional-moments",
      "title": "פירוק השגיאה המותנית",
      "type": "Formula",
      "topic": "שערוך מותנה",
      "statement": "לכל משערך g(Y) עם שגיאה ריבועית סופית, הסיכון המותנה הוא השונות המותנית ועוד ריבוע המרחק מהתוחלת המותנית. לכן המינימום לכל תצפית מושג בתוחלת המותנית.",
      "formula": "\\mathbb E[(X-g(Y))^2\\mid Y]=\\operatorname{Var}(X\\mid Y)+(\\mathbb E[X\\mid Y]-g(Y))^2",
      "question": "מהי התוספת לשגיאה המותנית כאשר משתמשים ב־g(Y) במקום ב־E[X|Y]?",
      "choices": [
        "Cov(X,Y)",
        "Var(g(Y)) בכל מימוש",
        "אפס לכל משערך חסר הטיה",
        "ריבוע ההפרש בין g(Y) לתוחלת המותנית"
      ],
      "answer": 3,
      "explanation": "איבר הצלב מתאפס כי ל־X−E[X|Y] יש תוחלת מותנית אפס.",
      "links": [
        "cm_mmse",
        "cm_variance",
        "cm_pull-out"
      ],
      "sources": [
        {
          "file": "Random Signals - Tutorial 04.pdf",
          "pages": [
            1,
            2
          ],
          "section": "משלים למשפט MMSE ולעקרון הניצבות"
        }
      ],
      "origin": "derived"
    },
    {
      "id": "cm_orthogonality",
      "course": "signals",
      "unit": "conditional-moments",
      "title": "שגיאת MMSE ניצבת לכל פונקציה של המדידות",
      "type": "Theorem",
      "topic": "שערוך מותנה",
      "statement": "אם X בעל מומנט שני סופי ו־e=X−E[X|Y], אז E[e|Y]=0. לכן לכל h(Y) ריבועית־אינטגרבילית מתקיים E[e h(Y)]=0. לא נדרשת גאוסיות.",
      "formula": "e=X-\\mathbb E[X\\mid Y],\\quad \\mathbb E[e\\mid Y]=0,\\quad \\mathbb E[e\\,h(Y)]=0",
      "question": "שגיאת משערך MMSE ניצבת לאילו פונקציות של המדידות, עם המומנטים הדרושים?",
      "choices": [
        "רק לפונקציות לינאריות",
        "לכל פונקציה ריבועית־אינטגרבילית של המדידות",
        "רק לתצפית עצמה",
        "רק לקבועים"
      ],
      "answer": 1,
      "explanation": "זהו ההבדל מעקרון הניצבות של LMMSE, שמבטיח ניצבות רק למרחב האפיני של המדידות.",
      "links": [
        "cm_mmse",
        "cm_tower",
        "cm_pull-out"
      ],
      "sources": [
        {
          "file": "Random Signals - Tutorial 04.pdf",
          "pages": [
            1
          ],
          "section": "משפט 2 והדוגמה עם פונקציה לא לינארית"
        }
      ],
      "origin": "direct"
    },
    {
      "id": "cm_mmse-identities",
      "course": "signals",
      "unit": "conditional-moments",
      "title": "שגיאת MMSE: ממוצע השונות המותנית",
      "type": "Formula",
      "topic": "שערוך מותנה",
      "statement": "שגיאת MMSE היא ממוצע השונות המותנית. דרך שקולה לחישוב היא הפרש המומנטים השניים של X ושל המשערך, או הפרש השונויות שלהם. אין להחליף מומנטים שניים בשונויות בלי להתחשב בתוחלת.",
      "formula": "\\begin{aligned}\\operatorname{MMSE}&=\\mathbb E[\\operatorname{Var}(X\\mid Y)]\\\\&=\\mathbb E[X^2]-\\mathbb E[(\\mathbb E[X\\mid Y])^2]\\\\&=\\operatorname{Var}(X)-\\operatorname{Var}(\\mathbb E[X\\mid Y])\\end{aligned}",
      "question": "מה הקשר בין MMSE לשונות המותנית?",
      "choices": [
        "MMSE שווה לממוצע השונות המותנית",
        "MMSE שווה תמיד לשונות המותנית בכל תצפית",
        "MMSE שווה לשונות התוחלת המותנית",
        "MMSE שווה למומנט השני המותנה"
      ],
      "answer": 0,
      "explanation": "השונות המותנית עשויה להשתנות ממדידה למדידה. MMSE הוא מספר שממצע את כולן.",
      "links": [
        "cm_orthogonality",
        "cm_total-variance"
      ],
      "sources": [
        {
          "file": "Random Signals - Tutorial 04.pdf",
          "pages": [
            1,
            2
          ],
          "section": "מסקנה 1 והוכחתה"
        }
      ],
      "origin": "derived"
    },
    {
      "id": "cm_gaussian-scalar",
      "course": "signals",
      "unit": "conditional-moments",
      "title": "התניה בזוג גאוסי במשותף",
      "type": "Formula",
      "topic": "שערוך מותנה",
      "statement": "לזוג ממשי גאוסי במשותף עם Var(Y)>0, הפילוג של X בהינתן Y=y גאוסי: התוחלת אפינית בתצפית והשונות אינה תלויה בערך y. הנוסחה אינה נובעת מגאוסיות השוליים בלבד. בכתיב עם מקדם המתאם נדרשת גם שונות חיובית של X.",
      "formula": "\\begin{aligned}m(y)&=\\mu_X+\\frac{\\operatorname{Cov}(X,Y)}{\\sigma_Y^2}(y-\\mu_Y)\\\\v&=\\sigma_X^2-\\frac{\\operatorname{Cov}^2(X,Y)}{\\sigma_Y^2}=\\sigma_X^2(1-\\rho^2)\\end{aligned}",
      "question": "בזוג גאוסי במשותף, באיזה מן הגדלים המותנים עשוי ערך התצפית y להשפיע?",
      "choices": [
        "בשונות בלבד",
        "גם בתוחלת וגם בשונות בהכרח",
        "לא בתוחלת ולא בשונות",
        "בתוחלת; השונות קבועה ביחס ל־y"
      ],
      "answer": 3,
      "explanation": "השונות נקבעת על ידי מומנטי הזוג. כאשר |ρ|=1 מתקבל פילוג מותנה מנוון.",
      "links": [
        "cm_variance",
        "cm_mmse"
      ],
      "sources": [
        {
          "file": "Random Signals - Tutorial 03.pdf",
          "pages": [
            3
          ],
          "section": "טענה 6"
        }
      ],
      "origin": "direct"
    },
    {
      "id": "cm_gaussian-vector",
      "course": "signals",
      "unit": "conditional-moments",
      "title": "תוחלת וקווריאנס מותנים בווקטור גאוסי",
      "type": "Formula",
      "topic": "שערוך מותנה",
      "statement": "נניח ש־(X,Y) וקטור גאוסי במשותף, מחולק לבלוקים, ושמטריצת הקווריאנס של Y הפיכה. הממוצע המותנה הוא אפיני והקווריאנס המותנה הוא משלים שור שאינו תלוי בערך התצפית.",
      "formula": "\\begin{aligned}\\mathbb E[X\\mid Y]&=\\mu_X+\\Sigma_{XY}\\Sigma_{YY}^{-1}(Y-\\mu_Y)\\\\\\operatorname{Cov}(X\\mid Y)&=\\Sigma_{XX}-\\Sigma_{XY}\\Sigma_{YY}^{-1}\\Sigma_{YX}\\end{aligned}",
      "question": "איזה בלוק קווריאנס צריך להפוך בנוסחת ההתניה הגאוסית בווקטור Y?",
      "choices": [
        "את Σ_XX",
        "את כל מטריצת הקווריאנס המשותפת, גם אם היא סינגולרית",
        "את Σ_YY של התצפיות",
        "את Σ_XY, גם אם הוא אינו ריבועי"
      ],
      "answer": 2,
      "explanation": "הנוסחה דורשת הפיכות של בלוק התצפיות. אם יש תצפיות מיותרות, אפשר לצמצם אותן לפני השימוש בהופכית.",
      "links": [
        "cm_gaussian-scalar"
      ],
      "sources": [
        {
          "file": "Random Signals - Tutorial 03.pdf",
          "pages": [
            3
          ],
          "section": "טענה 7"
        }
      ],
      "origin": "direct"
    },
    {
      "id": "cm_lmmse-vs-mmse",
      "course": "signals",
      "unit": "conditional-moments",
      "title": "מתי LMMSE הוא גם התוחלת המותנית?",
      "type": "Claim",
      "topic": "שערוך מותנה",
      "statement": "משערך LMMSE תלוי רק במומנטים מסדר ראשון ושני. בגאוסיות במשותף הוא שווה לתוחלת המותנית. ללא גאוסיות, ייתכן שוויון אך אין הבטחה כללית; חוסר מתאם אינו שולל מידע לא לינארי.",
      "formula": "\\widehat X_{\\rm LMMSE}=\\mu_X+\\Sigma_{XY}\\Sigma_{YY}^{-1}(Y-\\mu_Y),\\quad \\operatorname{MMSE}\\leq\\operatorname{MSE}(\\widehat X_{\\rm LMMSE})",
      "question": "מה מבטיח שמשערך LMMSE ייתן את משערך MMSE?",
      "choices": [
        "רק תוחלות אפס",
        "גאוסיות במשותף של האות והמדידות",
        "שוויון בין מספר המדידות לממד האות",
        "גאוסיות של האות בלבד"
      ],
      "answer": 1,
      "explanation": "תוחלת מותנית תלויה בפילוג המשותף המלא. נוסחת LMMSE אינה דורשת גאוסיות, אך שוויונה לאופטימום הכללי אינו מובטח בלעדיה.",
      "links": [
        "cm_gaussian-vector",
        "cm_mmse"
      ],
      "sources": [
        {
          "file": "Random Signals - Tutorial 05.pdf",
          "pages": [
            1,
            2,
            4
          ],
          "section": "משפט 1, טענה 3 וסעיף 6 בתרגיל 1"
        }
      ],
      "origin": "direct"
    },
    {
      "id": "cm_gaussian-noise",
      "course": "signals",
      "unit": "conditional-moments",
      "title": "אות גאוסי עם רעש גאוסי נוסף",
      "type": "Formula",
      "topic": "שערוך מותנה",
      "statement": "נניח X ו־N גאוסיים בלתי תלויים, Y=X+N, וסכום השונויות חיובי. התוחלת המותנית משקללת את התצפית הממורכזת, והשונות המותנית שווה למכפלת שונויות האות והרעש חלקי סכומן.",
      "formula": "\\begin{aligned}\\mathbb E[X\\mid Y]&=\\mu_X+\\frac{\\sigma_X^2}{\\sigma_X^2+\\sigma_N^2}(Y-\\mu_X-\\mu_N)\\\\\\operatorname{Var}(X\\mid Y)&=\\frac{\\sigma_X^2\\sigma_N^2}{\\sigma_X^2+\\sigma_N^2}\\end{aligned}",
      "question": "אות ורעש גאוסיים בלתי תלויים עם שונויות 2 ו־3 נמדדים דרך סכומם. מהי השונות המותנית של האות?",
      "choices": [
        "5",
        "2",
        "6/5",
        "2/5"
      ],
      "answer": 2,
      "explanation": "מציבים מכפלה חלקי סכום: 2·3/(2+3)=6/5. בגאוסיות משותפת אין תלות בערך המדידה.",
      "links": [
        "cm_gaussian-scalar",
        "cm_lmmse-vs-mmse"
      ],
      "sources": [
        {
          "file": "Random Signals - Tutorial 03.pdf",
          "pages": [
            3
          ],
          "section": "טענות 6–7"
        },
        {
          "file": "Random Signals - Tutorial 05.pdf",
          "pages": [
            1
          ],
          "section": "משערך לינארי בתצפית בודדת"
        }
      ],
      "origin": "derived"
    },
    {
      "id": "cm_piecewise",
      "course": "signals",
      "unit": "conditional-moments",
      "title": "פילוג מותנה מעורב: אותה תוחלת, שונות שונה",
      "type": "Claim",
      "topic": "שונות מותנית",
      "statement": "בדוגמה מהתרגול, Y בעל צפיפות לפלס ½e^{−|y|}. אם y<0 אז X=y; אם y≥0 אז X אחיד ב־[y−1,y+1]. בכל המקרים E[X|Y]=Y, אך השונות המותנית מבחינה בין הענפים.",
      "formula": "\\mathbb E[X\\mid Y]=Y,\\qquad \\operatorname{Var}(X\\mid Y)=\\tfrac13\\mathbf1_{\\{Y\\geq0\\}}",
      "question": "בדוגמה שבה X=Y כאשר Y<0 ו־X אחיד ב־[Y−1,Y+1] אחרת, מהי Var(X|Y)?",
      "choices": [
        "⅓ כפול האינדיקטור של Y≥0",
        "⅓ תמיד",
        "Y² תמיד",
        "אפס תמיד כי E[X|Y]=Y"
      ],
      "answer": 0,
      "explanation": "בענף השלילי X ידוע בדיוק. בענף האחר שונות אחידה בקטע באורך 2 היא 2²/12=⅓. תוחלת מותנית לבדה אינה קובעת שונות.",
      "links": [
        "cm_variance",
        "cm_mean-continuous",
        "cm_variance-zero"
      ],
      "sources": [
        {
          "file": "Random Signals - Tutorial 02.pdf",
          "pages": [
            6,
            7
          ],
          "section": "תרגיל 3; השונות נגזרת מן הפילוג הנתון"
        }
      ],
      "origin": "derived"
    },
    {
      "id": "cm_piecewise-total",
      "course": "signals",
      "unit": "conditional-moments",
      "title": "שונות כוללת בדוגמת לפלס והקטע האחיד",
      "type": "Formula",
      "topic": "שונות מותנית",
      "statement": "בדוגמה המעורבת של תרגיל 3 בקובץ 02, ל־Y תוחלת 0 ושונות 2. ממוצע השונות המותנית הוא 1/6, והתוחלת המותנית היא Y. לכן שונות X היא 13/6.",
      "formula": "\\operatorname{Var}(X)=\\tfrac13 P(Y\\geq0)+\\operatorname{Var}(Y)=\\tfrac16+2=\\tfrac{13}{6}",
      "question": "בדוגמה המעורבת עם Y בצפיפות ½e^{−|y|}, מהי Var(X)?",
      "choices": [
        "2",
        "1/6",
        "7/3",
        "13/6"
      ],
      "answer": 3,
      "explanation": "מוסיפים את שני איברי חוק השונות השלמה. ההסתברות לענף האחיד היא ½.",
      "links": [
        "cm_piecewise",
        "cm_total-variance"
      ],
      "sources": [
        {
          "file": "Random Signals - Tutorial 02.pdf",
          "pages": [
            6,
            7
          ],
          "section": "הרחבה לתרגיל 3"
        }
      ],
      "origin": "derived"
    },
    {
      "id": "cm_cube-vs-square",
      "course": "signals",
      "unit": "conditional-moments",
      "title": "תצפית בחזקה שלישית לעומת ריבוע",
      "type": "Claim",
      "topic": "תוחלת מותנית",
      "statement": "באותה דוגמת לפלס, E[X|Y]=Y. צפייה ב־Y³ אינה מאבדת מידע, ולכן התוחלת המותנית נשארת Y. צפייה ב־Y² מאבדת את הסימן; סימטריית Y ומשפט המגדל נותנים תוחלת מותנית אפס.",
      "formula": "\\mathbb E[X\\mid Y^3]=Y,\\qquad \\mathbb E[X\\mid Y^2]=0",
      "question": "בדוגמת לפלס הסימטרית שבה E[X|Y]=Y, מהי E[X|Y²]?",
      "choices": [
        "Y",
        "0",
        "Y²",
        "השורש החיובי של Y²"
      ],
      "answer": 1,
      "explanation": "ראשית מתנים ב־Y, ואז ממצעים אותו בהינתן הריבוע. שני הסימנים סימטריים. לעומת זאת החזקה השלישית הפיכה.",
      "links": [
        "cm_invertible",
        "cm_nested-information",
        "cm_piecewise"
      ],
      "sources": [
        {
          "file": "Random Signals - Tutorial 02.pdf",
          "pages": [
            7
          ],
          "section": "תרגיל 3, סעיף 3; התניה בריבוע היא הרחבה"
        }
      ],
      "origin": "derived"
    },
    {
      "id": "cm_poisson-power",
      "course": "signals",
      "unit": "conditional-moments",
      "title": "בחירת משתנה העזר: חזקה פואסונית של גאוסי",
      "type": "Formula",
      "topic": "תוחלת מותנית",
      "statement": "יהיו X גאוסי ממורכז עם שונות σ² ו־N פואסוני בקצב λ, בלתי תלויים. עבור X בחזקת N נוח להתנות ב־X: אז נותרת פונקציית יצירת ההסתברות של N. המיצוע החיצוני משתמש ביוצרת המומנטים הגאוסית.",
      "formula": "\\mathbb E[X^N\\mid X]=e^{\\lambda(X-1)},\\qquad \\mathbb E[X^N]=e^{-\\lambda+\\lambda^2\\sigma^2/2}",
      "question": "אם X גאוסי ממורכז עם שונות 1, ו־N פואסוני עם פרמטר 2 ובלתי תלוי בו, מהי E[X^N]?",
      "choices": [
        "0",
        "e²",
        "1",
        "e⁻²"
      ],
      "answer": 2,
      "explanation": "התניה ב־X נותנת exp(2X−2). תוחלת האקספוננט הגאוסי מוסיפה exp(2), ולכן מתקבל 1.",
      "links": [
        "cm_tower",
        "cm_mean-discrete",
        "cm_independence"
      ],
      "sources": [
        {
          "file": "Random Signals - Tutorial 02.pdf",
          "pages": [
            5,
            6
          ],
          "section": "תרגיל 2: שלוש דרכי פתרון"
        }
      ],
      "origin": "direct"
    },
    {
      "id": "cm_absolute",
      "course": "signals",
      "unit": "conditional-moments",
      "title": "מדידת הערך המוחלט של גאוסי",
      "type": "Formula",
      "topic": "שערוך מותנה",
      "statement": "אם X גאוסי ממורכז עם שונות σ²>0 ונצפה W=|X|, שני הסימנים נשארים סימטריים. לכן התוחלת המותנית אפס, אך אי־הוודאות המותנית היא W². המדידה אינה מפחיתה את שגיאת MMSE של X עצמו.",
      "formula": "\\mathbb E[X\\mid W]=0,\\quad \\operatorname{Var}(X\\mid W)=W^2,\\quad \\operatorname{MMSE}=\\sigma^2",
      "question": "לאחר מדידת |X|=3σ של גאוסי ממורכז, מהי השונות המותנית של X?",
      "choices": [
        "0",
        "σ²",
        "3σ²",
        "9σ²"
      ],
      "answer": 3,
      "explanation": "התוחלת המותנית אפס והמומנט השני ידוע ושווה ל־9σ². זו דוגמה לשונות מותנית שיכולה להיות גדולה מן השונות השולית.",
      "links": [
        "cm_variance",
        "cm_mmse-identities",
        "cm_information"
      ],
      "sources": [
        {
          "file": "Random Signals - Tutorial 04.pdf",
          "pages": [
            5,
            6
          ],
          "section": "תרגיל 3, סעיף 1; השונות המותנית נגזרת מן המדידה"
        }
      ],
      "origin": "derived"
    },
    {
      "id": "cm_sign",
      "course": "signals",
      "unit": "conditional-moments",
      "title": "מדידת הסימן של גאוסי",
      "type": "Formula",
      "topic": "שערוך מותנה",
      "statement": "אם X גאוסי ממורכז עם שונות σ²>0 ונמדד B=sign(X), הערך המוחלט בלתי תלוי בסימן וממוצעו σ√(2/π). התוחלת המותנית משתנה עם הסימן; השונות המותנית קבועה.",
      "formula": "\\mathbb E[X\\mid B]=B\\sigma\\sqrt{2/\\pi},\\quad \\operatorname{Var}(X\\mid B)=\\operatorname{MMSE}=\\sigma^2(1-2/\\pi)",
      "question": "מה ההבדל בין מדידת הסימן למדידת הערך המוחלט של גאוסי ממורכז, בשערוך X?",
      "choices": [
        "מדידת הסימן מקטינה MMSE, ואילו מדידת הערך המוחלט לבדה אינה מקטינה אותו",
        "שתיהן תמיד משחזרות את X",
        "רק הערך המוחלט מקטין MMSE",
        "מדידת הסימן נותנת תוחלת מותנית אפס"
      ],
      "answer": 0,
      "explanation": "הסימן מכוון את המשערך לצד הנכון של האפס. מדידת הגודל בלבד משאירה סימטריה מלאה בין שני הצדדים.",
      "links": [
        "cm_pull-out",
        "cm_independence",
        "cm_absolute"
      ],
      "sources": [
        {
          "file": "Random Signals - Tutorial 04.pdf",
          "pages": [
            5,
            6,
            7
          ],
          "section": "תרגיל 3"
        }
      ],
      "origin": "derived"
    },
    {
      "id": "cm_poisson-split",
      "course": "signals",
      "unit": "conditional-moments",
      "title": "אות ורעש פואסוניים: הפילוג לאחר מדידת הסכום",
      "type": "Formula",
      "topic": "שערוך מותנה",
      "statement": "נניח X~Pois(λ_X), N~Pois(λ_N), בלתי תלויים, וסכום הקצבים חיובי. אם Y=X+N, מספר האירועים שמקורם באות בהינתן הסך הכולל y הוא בינומי עם הסתברות p=λ_X/(λ_X+λ_N).",
      "formula": "X\\mid(Y=y)\\sim\\operatorname{Bin}(y,p),\\qquad p=\\frac{\\lambda_X}{\\lambda_X+\\lambda_N}",
      "question": "שני מוני פואסון בלתי תלויים עם קצבים 2 ו־3 נסכמים ל־Y. מהו פילוג המונה הראשון בהינתן Y=10?",
      "choices": [
        "פואסוני עם פרמטר 2",
        "בינומי עם 10 ניסיונות והסתברות 2/5",
        "אחיד על השלמים מ־0 עד 10",
        "גאוסי עם תוחלת 4"
      ],
      "answer": 1,
      "explanation": "הסכום הידוע מגביל את התמיכה ל־0,…,10. בייס ופירוק ההסתברויות הפואסוניות נותנים פילוג בינומי.",
      "links": [
        "cm_law-discrete",
        "cm_mean-discrete"
      ],
      "sources": [
        {
          "file": "Random Signals - Tutorial 04.pdf",
          "pages": [
            4
          ],
          "section": "תרגיל 2"
        }
      ],
      "origin": "direct"
    },
    {
      "id": "cm_poisson-moments",
      "course": "signals",
      "unit": "conditional-moments",
      "title": "שונות מותנית ו־MMSE באות פואסוני",
      "type": "Formula",
      "topic": "שערוך מותנה",
      "statement": "במודל אות ורעש פואסוניים, משערך MMSE הוא לינארי למרות שהמודל אינו גאוסי. השונות המותנית תלויה בסך האירועים שנמדד; שגיאת MMSE מתקבלת ממיצועה.",
      "formula": "\\mathbb E[X\\mid Y]=pY,\\quad \\operatorname{Var}(X\\mid Y)=p(1-p)Y,\\quad \\operatorname{MMSE}=\\frac{\\lambda_X\\lambda_N}{\\lambda_X+\\lambda_N}",
      "question": "במודל הפואסוני עם קצבים 2 ו־3, מהי Var(X|Y=10)?",
      "choices": [
        "6/5",
        "4",
        "12/5",
        "2/5"
      ],
      "answer": 2,
      "explanation": "מחשבים שונות בינומית מותנית: 10·(2/5)·(3/5)=12/5. MMSE הלא מותנה הוא 6/5, מספר שונה.",
      "links": [
        "cm_poisson-split",
        "cm_variance",
        "cm_mmse-identities"
      ],
      "sources": [
        {
          "file": "Random Signals - Tutorial 04.pdf",
          "pages": [
            4,
            5
          ],
          "section": "תרגיל 2; השונות ו־MMSE הם הרחבה"
        }
      ],
      "origin": "derived"
    },
    {
      "id": "cm_sum-conditioning",
      "course": "signals",
      "unit": "conditional-moments",
      "title": "התניה בסכום יוצרת תלות",
      "type": "Claim",
      "topic": "שונות מותנית",
      "statement": "באותו מודל פואסוני, X ו־N בלתי תלויים לפני התצפית. לאחר ידיעת Y=X+N, מתקיים N=Y−X ולכן הם בעלי קווריאנס מותנה שלילי. שונות הסכום המותנית היא אפס.",
      "formula": "\\operatorname{Cov}(X,N\\mid Y)=-\\operatorname{Var}(X\\mid Y)=-p(1-p)Y",
      "question": "לאחר שמתנים בסכום של אות ורעש פואסוניים בלתי תלויים, האם האות והרעש נשארים בהכרח בלתי תלויים?",
      "choices": [
        "כן, כי ההתניה אינה משנה אי־תלות",
        "כן, כי שני השוליים פואסוניים",
        "כן, אם תוחלת הרעש ידועה",
        "לא; הסכום הידוע קושר ביניהם"
      ],
      "answer": 3,
      "explanation": "אם יותר אירועים משויכים לאות, פחות יכולים להיות משויכים לרעש. זו הסיבה שלא משמיטים קווריאנס מותנה על סמך אי־תלות שולית.",
      "links": [
        "cm_poisson-split",
        "cm_conditional-cov",
        "cm_pull-out"
      ],
      "sources": [
        {
          "file": "Random Signals - Tutorial 04.pdf",
          "pages": [
            4
          ],
          "section": "הרחבה לתרגיל 2"
        }
      ],
      "origin": "derived"
    },
    {
      "id": "cm_walk",
      "course": "signals",
      "unit": "conditional-moments",
      "title": "חיזוי סכום מצטבר מתוך העבר",
      "type": "Formula",
      "topic": "יישומים בתהליכים",
      "statement": "יהיו X_i בלתי תלויים ושווי התפלגות, עם תוחלת אפס ושונות σ², ו־S_n סכומם עד n. עבור m≤n, ידיעת S_m מספיקה לתוחלת של S_n גם אם כל ההיסטוריה עד m נתונה. התוספות העתידיות בלתי תלויות בעבר.",
      "formula": "\\mathbb E[S_n\\mid S_1,\\ldots,S_m]=S_m,\\qquad \\operatorname{Var}(S_n\\mid S_1,\\ldots,S_m)=(n-m)\\sigma^2",
      "question": "בסכום מצטבר של תוספות בלתי תלויות ממורכזות, מהי התוחלת של S_n בהינתן כל הסכומים עד m≤n?",
      "choices": [
        "S_m",
        "אפס תמיד",
        "S_n",
        "(n/m)S_m תמיד"
      ],
      "answer": 0,
      "explanation": "העתיד מתפרק לסכום שכבר ידוע ולתוספות עתידיות שתוחלתן אפס. השונות שנותרת היא סכום שונויות התוספות.",
      "links": [
        "cm_linearity",
        "cm_pull-out",
        "cm_independence"
      ],
      "sources": [
        {
          "file": "Random Signals - Tutorial 04.pdf",
          "pages": [
            2,
            3
          ],
          "section": "תרגיל 1, סעיפים 1–2"
        }
      ],
      "origin": "derived"
    },
    {
      "id": "cm_random-index",
      "course": "signals",
      "unit": "conditional-moments",
      "title": "סכום מצטבר בזמן תצפית אקראי",
      "type": "Formula",
      "topic": "יישומים בתהליכים",
      "statement": "במודל הסכום המצטבר הממורכז, M בלתי תלוי בכל סדרת התוספות ומקבל ערכים מ־1 עד n. גם אם נמדד רק S_M ולא ערך M, התוחלת המותנית של S_n היא S_M. משתמשים בהחלקה דרך M.",
      "formula": "\\mathbb E[S_n\\mid S_M]=\\mathbb E[\\mathbb E[S_n\\mid S_M,M]\\mid S_M]=S_M",
      "question": "אם זמן התצפית M אינו ידוע אך S_M נמדד, מהו משערך MMSE של S_n בתנאי התרגיל?",
      "choices": [
        "E[M]",
        "אפס",
        "S_M",
        "S_M רק אם M קבוע"
      ],
      "answer": 2,
      "explanation": "עבור כל ערך m של M, המשערך הפנימי הוא S_M. המיצוע על M אינו משנה אותו.",
      "links": [
        "cm_walk",
        "cm_tower-conditional"
      ],
      "sources": [
        {
          "file": "Random Signals - Tutorial 04.pdf",
          "pages": [
            2,
            3
          ],
          "section": "תרגיל 1, סעיף 3"
        }
      ],
      "origin": "direct"
    },
    {
      "id": "cm_random-index-var",
      "course": "signals",
      "unit": "conditional-moments",
      "title": "שונות מותנית בזמן תצפית לא ידוע",
      "type": "Formula",
      "topic": "יישומים בתהליכים",
      "statement": "בתנאי התרגיל עם M בלתי תלוי בסדרת התוספות, כשערך M אינו נמדד, מספר התוספות העתידיות הממוצע לאחר התצפית תלוי ב־S_M. רק בממוצע הכולל אפשר להחליף אותו ב־E[M].",
      "formula": "\\operatorname{Var}(S_n\\mid S_M)=\\sigma^2\\bigl(n-\\mathbb E[M\\mid S_M]\\bigr),\\quad \\operatorname{MMSE}=\\sigma^2(n-\\mathbb E[M])",
      "question": "מה נכון לגבי Var(S_n|S_M) כאשר M אינו נמדד?",
      "choices": [
        "היא בהכרח שווה ל־(n−E[M])σ² בכל תצפית",
        "היא תלויה בדרך כלל ב־E[M|S_M]; רק ממוצעה משתמש ב־E[M]",
        "היא תמיד אפס",
        "היא תמיד nσ²"
      ],
      "answer": 1,
      "explanation": "בפירוק השונות המותנית דרך M, התוחלת הפנימית היא S_M ולכן שונותה המותנית אפס. נשאר למצע (n−M)σ² בהינתן S_M.",
      "links": [
        "cm_random-index",
        "cm_conditional-total-variance"
      ],
      "sources": [
        {
          "file": "Random Signals - Tutorial 04.pdf",
          "pages": [
            3,
            4
          ],
          "section": "תרגיל 1, סעיף 3; השונות המותנית היא הרחבה"
        }
      ],
      "origin": "derived"
    },
    {
      "id": "cm_random-gaussian-sum",
      "course": "signals",
      "unit": "conditional-moments",
      "title": "סכום אקראי של גאוסיים אינו בהכרח גאוסי",
      "type": "Claim",
      "topic": "יישומים בתהליכים",
      "statement": "יהיו X_i בלתי תלויים גאוסיים ממורכזים עם שונות σ²>0, ו־N בלתי תלוי בסדרה ומקבל 1 או 2 בהסתברות שווה. הסכום עד N גאוסי בהינתן N, אך ללא ההתניה הוא תערובת של שונויות שונות.",
      "formula": "S_N\\mid N\\sim\\mathcal N(0,N\\sigma^2),\\quad \\operatorname{Var}(S_N)=\\tfrac32\\sigma^2,\\quad \\mathbb E[S_N\\mid N]=0",
      "question": "מדוע סכום עד מספר אקראי של איברים גאוסיים אינו בהכרח גאוסי?",
      "choices": [
        "כי סכום של שני גאוסיים אינו גאוסי",
        "כי תוחלת מותנית אפס מחייבת שונות אפס",
        "כי אי אפשר להתנות במספר האיברים",
        "כי לאחר מיצוע ההתניה מתקבלת תערובת, למשל של שונויות שונות"
      ],
      "answer": 3,
      "explanation": "גאוסיות בכל ערך של משתנה העזר אינה מבטיחה גאוסיות של התערובת. כאן המקדמים או מספר האיברים אקראיים.",
      "links": [
        "cm_tower",
        "cm_total-variance",
        "cm_gaussian-scalar"
      ],
      "sources": [
        {
          "file": "Random Signals - Tutorial 03.pdf",
          "pages": [
            5,
            6
          ],
          "section": "תרגיל 3"
        }
      ],
      "origin": "derived"
    },
    {
      "id": "cm_sign-flip",
      "course": "signals",
      "unit": "conditional-moments",
      "title": "שוליים גאוסיים אינם גאוסיות במשותף",
      "type": "Claim",
      "topic": "שערוך מותנה",
      "statement": "יהיו X~N(0,1) וסימן B=±1 שווה־הסתברות ובלתי תלוי בו, ונגדיר Y=BX. השוליים גאוסיים וחסרי מתאם, אך הזוג אינו גאוסי במשותף. בהינתן X, הממוצע של Y אפס והשונות שלו X².",
      "formula": "\\mathbb E[Y\\mid X]=0,\\qquad \\operatorname{Var}(Y\\mid X)=X^2,\\qquad |Y|=|X|",
      "question": "במודל Y=BX, האם E[Y|X]=0 מוכיח אי־תלות?",
      "choices": [
        "לא; התלות ניכרת למשל בכך ש־|Y|=|X|",
        "כן, לכל משתנים בעלי תוחלת אפס",
        "כן, משום ששני השוליים גאוסיים",
        "כן, כי גם הקווריאנס אפס"
      ],
      "answer": 0,
      "explanation": "שוויון בתוחלת המותנית אינו שוויון של כל הפילוגים המותנים. השונות המותנית תלויה ב־X.",
      "links": [
        "cm_gaussian-scalar",
        "cm_variance",
        "cm_independence"
      ],
      "sources": [
        {
          "file": "Random Signals - Tutorial 03.pdf",
          "pages": [
            4,
            5
          ],
          "section": "תרגיל 1"
        }
      ],
      "origin": "derived"
    },
    {
      "id": "cm_redundant",
      "course": "signals",
      "unit": "conditional-moments",
      "title": "מדידות גאוסיות מיותרות וקווריאנס סינגולרי",
      "type": "Claim",
      "topic": "שערוך מותנה",
      "statement": "בתרגיל 1 בקובץ 05, הווקטור (X,Y₁,Y₂,Y₃) גאוסי ממורכז, Var(X)=1, Cov(Y,X)=(1,1,2)ᵀ ומטריצת Cov(Y) נתונה בנוסחה. מתקיים Y₃=Y₁+Y₂ כמעט בוודאות; מספיק לשערך באמצעות Y₁.",
      "formula": "\\Sigma_Y=\\begin{pmatrix}2&2&4\\\\2&3&5\\\\4&5&9\\end{pmatrix},\\quad \\mathbb E[X\\mid Y]=\\tfrac12Y_1,\\quad\\operatorname{Var}(X\\mid Y)=\\tfrac12",
      "question": "בתרגיל עם Cov(Y) הסינגולרית הנתונה, מה עושים במקום להפוך אותה ישירות?",
      "choices": [
        "מסיקים שאין תוחלת מותנית",
        "מוסיפים רעש שרירותי ל־X כחלק מההגדרה",
        "מסירים מדידות תלויות לינארית ופועלים במידע שאינו מיותר",
        "מחליפים את כל המדידות בממוצע שלהן ללא בדיקה"
      ],
      "answer": 2,
      "explanation": "הסינגולריות כאן מתארת יתירות. לאחר צמצום מתקבל משערך MMSE יחיד כמשתנה מקרי, אף שייתכנו וקטורי מקדמים שונים שמייצגים אותו.",
      "links": [
        "cm_gaussian-vector",
        "cm_lmmse-vs-mmse"
      ],
      "sources": [
        {
          "file": "Random Signals - Tutorial 05.pdf",
          "pages": [
            2,
            3,
            4
          ],
          "section": "תרגיל 1"
        }
      ],
      "origin": "derived"
    },
    {
      "id": "cm_common-amplitude",
      "course": "signals",
      "unit": "conditional-moments",
      "title": "אותו פילוג שולי, חיזוי מותנה שונה",
      "type": "Claim",
      "topic": "יישומים בתהליכים",
      "statement": "בקובץ 06 ניתנים X_n=A n² ו־Y_n=B_n n², עם A וברנולים B_n בעלי הסתברות ½, ועם B_n בלתי תלויים. לשני התהליכים אותם שוליים, אך תצפית X_m עם m≠0 מגלה את A, בעוד תצפית Y_m אינה מגלה את B_n עבור n≠m.",
      "formula": "\\begin{aligned}\\mathbb E[X_n\\mid X_m]&=\\tfrac{n^2}{m^2}X_m,&\\operatorname{Var}(X_n\\mid X_m)&=0\\\\\\mathbb E[Y_n\\mid Y_m]&=\\tfrac12 n^2,&\\operatorname{Var}(Y_n\\mid Y_m)&=\\tfrac14 n^4\\end{aligned}",
      "question": "בשני התהליכים בעלי שוליים זהים בקובץ 06, האם תצפית בזמן אחר נותנת בהכרח אותו MMSE?",
      "choices": [
        "כן, השוליים קובעים את התוחלת המותנית",
        "לא; בפקטור אקראי משותף אפשר לחשוף את האות כולו, בניגוד לתוספות הבלתי תלויות",
        "כן, אם התוחלות שוות",
        "כן, אם שניהם מקבלים שני ערכים בכל זמן"
      ],
      "answer": 1,
      "explanation": "לשערוך דרוש הפילוג המשותף בזמן. בדוגמה הראשונה יש גורם משותף, ובשנייה הדגימות בזמנים שונים בלתי תלויות.",
      "links": [
        "cm_independence",
        "cm_variance-zero"
      ],
      "sources": [
        {
          "file": "Random Signals - Tutorial 06.pdf",
          "pages": [
            2,
            3
          ],
          "section": "הרחבה לתרגיל 1"
        }
      ],
      "origin": "derived"
    },
    {
      "id": "cm_poisson-forward",
      "course": "signals",
      "unit": "conditional-moments",
      "title": "חיזוי קדימה בתהליך פואסון",
      "type": "Formula",
      "topic": "יישומים בתהליכים",
      "statement": "בתהליך פואסון בקצב λ, עבור 0≤s<t, התוספת N_t−N_s בלתי תלויה בעבר ובעלת פילוג Pois(λ(t−s)). לכן מוסיפים את ממוצע התוספת לתצפית שכבר ידועה.",
      "formula": "\\mathbb E[N_t\\mid N_s]=N_s+\\lambda(t-s),\\qquad \\operatorname{Var}(N_t\\mid N_s)=\\lambda(t-s)",
      "question": "בתהליך פואסון עם קצב 3, נמדד N₁=4. מהי E[N₂|N₁=4]?",
      "choices": [
        "4",
        "3",
        "12",
        "7"
      ],
      "answer": 3,
      "explanation": "לאחר הזמן 1 צפויים עוד 3 אירועים עד הזמן 2, ללא תלות בספירה שכבר נמדדה.",
      "links": [
        "cm_independence",
        "cm_pull-out",
        "cm_variance"
      ],
      "sources": [
        {
          "file": "Random Signals - Tutorial 07.pdf",
          "pages": [
            1,
            2,
            4
          ],
          "section": "בכותרת: תרגול 10; תרגיל 3, סעיף 1"
        }
      ],
      "origin": "derived"
    },
    {
      "id": "cm_poisson-bridge",
      "course": "signals",
      "unit": "conditional-moments",
      "title": "התניה בספירה עתידית: גשר פואסוני",
      "type": "Formula",
      "topic": "יישומים בתהליכים",
      "statement": "בתהליך פואסון הומוגני, עבור 0≤s≤t ו־t>0, בהינתן N_t=n מספר האירועים עד s בינומי עם הסתברות s/t. זהו חישוב לאחור, השונה מחיזוי בעזרת תוספת עתידית בלתי תלויה.",
      "formula": "N_s\\mid N_t\\sim\\operatorname{Bin}(N_t,s/t),\\quad \\mathbb E[N_s\\mid N_t]=\\tfrac{s}{t}N_t,\\quad\\operatorname{Var}(N_s\\mid N_t)=\\tfrac{s}{t}(1-\\tfrac{s}{t})N_t",
      "question": "אם ידוע שבתהליך פואסון התרחשו 12 אירועים עד הזמן 3, מהי E[N₁|N₃=12]?",
      "choices": [
        "4",
        "12+2λ",
        "12",
        "λ בלבד"
      ],
      "answer": 0,
      "explanation": "מפרקים את N₃ לסכום של שתי ספירות פואסוניות בלתי תלויות. בהינתן הסכום מתקבל פיצול בינומי ביחס אורכי הקטעים.",
      "links": [
        "cm_poisson-split",
        "cm_poisson-forward"
      ],
      "sources": [
        {
          "file": "Random Signals - Tutorial 07.pdf",
          "pages": [
            1,
            2,
            5
          ],
          "section": "נגזר מתוספות פואסוניות ומהתניה במספר האירועים"
        },
        {
          "file": "Random Signals - Tutorial 04.pdf",
          "pages": [
            4
          ],
          "section": "פיצול סכום פואסוני"
        }
      ],
      "origin": "derived"
    },
    {
      "id": "cm_poisson-arrival",
      "course": "signals",
      "unit": "conditional-moments",
      "title": "זמן אירוע יחיד בהינתן מספר האירועים",
      "type": "Formula",
      "topic": "יישומים בתהליכים",
      "statement": "בתהליך פואסון, אם ידוע שעד זמן t>0 התרחש בדיוק אירוע אחד, זמן האירוע T₁ אחיד על הקטע [0,t]. לפני התניה זו T₁ מעריכי; ההתניה משנה את הפילוג.",
      "formula": "T_1\\mid\\{N_t=1\\}\\sim U[0,t],\\quad \\mathbb E[T_1\\mid N_t=1]=t/2,\\quad\\operatorname{Var}(T_1\\mid N_t=1)=t^2/12",
      "question": "נודע שעד הזמן 6 התרחש בדיוק אירוע פואסוני אחד. מהי השונות המותנית של זמן האירוע?",
      "choices": [
        "6/λ",
        "3",
        "1/λ²",
        "36"
      ],
      "answer": 1,
      "explanation": "לאחר ההתניה זמן האירוע אחיד ב־[0,6], ולכן השונות היא 6²/12=3.",
      "links": [
        "cm_event-mean",
        "cm_mean-continuous",
        "cm_variance"
      ],
      "sources": [
        {
          "file": "Random Signals - Tutorial 07.pdf",
          "pages": [
            5
          ],
          "section": "בכותרת: תרגול 10; תרגיל 4. המומנטים נגזרים מאחידות"
        }
      ],
      "origin": "derived"
    },
    {
      "id": "cm_random-time",
      "course": "signals",
      "unit": "conditional-moments",
      "title": "מדידת תהליך פואסון בזמן אקראי בלתי תלוי",
      "type": "Formula",
      "topic": "יישומים בתהליכים",
      "statement": "יהי M_t תהליך פואסון בקצב μ ו־T זמן לא־שלילי הבלתי תלוי בכל התהליך, עם מומנט שני סופי. בהינתן T מתקבל פילוג Pois(μT); לאחר המיצוע, אקראיות הזמן מוסיפה שונות.",
      "formula": "\\mathbb E[M_T\\mid T]=\\mu T,\\quad \\operatorname{Var}(M_T\\mid T)=\\mu T,\\quad \\operatorname{Var}(M_T)=\\mu\\mathbb E[T]+\\mu^2\\operatorname{Var}(T)",
      "question": "מהו האיבר שמתווסף לשונות הספירה בגלל אקראיות זמן המדידה, כשהזמן בלתי תלוי בתהליך?",
      "choices": [
        "μ²Var(T)",
        "Var(M₁) בלבד",
        "אפס תמיד",
        "μE[T] בריבוע תמיד"
      ],
      "answer": 0,
      "explanation": "זהו האיבר Var(E[M_T|T]) בחוק השונות השלמה. הוא אינו נכלל בממוצע השונות הפואסונית המותנית.",
      "links": [
        "cm_total-variance",
        "cm_tower"
      ],
      "sources": [
        {
          "file": "Random Signals - Tutorial 07.pdf",
          "pages": [
            4,
            5
          ],
          "section": "בכותרת: תרגול 10; הרחבה לתרגיל 3, סעיף 2"
        }
      ],
      "origin": "derived"
    },
    {
      "id": "cm_cross-arrivals",
      "course": "signals",
      "unit": "conditional-moments",
      "title": "ספירה בזמן הקפיצה של תהליך אחר",
      "type": "Formula",
      "topic": "יישומים בתהליכים",
      "statement": "יהיו N_t ו־M_t תהליכי פואסון בלתי תלויים באותו קצב λ, ו־T_n זמן הקפיצה ה־n של N. אז E[T_n]=n/λ ו־Var(T_n)=n/λ². התניה ב־T_n נותנת תוחלת ספירה n ושונות ספירה 2n.",
      "formula": "\\mathbb E[M_{T_n}]=n,\\qquad\\operatorname{Var}(M_{T_n})=2n",
      "question": "שני תהליכי פואסון בלתי תלויים באותו קצב. מהי Var(M_{T₃}), כאשר T₃ זמן הקפיצה השלישית של N?",
      "choices": [
        "3",
        "9",
        "6",
        "0"
      ],
      "answer": 2,
      "explanation": "חוק השונות השלמה נותן λE[T₃]+λ²Var(T₃)=3+3=6. השונות גדולה מן התוחלת כי זמן המדידה אקראי.",
      "links": [
        "cm_random-time"
      ],
      "sources": [
        {
          "file": "Random Signals - Tutorial 07.pdf",
          "pages": [
            2,
            4,
            5
          ],
          "section": "בכותרת: תרגול 10; תרגיל 3, סעיף 2. השונות היא הרחבה"
        }
      ],
      "origin": "derived"
    },
    {
      "id": "cm_dependent-time",
      "course": "signals",
      "unit": "conditional-moments",
      "title": "זהירות: זמן המדידה תלוי בתהליך",
      "type": "Claim",
      "topic": "יישומים בתהליכים",
      "statement": "אם T_n הוא זמן הקפיצה ה־n של N עצמו, אז N_{T_n}=n בהגדרת הספירה הכוללת את הקפיצה. אסור להתייחס ל־N_{T_n} בהינתן T_n כפואסוני בפרמטר λT_n; זהות זו דרשה זמן חיצוני בלתי תלוי.",
      "formula": "N_{T_n}=n\\ \\text{a.s.},\\qquad \\mathbb E[N_{T_n}]=n,\\quad\\operatorname{Var}(N_{T_n})=0",
      "question": "מדוע אי אפשר להציב זמן קפיצה של N עצמו בנוסחת הפילוג של N_T לזמן עצמאי?",
      "choices": [
        "כי זמן קפיצה אינו ממשי",
        "כי הזמן תלוי בתהליך, ובזמן הקפיצה ה־n הספירה ידועה בדיוק",
        "כי לכל זמן אקראי השונות אינסופית",
        "כי תהליך פואסון אינו תהליך מנייה"
      ],
      "answer": 1,
      "explanation": "החלפת זמן קבוע בזמן אקראי אינה חופשית. בדוגמת שני התהליכים העצמאיים התנאי מתקיים, ובתהליך עצמו לא.",
      "links": [
        "cm_random-time",
        "cm_cross-arrivals"
      ],
      "sources": [
        {
          "file": "Random Signals - Tutorial 07.pdf",
          "pages": [
            5
          ],
          "section": "הערה לאחר תרגיל 3"
        }
      ],
      "origin": "derived"
    },
    {
      "id": "cm_telegraph",
      "course": "signals",
      "unit": "conditional-moments",
      "title": "מומנטים מותנים של אות טלגרף",
      "type": "Formula",
      "topic": "יישומים בתהליכים",
      "statement": "אות טלגרף מקבל ±1 ומחליף סימן בקצב פואסוני λ. עבור τ≥0, התניה בערך הנוכחי משאירה רק את הזוגיות של מספר המעברים העתידי. המומנט השני המותנה שווה תמיד ל־1.",
      "formula": "\\mathbb E[X_{t+\\tau}\\mid X_t]=e^{-2\\lambda\\tau}X_t,\\qquad\\operatorname{Var}(X_{t+\\tau}\\mid X_t)=1-e^{-4\\lambda\\tau}",
      "question": "באות טלגרף, מהו E[X²_{t+τ}|X_t]?",
      "choices": [
        "e⁻⁴λτ",
        "אפס",
        "1−e⁻⁴λτ",
        "1"
      ],
      "answer": 3,
      "explanation": "ריבוע האות הוא 1 בכל מימוש. כדי לקבל שונות מותנית מחסרים ממנו את ריבוע התוחלת המותנית.",
      "links": [
        "cm_variance",
        "cm_poisson-forward"
      ],
      "sources": [
        {
          "file": "Random Signals - Tutorial 07.pdf",
          "pages": [
            2,
            3,
            4
          ],
          "section": "בכותרת: תרגול 10; הרחבה לתרגילים 1–2"
        }
      ],
      "origin": "derived"
    },
    {
      "id": "cm_random-phase",
      "course": "signals",
      "unit": "conditional-moments",
      "title": "פאזה אקראית: ממוצע מותנה אפס ותערובת לא גאוסית",
      "type": "Claim",
      "topic": "יישומים בתהליכים",
      "statement": "יהי X_t תהליך גאוסי ממורכז עם Var(X_t)=r>0, ו־θ אחידה ובלתי תלויה בו. עבור Y_t=X_t cos(ωt+θ), התוחלת המותנית בפאזה אפס, אך השונות המותנית תלויה בפאזה. במיצוע מתקבל r/2, והפילוג השולי אינו גאוסי.",
      "formula": "\\mathbb E[Y_t\\mid\\theta]=0,\\quad\\operatorname{Var}(Y_t\\mid\\theta)=r\\cos^2(\\omega t+\\theta),\\quad \\operatorname{Var}(Y_t)=r/2",
      "question": "מדוע גאוסיות Y_t בהינתן θ אינה מבטיחה שהוא גאוסי ללא ההתניה?",
      "choices": [
        "כי השונות המותנית משתנה עם הפאזה ונוצרת תערובת שונויות",
        "כי תוחלת מותנית אפס מחייבת התפלגות אחידה",
        "כי קוסינוס של זווית אחידה הוא תמיד גאוסי",
        "כי התניה בפאזה אינה מוגדרת"
      ],
      "answer": 0,
      "explanation": "התוחלות המותנות לבדן אינן מספיקות. בתרגול מוכיחים אי־גאוסיות גם באמצעות המומנט הרביעי.",
      "links": [
        "cm_total-variance",
        "cm_random-gaussian-sum"
      ],
      "sources": [
        {
          "file": "Random Signals - Tutorial 08.pdf",
          "pages": [
            4,
            5
          ],
          "section": "בכותרת: תרגול 11; תרגיל 2, סעיף 1"
        }
      ],
      "origin": "derived"
    },
    {
      "id": "cm_quadrature",
      "course": "signals",
      "unit": "conditional-moments",
      "title": "שני אותות גאוסיים ופאזה: פילוג מותנה שאינו תלוי בפאזה",
      "type": "Claim",
      "topic": "יישומים בתהליכים",
      "statement": "נניח ש־X ו־W תהליכים גאוסיים ממורכזים וסטציונריים במובן הרחב, בלתי תלויים ובעלי אותה אוטוקורלציה R_X, ושהפאזה θ בלתי תלויה בשניהם. עבור V_t=X_t cos(ωt+θ)+W_t sin(ωt+θ), כל וקטור דגימות גאוסי בהינתן θ, עם ממוצע אפס וקווריאנס שאינו תלוי ב־θ. לכן גם הפילוג הלא מותנה גאוסי.",
      "formula": "\\mathbb E[V_t\\mid\\theta]=0,\\quad\\operatorname{Cov}(V_t,V_s\\mid\\theta)=R_X(s-t)\\cos(\\omega(t-s))",
      "question": "מה צריך לבדוק כדי להסיק גאוסיות של התהליך V בדוגמת שני האותות, ולא רק גאוסיות בכל זמן בנפרד?",
      "choices": [
        "רק שתוחלת כל דגימה היא אפס",
        "רק ששונות כל דגימה סופית",
        "שהפילוג המותנה של כל וקטור דגימות גאוסי ואינו תלוי בפאזה",
        "רק שהפאזה אחידה"
      ],
      "answer": 2,
      "explanation": "העמודים בכתב יד משלימים את ההוכחה לווקטורי דגימות: גם הקווריאנסים הצולבים אינם תלויים בפאזה, ולא רק השונויות הנקודתיות.",
      "links": [
        "cm_gaussian-vector",
        "cm_random-phase",
        "cm_tower"
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
          "section": "בכותרת: תרגול 11; תרגיל 2, סעיף 3 וההשלמה בכתב יד"
        }
      ],
      "origin": "derived"
    },
    {
      "id": "cm_markov-moments",
      "course": "signals",
      "unit": "conditional-moments",
      "title": "מומנטים מותנים בשרשרת מרקוב",
      "type": "Formula",
      "topic": "יישומים בתהליכים",
      "statement": "בשרשרת מרקוב עם מצבים מספריים והסתברויות מעבר p_ij(n), הפילוג של הצעד הבא בהינתן כל העבר תלוי רק במצב הנוכחי. כאשר המומנטים קיימים, מחשבים גם את התוחלת והשונות מהשורה המתאימה של מטריצת המעבר.",
      "formula": "\\begin{aligned}m_i(n)&=\\sum_j j\\,p_{ij}(n)\\\\\\operatorname{Var}(X_{n+1}\\mid X_n=i)&=\\sum_j j^2p_{ij}(n)-m_i^2(n)\\end{aligned}",
      "question": "בשרשרת מרקוב, מה קובע את התוחלת המותנית של המצב הבא בהינתן כל העבר?",
      "choices": [
        "תוחלת המצב ההתחלתי בלבד",
        "שורת המעבר של המצב הנוכחי, ובשרשרת לא הומוגנית גם הזמן",
        "הקווריאנס השולי בלבד",
        "כל המצבים הקודמים גם אחרי שנודע הנוכחי"
      ],
      "answer": 1,
      "explanation": "תכונת מרקוב היא על הפילוג המותנה כולו, ולכן חלה גם על כל מומנט מותנה שקיים.",
      "links": [
        "cm_mean-discrete",
        "cm_variance",
        "cm_conditional-independence"
      ],
      "sources": [
        {
          "file": "Random Signals - Tutorial 11.pdf",
          "pages": [
            1,
            2
          ],
          "section": "בכותרת: תרגול 7; הגדרות ותרגיל 1"
        }
      ],
      "origin": "derived"
    },
    {
      "id": "cm_not-markov",
      "course": "signals",
      "unit": "conditional-moments",
      "title": "תוחלת מותנית חושפת זיכרון של שני צעדים",
      "type": "Claim",
      "topic": "יישומים בתהליכים",
      "statement": "בתרגיל 2 בקובץ 11, Y_{n+1}=Y_{n-1}+V_{n+1}, תנאי ההתחלה אפס, ו־V_n בלתי תלויים עם תוחלת אפס ושונות ½. שרשראות הזוגי והאי־זוגי בלתי תלויות. עבור n≥2, התניית הצעד הבא ב־Y_n בלבד נותנת 0, ואילו ידיעת ההיסטוריה נותנת Y_{n-1}.",
      "formula": "\\begin{aligned}\\mathbb E[Y_{n+1}\\mid Y_n]&=0\\\\\\mathbb E[Y_{n+1}\\mid Y_n,Y_{n-1},\\ldots]&=Y_{n-1}\\\\\\operatorname{Var}(Y_{n+1}\\mid Y_n,Y_{n-1},\\ldots)&=\\tfrac12\\end{aligned}",
      "question": "כיצד מראה דוגמת Y_{n+1}=Y_{n-1}+V_{n+1} שהידיעה של Y_n בלבד אינה מספיקה?",
      "choices": [
        "היא מראה שהשונות הלא מותנית קבועה",
        "היא מראה שכל התוספות גאוסיות",
        "היא מראה שתוחלת מותנית תמיד קבועה",
        "התוחלת המותנית משתנה כשמוסיפים את Y_{n-1} למידע"
      ],
      "answer": 3,
      "explanation": "אם התוחלות המותנות שונות, גם הפילוגים המותנים אינם זהים. זו דרך מספקת להפרכת מרקוביות; שוויון תוחלות לבדו לא היה מוכיח מרקוביות.",
      "links": [
        "cm_markov-moments",
        "cm_tower-conditional"
      ],
      "sources": [
        {
          "file": "Random Signals - Tutorial 11.pdf",
          "pages": [
            3
          ],
          "section": "בכותרת: תרגול 7; תרגיל 2"
        }
      ],
      "origin": "derived"
    },
    {
      "id": "cm_wiener",
      "course": "signals",
      "unit": "conditional-moments",
      "title": "מסנן וינר לעומת תוחלת מותנית",
      "type": "Claim",
      "topic": "שערוך מותנה",
      "statement": "מסנן וינר שבתרגול הוא אופטימלי במחלקת המסננים הלינאריים המתאימה. אין לזהותו אוטומטית עם התוחלת המותנית, האופטימלית בין כל פונקציות המדידות. בגאוסיות משותפת, ההשלכה הגאוסית מתלכדת עם התוחלת המותנית; יש להשתמש באותה קבוצת תצפיות להשוואה.",
      "formula": "\\widehat X_{\\rm MMSE}=\\mathbb E[X\\mid\\mathcal Y],\\qquad \\operatorname{MMSE}\\leq\\operatorname{MSE}(\\widehat X_{\\rm linear})",
      "question": "האם מסנן וינר לינארי הוא בהכרח משערך MMSE בין כל הפונקציות של אותן מדידות?",
      "choices": [
        "כן, לכל פילוג אות ורעש",
        "לא; האופטימליות הכללית דורשת תנאים נוספים, כגון גאוסיות משותפת",
        "כן, אם תוחלת האות אפס",
        "כן, אם הרעש לבן בלבד"
      ],
      "answer": 1,
      "explanation": "הגדרת מסנן וינר מתייחסת למחלקה לינארית. בתוחלת מותנית אין הגבלה זו. גם בחיזוי ובהחלקה חשוב לציין אילו זמנים נכללים במידע.",
      "links": [
        "cm_lmmse-vs-mmse",
        "cm_mmse"
      ],
      "sources": [
        {
          "file": "Random Signals - Tutorial 09.pdf",
          "pages": [
            1,
            2
          ],
          "section": "בכותרת: תרגול 12; מסנן וינר ועקרון ההשלכה"
        }
      ],
      "origin": "derived"
    },
    {
      "id": "cm_circle",
      "course": "signals",
      "unit": "conditional-moments",
      "title": "דוגמת מעגל: מידע מלא על הגודל, ממוצע מותנה אפס",
      "type": "Claim",
      "topic": "שונות מותנית",
      "statement": "בדוגמה X=cos(Θ), Y=sin(Θ), עם Θ אחידה ב־[0,2π], המשתנים חסרי מתאם אך תלויים. בהינתן Y, שני הסימנים האפשריים של X סימטריים, וריבועו ידוע מן המעגל.",
      "formula": "\\mathbb E[X\\mid Y]=0,\\qquad\\mathbb E[X^2\\mid Y]=1-Y^2,\\qquad\\operatorname{Var}(X\\mid Y)=1-Y^2",
      "question": "במודל X=cos(Θ), Y=sin(Θ), מהי Var(X|Y)?",
      "choices": [
        "½ תמיד",
        "אפס תמיד",
        "1−Y²",
        "1+Y²"
      ],
      "answer": 2,
      "explanation": "מתקיים X²+Y²=1, ולכן המומנט השני המותנה ידוע. התוחלת המותנית אפס בגלל סימטריית הסימן, לא בגלל אי־תלות.",
      "links": [
        "cm_variance",
        "cm_pull-out",
        "cm_independence"
      ],
      "sources": [
        {
          "file": "Random Signals - Tutorial 01.pdf",
          "pages": [
            4,
            5
          ],
          "section": "הרחבה לתרגיל 4"
        }
      ],
      "origin": "derived"
    }
  ]
};

window.addConditionalContent = function(data) {
  const pack=window.CONDITIONAL_PACK;
  const installed=data.contentPacks?.[pack.id] || 0;
  if(installed>=pack.version)return data;
  let course=data.courses.find(c=>c.id===pack.courseId);
  if(!course){course={id:pack.courseId,name:pack.courseName,demo:false};data.courses.push(course);}
  course.demo=false;
  const existing=new Set(data.items.map(i=>i.id));
  if(!installed){
    for(const item of pack.items)if(!existing.has(item.id))data.items.push(structuredClone(item));
  }
  if(installed>0&&installed<2){
    // Reclassify bundled prerequisites without restoring deletions or replacing personal edits.
    const reclassified=new Map(pack.items.filter(i=>i.topic==='הסתברות ופילוגים מותנים').map(i=>[i.id,i.topic]));
    for(const item of data.items){
      if(item.course===pack.courseId&&item.unit===pack.id&&item.topic==='תוחלת מותנית'&&reclassified.has(item.id))item.topic=reclassified.get(item.id);
    }
  }
  if(installed>0&&installed<3){
    // Refresh only the previous bundled wording; preserve personal edits and deletions.
    const oldTower={"statement": "אם X אינטגרבילי, ממוצע התוחלת המותנית הוא התוחלת המקורית. הממוצע החיצוני מחושב לפי פילוג המשתנה המתנה, לא לפי פילוג X.", "formula": "\\mathbb E[X]=\\mathbb E[\\mathbb E[X\\mid Y]]", "explanation": "התוחלת הפנימית היא פונקציה של Y. כדי למצע אותה צריך לשקלל את ערכי Y לפי פילוגם."};
    const target=data.items.find(i=>i.id==='cm_tower'&&i.course===pack.courseId&&i.unit===pack.id);
    const updated=pack.items.find(i=>i.id==='cm_tower');
    if(target)for(const key of ['statement','formula','explanation'])if(target[key]===oldTower[key])target[key]=updated[key];
  }
  data.contentPacks={...(data.contentPacks||{}),[pack.id]:pack.version};
  if(!installed)data.selectedCourse=pack.courseId;
  return data;
};
