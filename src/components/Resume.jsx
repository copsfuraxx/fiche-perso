import DivLine from "src/components/DivLine";

export default function Resume({ resume }) {
    return (
        <>
            <DivLine>
                <p>Nom : {resume.name}</p>
                <p>Age : {resume.age}</p>
                <p>Race : {resume.race}</p>
                <p>Genre : {resume.gender}</p>
                <p>Alignement : {resume.alignment}</p>
                <p>Dieu : {resume.deity}</p>
            </DivLine>
            <DivLine>
                <p>Corpulance : {resume.size}</p>
                <p>Cheveux : {resume.hair}</p>
                <p>Oeils : {resume.eyes}</p>
                <p>Taille : {resume.height}</p>
                <p>Poid : {resume.weight}</p>
                <p>Histoire : {resume.background}</p>
            </DivLine>
        </>
    );
}