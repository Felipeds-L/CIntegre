"use client";
import ValidationPopup from "@/components/popups/ValidationPopup";

export default function Teste() {
  return (
    <section className="formLogin">
      <ValidationPopup 
        schoolName="Escola S" 
        activityName="Coleta de lixo na praia" 
        schoolAvatarUrl="/miku.jpg" 
        period="Janeiro - Junho 2023" 
        onContinue={(rating) => console.log("Continuar com a avaliação:", rating)}
        onFinalize={(rating) => console.log("Finalizar com a avaliação:", rating)}
      />
    </section>
  );
}
