export default function Notes() {
  return (
    <>
      <li>
        <h3>Notes</h3>
      </li>
      <li>
        <textarea
          id="notesTextbox"
          maxLength="65535"
          placeholder="Insert your notes here"
          rows={4}
          cols={40}
        ></textarea>
      </li>
    </>
  );
}
