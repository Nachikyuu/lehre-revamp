import React from 'react'
import Box from './Box'
{/* für Tagesbereich und Archivbereich */}
const Area = (children) => {
if(children =="Aktuelles Semester"){
  return (
    <div>
        <Box>Montag</Box>
        <Box>Dienstag</Box>
        <Box>Mittwoch</Box>
        <Box>Donnerstag</Box>
        <Box>Freitag</Box>
    </div>
  )
} else if(children =="Alle Semester"){
    return (
        <div>
            {/* Über Veranstaltungsdaten iterieren und für jedes gefundene Semester eine Box erstellen*/}
        </div>
      )
}
}

export default Area