import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@heroui/table";
import type { Course } from "../model/course";
import style from "./style.module.css";

export interface Props {
  courses: Course[];
}

export default function CoursesTable({ courses }: Props) {
  
  return (
    <div className={style.container}>
      <Table>
        <TableHeader>
            <TableColumn>Kod</TableColumn>
            <TableColumn>Nazwa</TableColumn>
            <TableColumn>Opis</TableColumn>
            <TableColumn>IIAS</TableColumn>
            <TableColumn>IoT</TableColumn>
            <TableColumn>BD</TableColumn>
            <TableColumn>IO</TableColumn>
            <TableColumn>Gierki</TableColumn>
            <TableColumn>Grafika</TableColumn>
        </TableHeader>
        <TableBody>
          {courses.map((course) => (
            <TableRow key={course.id}>
              <TableCell>{course.id}</TableCell>
              <TableCell>{course.name}</TableCell>
              <TableCell>{course.description}</TableCell>
              <TableCell>{course.specs.includes("iias") && "✅"}</TableCell>
              <TableCell>{course.specs.includes("iot") && "✅"}</TableCell>
              <TableCell>{course.specs.includes("bd") && "✅"}</TableCell>
              <TableCell>{course.specs.includes("io") && "✅"}</TableCell>
              <TableCell>{course.specs.includes("gierki") && "✅"}</TableCell>
              <TableCell>{course.specs.includes("graf") && "✅"}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
