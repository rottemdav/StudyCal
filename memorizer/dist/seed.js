/* חומר לדוגמה. יש להתאים את הניסוחים והתנאים לקורס הנלמד. */
window.SEED = {
  "version": 1,
  "courses": [
    {
      "id": "linear",
      "name": "אלגברה לינארית",
      "demo": true
    },
    {
      "id": "signals",
      "name": "אותות אקראיים",
      "demo": true
    }
  ],
  "items": [
    {
      "id": "rank",
      "course": "linear",
      "title": "משפט הממד",
      "type": "Theorem",
      "topic": "העתקות לינאריות",
      "statement": "בהעתקה לינארית T ממרחב וקטורי V מממד סופי אל W, ממד התחום שווה לסכום דרגת ההעתקה וממד הגרעין שלה.",
      "formula": "\\dim V = \\operatorname{rank}(T) + \\dim \\ker(T)",
      "question": "להעתקה לינארית מ־ℝ⁵ אל ℝ³ יש דרגה 2. מהו ממד הגרעין שלה?",
      "choices": [
        "2",
        "3",
        "5",
        "1"
      ],
      "answer": 1,
      "explanation": "לפי משפט הממד, ממד התחום הוא סכום הדרגה וממד הגרעין. לכן ממד הגרעין הוא 3: מחסרים את הדרגה 2 מממד התחום 5.",
      "links": [
        "kernel",
        "independence"
      ],
      "legacyFingerprint": 4184377314
    },
    {
      "id": "kernel",
      "course": "linear",
      "title": "גרעין של העתקה לינארית",
      "type": "Definition",
      "topic": "העתקות לינאריות",
      "statement": "הגרעין הוא אוסף כל הווקטורים בתחום שמועתקים לאפס. הוא תת־מרחב של התחום.",
      "formula": "\\ker(T)=\\{v\\in V:T(v)=0\\}",
      "question": "מתי העתקה לינארית היא חד־חד־ערכית?",
      "choices": [
        "כאשר הגרעין שלה הוא כל התחום",
        "כאשר הדרגה שלה היא אפס",
        "כאשר התחום שווה לטווח",
        "כאשר הגרעין שלה מכיל רק את וקטור האפס"
      ],
      "answer": 3,
      "explanation": "העתקה לינארית היא חד־חד־ערכית אם ורק אם הגרעין שלה הוא מרחב האפס. אם שני וקטורים מועתקים לאותה תמונה, ההפרש שלהם בגרעין ולכן חייב להיות אפס.",
      "links": [],
      "legacyFingerprint": 833341553
    },
    {
      "id": "independence",
      "course": "linear",
      "title": "אי־תלות לינארית",
      "type": "Definition",
      "topic": "מרחבים וקטוריים",
      "statement": "וקטורים הם בלתי תלויים לינארית אם הצירוף הלינארי היחיד שלהם ששווה לאפס הוא הצירוף שבו כל המקדמים אפס.",
      "formula": "\\sum_{i=1}^k a_i v_i=0\\;\\Longrightarrow\\;a_1=\\cdots=a_k=0",
      "question": "איזו טענה נכונה תמיד עבור ארבעה וקטורים ב־ℝ³?",
      "choices": [
        "הם תלויים לינארית",
        "הם מהווים בסיס למרחב",
        "הם אורתוגונליים",
        "הם פורשים את המרחב"
      ],
      "answer": 0,
      "explanation": "במרחב מממד 3, קבוצה בלתי תלויה מכילה לכל היותר שלושה וקטורים. לכן ארבעה וקטורים בהכרח תלויים, אך לא בהכרח פורשים את המרחב.",
      "links": [],
      "legacyFingerprint": 2857518109
    },
    {
      "id": "basis",
      "course": "linear",
      "title": "בסיס וממד",
      "type": "Definition",
      "topic": "מרחבים וקטוריים",
      "statement": "בסיס הוא קבוצה בלתי תלויה לינארית שפורשת את המרחב. במרחב מממד סופי, לכל הבסיסים אותו מספר וקטורים, ומספר זה נקרא ממד המרחב.",
      "formula": "\\dim(V)=|\\mathcal B|",
      "question": "קבוצה של שלושה וקטורים בלתי תלויים לינארית ב־ℝ³ היא…",
      "choices": [
        "בהכרח קבוצה אורתונורמלית",
        "בסיס למרחב",
        "תמיד בסיס של וקטורים עצמיים",
        "קבוצה שאינה מספיקה לפרישת המרחב"
      ],
      "answer": 1,
      "explanation": "במרחב מממד n, כל קבוצה של n וקטורים בלתי תלויים לינארית היא בסיס. אין דרישה שהווקטורים יהיו אורתוגונליים.",
      "links": [
        "independence"
      ],
      "legacyFingerprint": 2582392111
    },
    {
      "id": "eigen",
      "course": "linear",
      "title": "ערכים ווקטורים עצמיים",
      "type": "Definition",
      "topic": "תורת הספקטרום",
      "statement": "וקטור עצמי הוא וקטור שאינו אפס, שהעתקתו היא כפולה סקלרית שלו. הסקלר המתאים נקרא ערך עצמי.",
      "formula": "Av=\\lambda v,\\qquad v\\ne 0",
      "question": "מטריצה A מעתיקה וקטור v שאינו אפס לווקטור האפס. מה בהכרח נכון?",
      "choices": [
        "המטריצה הפיכה",
        "הווקטור אינו וקטור עצמי",
        "אפס הוא ערך עצמי של המטריצה",
        "כל הערכים העצמיים של המטריצה הם אפס"
      ],
      "answer": 2,
      "explanation": "משוואת הווקטור העצמי מתקיימת עם ערך עצמי אפס. קיומו של ערך עצמי אפס אינו מחייב שכל שאר הערכים העצמיים יהיו אפס.",
      "links": [
        "kernel"
      ],
      "legacyFingerprint": 2850766843
    },
    {
      "id": "spectral",
      "course": "linear",
      "title": "המשפט הספקטרלי",
      "type": "Theorem",
      "topic": "תורת הספקטרום",
      "statement": "לכל מטריצה ממשית סימטרית קיים בסיס אורתונורמלי של וקטורים עצמיים, וניתן ללכסן אותה באמצעות מטריצה אורתוגונלית.",
      "formula": "A=A^T\\;\\Longrightarrow\\;A=Q\\Lambda Q^T,\\quad Q^TQ=I",
      "question": "איזה תנאי מבטיח שלמטריצה ממשית קיים בסיס אורתונורמלי של וקטורים עצמיים?",
      "choices": [
        "המטריצה משולשית עליונה",
        "המטריצה סימטרית",
        "הדטרמיננטה של המטריצה שונה מאפס",
        "כל איברי המטריצה חיוביים"
      ],
      "answer": 1,
      "explanation": "המשפט הספקטרלי הממשי חל על מטריצות סימטריות. מטריצה משולשית או הפיכה אינה חייבת להיות בעלת בסיס אורתונורמלי של וקטורים עצמיים.",
      "links": [
        "eigen",
        "basis",
        "orthogonal"
      ],
      "legacyFingerprint": 3103796539
    },
    {
      "id": "orthogonal",
      "course": "linear",
      "title": "מטריצות אורתוגונליות",
      "type": "Definition",
      "topic": "מכפלות פנימיות",
      "statement": "מטריצה ממשית ריבועית היא אורתוגונלית כאשר עמודותיה מהוות בסיס אורתונורמלי. ההופכית שלה היא המשוחלפת שלה, והיא שומרת על אורכים אוקלידיים.",
      "formula": "Q^TQ=I\\quad\\Longrightarrow\\quad\\|Qx\\|_2=\\|x\\|_2",
      "question": "מהי ההופכית של מטריצה ממשית אורתוגונלית Q?",
      "choices": [
        "−Q",
        "Q²",
        "Qᵀ",
        "מטריצת האפס"
      ],
      "answer": 2,
      "explanation": "לפי ההגדרה, מכפלת המשוחלפת של Q במטריצה Q היא מטריצת היחידה. לכן המשוחלפת היא ההופכית. העתקה אורתוגונלית שומרת על אורכים ועל זוויות.",
      "links": [
        "basis"
      ],
      "legacyFingerprint": 3933425925
    },
    {
      "id": "projection",
      "course": "linear",
      "title": "הטלה אורתוגונלית",
      "type": "Formula",
      "topic": "מכפלות פנימיות",
      "statement": "ההטלה האורתוגונלית של x על המרחב הנפרש על ידי וקטור u שאינו אפס היא הרכיב של x בכיוון u. השארית מאונכת ל־u.",
      "formula": "\\operatorname{proj}_u(x)=\\frac{u^Tx}{u^Tu}u",
      "question": "מה נכון לגבי השארית לאחר הטלת x על המרחב הנפרש על ידי וקטור u שאינו אפס?",
      "choices": [
        "היא תמיד שווה לאפס",
        "היא מקבילה ל־u",
        "אורכה שווה לאורך של x",
        "היא מאונכת ל־u"
      ],
      "answer": 3,
      "explanation": "לאחר שמחסרים את הרכיב בכיוון u, נשארת שארית שהמכפלה הפנימית שלה עם u היא אפס.",
      "links": [
        "orthogonal"
      ],
      "legacyFingerprint": 3698668329
    },
    {
      "id": "expectation",
      "course": "signals",
      "title": "לינאריות התוחלת",
      "type": "Claim",
      "topic": "משתנים מקריים",
      "statement": "עבור משתנים מקריים אינטגרביליים X ו־Y וקבועים a ו־b, התוחלת היא לינארית. אין צורך באי־תלות בין המשתנים.",
      "formula": "\\mathbb E[aX+bY]=a\\mathbb E[X]+b\\mathbb E[Y]",
      "question": "איזו הנחה נדרשת כדי שתוחלת הסכום תהיה שווה לסכום התוחלות?",
      "choices": [
        "המשתנים חייבים להיות בלתי תלויים",
        "המשתנים חייבים להיות גאוסיים",
        "התוחלות צריכות להתקיים ולהיות סופיות",
        "למשתנים חייבת להיות אותה התפלגות"
      ],
      "answer": 2,
      "explanation": "לינאריות התוחלת דורשת כאן אינטגרביליות, ולא אי־תלות. השוויון מתקיים גם כאשר יש תלות חזקה בין המשתנים.",
      "links": [],
      "legacyFingerprint": 1046936432
    },
    {
      "id": "variance",
      "course": "signals",
      "title": "שונות של סכום",
      "type": "Formula",
      "topic": "משתנים מקריים",
      "statement": "עבור משתנים מקריים ממשיים בעלי מומנטים שניים סופיים, השונות של סכום כוללת גם איבר של שונות משותפת.",
      "formula": "\\operatorname{Var}(X+Y)=\\operatorname{Var}(X)+\\operatorname{Var}(Y)+2\\operatorname{Cov}(X,Y)",
      "question": "השונויות של X ושל Y הן 2 ו־3, בהתאמה, והשונות המשותפת שלהם היא 1. מהי שונות הסכום?",
      "choices": [
        "5",
        "6",
        "7",
        "8"
      ],
      "answer": 2,
      "explanation": "סוכמים את שתי השונויות ומוסיפים פעמיים את השונות המשותפת: התוצאה היא 7. אפשר לחבר שונויות ישירות רק כאשר השונות המשותפת היא אפס.",
      "links": [
        "expectation",
        "uncorrelated"
      ],
      "legacyFingerprint": 3074228122
    },
    {
      "id": "uncorrelated",
      "course": "signals",
      "title": "משתנים חסרי מתאם",
      "type": "Definition",
      "topic": "משתנים מקריים",
      "statement": "משתנים מקריים ממשיים בעלי מומנטים שניים סופיים הם חסרי מתאם כאשר השונות המשותפת שלהם היא אפס. בדרך כלל אין בכך כדי להסיק אי־תלות.",
      "formula": "\\operatorname{Cov}(X,Y)=\\mathbb E[XY]-\\mathbb E[X]\\mathbb E[Y]=0",
      "question": "עבור משתנים מקריים כלליים בעלי מומנטים שניים סופיים, מה נובע משונות משותפת אפס?",
      "choices": [
        "אי־תלות",
        "מתאם לינארי אפס, כאשר שתי השונויות חיוביות",
        "התפלגויות זהות",
        "גאוסיות במשותף"
      ],
      "answer": 1,
      "explanation": "שונות משותפת אפס פירושה שאין מתאם לינארי, כאשר המתאם מוגדר. עדיין עשויה להתקיים תלות לא לינארית.",
      "links": [
        "expectation"
      ],
      "legacyFingerprint": 570071731
    },
    {
      "id": "gaussian",
      "course": "signals",
      "title": "אי־תלות וגאוסיות במשותף",
      "type": "Theorem",
      "topic": "וקטורים גאוסיים",
      "statement": "עבור משתנים מקריים גאוסיים במשותף, שונות משותפת אפס גוררת אי־תלות. התפלגויות שוליות גאוסיות בלבד אינן מספיקות.",
      "formula": "\\operatorname{Cov}(X,Y)=0\\iff X\\perp Y",
      "question": "איזה תנאי נוסף מבטיח שמשתנים חסרי מתאם הם בלתי תלויים?",
      "choices": [
        "לשניהם תוחלת אפס",
        "השונויות שלהם שוות",
        "הם גאוסיים במשותף",
        "כל התפלגות שולית גאוסית, ללא הנחה על ההתפלגות המשותפת"
      ],
      "answer": 2,
      "explanation": "ההנחה החשובה היא גאוסיות במשותף. התפלגויות שוליות גאוסיות אינן מבטיחות לבדן שההתפלגות המשותפת גאוסית.",
      "links": [
        "uncorrelated"
      ],
      "legacyFingerprint": 501826646
    },
    {
      "id": "mmse",
      "course": "signals",
      "title": "משערך שגיאה ריבועית מזערית",
      "type": "Theorem",
      "topic": "שערוך",
      "statement": "למשתנה X בעל מומנט שני סופי, התוחלת המותנית שלו בהינתן Y ממזערת את השגיאה הריבועית הממוצעת מבין כל הפונקציות המדידות של Y.",
      "formula": "\\hat X_{\\mathrm{MMSE}}=\\mathbb E[X\\mid Y]",
      "question": "איזה משערך ממזער את השגיאה הריבועית הממוצעת מבין כל הפונקציות המדידות של התצפית Y?",
      "choices": [
        "תוחלת X ועוד Y",
        "התוחלת המותנית של X בהינתן Y",
        "כל משערך חסר הטיה",
        "החציון של X"
      ],
      "answer": 1,
      "explanation": "התוחלת המותנית היא משערך השגיאה הריבועית המזערית. היא אינה חייבת להיות פונקציה לינארית של התצפית.",
      "links": [
        "expectation"
      ],
      "legacyFingerprint": 555636652
    },
    {
      "id": "lmmse",
      "course": "signals",
      "title": "משערך אפיני אופטימלי",
      "type": "Formula",
      "topic": "שערוך",
      "statement": "עבור משתנים ממשיים X ו־Y בעלי מומנטים שניים סופיים ושונות חיובית של Y, המשערך האפיני האופטימלי משתמש בשונות המשותפת שלהם. בגאוסיות במשותף הוא שווה לתוחלת המותנית.",
      "formula": "\\hat X=\\mathbb E[X]+\\frac{\\operatorname{Cov}(X,Y)}{\\operatorname{Var}(Y)}(Y-\\mathbb E[Y])",
      "question": "מתי מובטח שמשערך השגיאה הריבועית המזערית ומשערך השגיאה הריבועית האפיני המזערי יתלכדו?",
      "choices": [
        "בכל פעם שהמשתנים חסרי מתאם",
        "בכל פעם שהמשתנים גאוסיים במשותף",
        "בכל פעם שלתצפית תוחלת אפס",
        "בכל פעם של־X שונות סופית, ללא הנחות נוספות"
      ],
      "answer": 1,
      "explanation": "לזוג גאוסי במשותף עם שונות תצפית חיובית, התוחלת המותנית היא פונקציה אפינית של התצפית.",
      "links": [
        "mmse",
        "gaussian",
        "variance"
      ],
      "legacyFingerprint": 1016081502
    },
    {
      "id": "wss",
      "course": "signals",
      "title": "סטציונריות במובן הרחב",
      "type": "Definition",
      "topic": "תהליכים מקריים",
      "statement": "תהליך הוא סטציונרי במובן הרחב אם המומנטים השניים שלו סופיים, התוחלת שלו קבועה, ופונקציית האוטוקורלציה תלויה רק בהפרש הזמנים.",
      "formula": "m_X(t)=m_X,\\qquad R_X(t_1,t_2)=R_X(t_1-t_2)",
      "question": "במה תלויה פונקציית האוטוקורלציה של תהליך סטציונרי במובן הרחב?",
      "choices": [
        "ברגע הזמן הראשון בלבד",
        "בהפרש הזמנים",
        "בסכום שני רגעי הזמן",
        "בתוחלת בלבד"
      ],
      "answer": 1,
      "explanation": "בסטציונריות במובן הרחב, התוחלת קבועה והתכונות מסדר שני אינן משתנות בהזזה משותפת של שני הזמנים. לכן המתאם תלוי רק בהפרש הזמנים.",
      "links": [
        "expectation"
      ],
      "legacyFingerprint": 1004753778
    },
    {
      "id": "psd",
      "course": "signals",
      "title": "משפט וינר–חינצ׳ין",
      "type": "Theorem",
      "topic": "תהליכים מקריים",
      "statement": "עבור תהליך רציף בזמן, סטציונרי במובן הרחב, שפונקציית האוטוקורלציה שלו אינטגרבילית בהחלט, צפיפות ההספק הספקטרלית היא התמרת פורייה של האוטוקורלציה.",
      "formula": "S_X(f)=\\int_{-\\infty}^{\\infty}R_X(\\tau)e^{-j2\\pi f\\tau}\\,d\\tau",
      "question": "לאיזו פונקציה קשורה צפיפות ההספק הספקטרלית באמצעות התמרת פורייה?",
      "choices": [
        "לפונקציית צפיפות ההסתברות",
        "לכל מימוש של התהליך בנפרד",
        "לפונקציית האוטוקורלציה",
        "לתוחלת בלבד"
      ],
      "answer": 2,
      "explanation": "התמרת פורייה של האוטוקורלציה נותנת את צפיפות ההספק הספקטרלית. צפיפות ההסתברות מתארת אמפליטודות ולא את התפלגות ההספק על פני התדרים.",
      "links": [
        "wss"
      ],
      "legacyFingerprint": 3852339205
    }
  ],
  "progress": {},
  "sessions": [],
  "selectedCourse": "linear"
};

// Translate only unchanged bundled examples. Custom entries, links, and progress remain intact.
window.localizeExamples = function(data) {
  const fields = ['title','type','topic','statement','formula','question','choices','answer','explanation'];
  const fingerprint = item => {
    const text = JSON.stringify(fields.map(key => item[key]));
    let h = 2166136261;
    for (let k = 0; k < text.length; k++) h = Math.imul(h ^ text.charCodeAt(k),16777619) >>> 0;
    return h;
  };
  const examples = new Map(window.SEED.items.map(i => [i.id,i]));
  const demoCourses = new Set(data.courses.filter(c => c.demo).map(c => c.id));
  data.items = data.items.map(item => {
    const example = examples.get(item.id);
    if (!example || !demoCourses.has(item.course) || item.course !== example.course || fingerprint(item) !== example.legacyFingerprint) return item;
    return {...example,choices:[...example.choices],links:[...item.links]};
  });
  for (const course of data.courses) {
    if (!course.demo) continue;
    if (course.id === 'linear' && course.name === 'Linear algebra') course.name = 'אלגברה לינארית';
    if (course.id === 'signals' && course.name === 'Random signals') course.name = 'אותות אקראיים';
  }
  return data;
};
