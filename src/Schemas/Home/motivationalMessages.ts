const motivationalMessages = [
    "El éxito es la suma de pequeños esfuerzos repetidos día tras día.",
    "Cada gran logro comienza con la decisión de intentarlo.",
    "No importa lo lento que vayas, mientras no te detengas.",
    "La clave del éxito es empezar antes de estar listo.",
    "Las dificultades preparan a personas comunes para destinos extraordinarios.",
    "Sueña en grande, trabaja duro y nunca te rindas.",
    "El único límite a tus logros es tu imaginación.",
    "Haz de cada día una nueva oportunidad para mejorar.",
    "La persistencia vence la resistencia. Sigue adelante.",
    "Lo que hoy parece un sacrificio, mañana será tu mayor éxito.",
    "Cree en ti mismo y todo será posible.",
    "Cada día es una nueva oportunidad para ser mejor.",
    "El fracaso no es el final, es el principio del aprendizaje.",
    "No te compares con los demás, compite contigo mismo.",
    "Haz hoy lo que tu futuro agradecerá.",
    "No tengas miedo de empezar de nuevo. Es una nueva oportunidad.",
    "Cada esfuerzo te acerca más a tu meta.",
    "Rodéate de personas que te inspiren y te impulsen.",
    "Lo imposible solo tarda un poco más.",
    "Cuando dudes, recuerda por qué empezaste."
];

export function getRandomMessage() {
    const randomIndex = Math.floor(Math.random() * motivationalMessages.length);
    return motivationalMessages[randomIndex];
}

export const welcomeMessage = getRandomMessage();