import Book from "../book";

function BookList() {
  const books = [
    { title: "Book 1", author: "Author 1", year: 2020 },
    { title: "Book 2", author: "Author 2", year: 2018 },
    { title: "Book 3", author: "Author 3", year: 2022 },
    { title: "Book 4", author: "Author 4", year: 2022 },
    { title: "Book 5", author: "Author 5", year: 2023 },
    { title: "Book 6", author: "Author 6", year: 2022 },
    { title: "Book 7", author: "Author 7", year: 2021 },
  ];
  return (
    <>
      {/* <table>
        <tr>
          <th>Company</th>
          <th>Contact</th>
          <th>Country</th>
        </tr>
        {books.map((item: any) => (
          <>
            <tr>
              <td>
                <ul>
                  <li>{item.title}</li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>{item.author}</li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>{item.year}</li>
                </ul>
              </td>
            </tr>
          </>
        ))}
      </table> */}
      <Book books={books} />
    </>
  );
}
export default BookList;
