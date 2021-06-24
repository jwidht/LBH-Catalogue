const en = {
  title: "LBH flashcard generator",
  how2use: "How to use",
  quizProps: "Quiz Properties",
  qa: "Question and answer",
  quizName: "Name",
  quizQuestionFontsize: "Question Fontsize",
  quizAnswerFontsize: "Answer Fontsize",
  quizQuestionCode: "Question Language Code",
  quizAnswerCode: "Answer Language Code",

  instructions: `<ul> 
    <li>Populate the question and the answer text boxes. Press "Add Card to file". This will add one card to the import
      file. Repeat this step for each card. <br />
      <font color="red"> IMPORTANT! Do NOT hit the refresh button of your browser (or F5 or reload the page otherwise)
        while you are adding cards. It will empty all fields and completely reset the form.</font>
    <li>Change the quiz properties and press "Add line with properties". You can only do it once, the button will become
      disabled after the first click
    <li>Press "Copy content to clipboard"
    <li>Create a textfile (use notepad or another text-only editor of your choice).
      Paste the content into the notepad window and save as "yourfilename.psv.txt". Important: When saving, set the file
      encoding to "UTF-8". That's it, you have the file to import.
    <li>Copy the file to your phone ( for iPhone, connect the phone, open iTunes, select the phone, Applications, click
      LBH, drag and drop the file to the LBH files area )
    <li>On your phone, click Import - from Computer - select the file - Confirm.
  </ul>`,
  placeholderQ: "Type or paste question",
  placeholderA: "Type or paste answer",
  addCard: "Add Card",
  addProperties: "Add Quiz Properties",
  copyFileToClipboard: "Copy file content to clipboard",
  copy: {
    p1: "Paragraph with <b>html</b> inside",
    p2: "Paragraph with clickable %(link)s",
  },

  link: "link",

  placeholder: "Input with placeholder",
};

export default en;
