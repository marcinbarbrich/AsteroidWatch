import React from "react";
import {
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  Tooltip,
} from "@mui/material";

const tableCellStyle = {
  backgroundColor: "rgba(255,255,255,0.3)",
  fontFamily: "Nunito Sans, sans-serif",
  fontWeight: 600,
};

const columns = [
  { id: "name", label: "Name" },
  { id: "date", label: "Date", minWidth: "80px" },
  {
    id: "magnituide",
    label: "Absolute magnitude",
  },
  {
    id: "orbitingBody",
    label: "Orbiting body",
  },
  {
    id: "danger",
    label: "Is dangerous",
  },
  {
    id: "missDistanceAstronomical",
    label: "Astronomical",
  },
  {
    id: "missDistanceLunar",
    label: "Lunar",
  },
  {
    id: "missDistanceKm",
    label: "Kilometers",
  },
  {
    id: "velocityHour",
    label: "Km/hour",
  },
  {
    id: "velocitySecond",
    label: "Km/second",
  },
  {
    id: "estimatedDiameterMin",
    label: "Minimum",
  },
  {
    id: "estimatedDiameterMax",
    label: "Maximum",
  },
];

const ObjectsList = ({ asteroids }) => {
  return (
    <Table stickyHeader style={{ fontFamily: "Nunito Sans", color: "red" }}>
      <TableHead style={{ backgroundColor: "transparent" }}>
        <TableRow>
          <Tooltip
            title="Absolute magnitude is a measure of the luminosity of a celestial object"
            placement="top"
          >
            <TableCell
              style={{
                backgroundColor: "rgba(255,255,255,0.3)",
                borderTopLeftRadius: "20px",
                fontFamily: "Nunito Sans, sans-serif",
                fontWeight: 600,
              }}
              align="center"
              colSpan={5}
            >
              Data
            </TableCell>
          </Tooltip>
          <Tooltip
            title={
              "Astronomical: distance from Earth to the Sun (aprox. 150 000 000 km) \n Lunar: distance from Earth to the Moon (aprox. 400 000 km)"
            }
            placement="top"
          >
            <TableCell style={tableCellStyle} align="center" colSpan={3}>
              Miss distance
            </TableCell>
          </Tooltip>
          <TableCell style={tableCellStyle} align="center" colSpan={2}>
            Velocity
          </TableCell>
          <TableCell
            style={{
              backgroundColor: "rgba(255,255,255,0.3)",
              borderTopRightRadius: "20px",
              fontFamily: "Nunito Sans, sans-serif",
              fontWeight: 600,
            }}
            align="center"
            colSpan={2}
          >
            Estimated diameter
          </TableCell>
        </TableRow>
        <TableRow>
          {columns.map((column) => {
            return (
              <TableCell style={tableCellStyle} align={"center"}>
                {column.label}
              </TableCell>
            );
          })}
        </TableRow>
      </TableHead>
      <TableBody>
        {asteroids.map((item) => {
          return (
            <TableRow hover>
              {columns.map((column) => {
                return (
                  <TableCell
                    align={"center"}
                    id={column.id}
                    style={{ minWidth: column.minWidth }}
                  >
                    {item[column.id]}
                  </TableCell>
                );
              })}
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

export default ObjectsList;
