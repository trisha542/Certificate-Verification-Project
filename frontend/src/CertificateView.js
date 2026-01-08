import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const CertificateView = () => {
    const { id } = useParams();
    const [student, setStudent] = useState(null);
    const certRef = useRef(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`http://localhost:5000/api/verify/${id}`);
                setStudent(res.data);
            } catch (err) {
                console.error("Data fetch error");
            }
        };
        fetchData();
    }, [id]);

    const downloadPDF = () => {
        const input = certRef.current;
        html2canvas(input, { scale: 3, useCORS: true }).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('l', 'mm', 'a4');
            pdf.addImage(imgData, 'PNG', 0, 0, 297, 210);
            pdf.save(`Certificate_${id}.pdf`);
        });
    };

    if (!student) return <div style={{textAlign: 'center', padding: '50px'}}>Loading Verified Data...</div>;

    return (
        <div style={certStyles.page}>
            <div ref={certRef} style={certStyles.container}>
                <h1 style={certStyles.header}>CERTIFICATE</h1>
                <p style={certStyles.subHeader}>OF COMPLETION</p>
                
                <div style={certStyles.content}>
                    <p style={{fontSize: '20px'}}>This is to certify that</p>
                    <h2 style={certStyles.studentName}>{student.studentName}</h2>
                    <p style={certStyles.text}>
                        has successfully completed an internship in 
                        <br/>
                        <strong style={{fontSize: '24px', color: '#03244c'}}>{student.internshipDomain}</strong>
                    </p>
                    <p style={certStyles.text}>Period: {student.startDate} to {student.endDate}</p>
                    <div style={certStyles.idBadge}>ID: {student.certificateId}</div>
                </div>

                <div style={certStyles.watermark}>OFFICIAL</div>
            </div>
            
            <button onClick={downloadPDF} style={certStyles.downloadBtn}>
                Download Verified PDF
            </button>
        </div>
    );
};

const certStyles = {
    page: { display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '40px', backgroundColor: '#f4f7f6', minHeight: '100vh' },
    container: {
        width: '850px', height: '600px', backgroundColor: '#fff', position: 'relative',
        border: '15px solid #03244c', outline: '5px solid #e67e22', padding: '40px',
        textAlign: 'center', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', overflow: 'hidden'
    },
    header: { fontSize: '60px', color: '#03244c', margin: '0', letterSpacing: '10px' },
    subHeader: { fontSize: '20px', color: '#e67e22', letterSpacing: '5px', marginTop: '-10px' },
    studentName: { fontSize: '50px', color: '#b22222', margin: '30px 0', borderBottom: '2px solid #eee', display: 'inline-block' },
    text: { fontSize: '18px', lineHeight: '1.6', color: '#444' },
    idBadge: { marginTop: '40px', fontSize: '14px', color: '#777', fontWeight: 'bold' },
    watermark: { position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%) rotate(-45deg)', fontSize: '120px', color: 'rgba(0,0,0,0.03)', zIndex: 0, pointerEvents: 'none' },
    downloadBtn: { marginTop: '30px', padding: '15px 30px', backgroundColor: '#27ae60', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold' }
};

export default CertificateView;