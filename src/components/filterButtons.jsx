import { Button, Container } from "react-bootstrap";
import { getAllSubjects } from "../data";
import { useSearchParams } from "react-router-dom";

export function FilterButtons() {
  const allSubjects = getAllSubjects();
  let [searchParams, setSearchParams] = useSearchParams();
  const uniqueSubjectsArray = [...new Set(allSubjects)];

  const subjectButtons = uniqueSubjectsArray.map((subject) => (
    <Button key={subject} variant="secondary" className="m-2">
      {subject}
    </Button>
  ));
  return (
    <Container className="d-flex flex-wrap justify-content-center mb-4">
      {subjectButtons}
    </Container>
  );
}

/*   
        let arr = [];
    const obj = {};
    const topic = subject;
    obj["topic"] = topic;
    arr.push(obj);
    console.log(arr);

        let arr = [];
    const obj = {};
    const topic = subject;
    obj["topic"] = topic;
    arr.push(obj);
    console.log(arr);
    
    */
