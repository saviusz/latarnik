import type { Course } from "../../model/course";
import style from "./style.module.css";
import Card from "../Card";
import {
  Check,
  Emergency,
  Remove,
} from "@nine-thirty-five/material-symbols-react/rounded";

export interface Props {
  courses: Course[];
}

export default function CoursesTable({ courses }: Props) {
  const rows = [];

  for (const course of courses) {
    const cells = [];

    for (const spec of ["iias", "iot", "bd", "io", "gierki", "graf"]) {
      if (course.specs.includes(spec)) {
        cells.push(<Check className={style.success} />);
      } else if (course.optional && course.optional.includes(spec)) {
        cells.push(<Emergency className={style.optional} />);
      } else {
        cells.push(<Remove className={style.missing} />);
      }
    }

    rows.push(
      <tr className={style.row} key={course.id}>
        <td>{course.name}</td>
        {cells.map((cell) => (
          <td>{cell}</td>
        ))}
      </tr>,
    );
  }

  return (
    <Card className={style.card}>
      <div className={style.container}>
        <table className={style.table}>
          <thead className={style.header}>
            <tr>
              <th>Nazwa</th>
              <th>IIAS</th>
              <th>IoT</th>
              <th>BD</th>
              <th>IO</th>
              <th>Gierki</th>
              <th>Grafika</th>
            </tr>
          </thead>
          <tbody className={style.body}>{...rows}</tbody>
        </table>
      </div>
    </Card>
  );
}
