import React, { useState, useEffect } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export const outputPdf = () => {
    exportPDF();
}

const exportPDF = () => {
    const input = document.getElementById('content_pdf');
    html2canvas(input)
        .then((canvas) => {
            const imgData = canvas.toDataURL('img/png');
            const pdf = new jsPDF('l', 'px', 'a4',);
            pdf.addImage(imgData, 'PNG', 5, 5);
            pdf.save("Report.pdf");
        });
}