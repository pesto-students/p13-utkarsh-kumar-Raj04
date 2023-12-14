function Book(props: any) {
  const { books } = props;

  return (
    <>
      {books.map((item: any) => (
        <div>
          <h3>{item.title}</h3>
          <p>Author: {item.author}</p>
          <p>Year: {item.year}</p>
        </div>
      ))}
    </>
  );
}

export default Book;
