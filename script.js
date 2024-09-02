function generatePDF(type) {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    let content = '';

    if (type === 'lebenslauf') {
        content = 'Lebenslauf Inhalt hier...';  // Pielāgojiet saturu
    } else if (type === 'einschreiben') {
        content = 'Einschreiben Inhalt hier...';  // Pielāgojiet saturu
    } else if (type === 'motivation') {
        content = 'Motivation Inhalt hier...';  // Pielāgojiet saturu
    }

    doc.text(content, 10, 10);
    doc.save(`${type}.pdf`);
}
