// Banco de preguntas para cada evaluación
const evaluaciones = {
    1: [
        {
            pregunta: "¿Qué es el Codex Alimentarius?",
            opciones: [
                "Un reglamento exclusivo para Ecuador",
                "Un conjunto de normas internacionales para proteger la salud del consumidor y asegurar prácticas leales en el comercio de alimentos",
                "Un manual interno de las empresas alimentarias",
                "Un sistema de auditorías sanitarias"
            ],
            respuestaCorrecta: 1
        },
        {
            pregunta: "¿Cuál es el principal objetivo de las Buenas Prácticas de Manufactura (BPM)?",
            opciones: [
                "Aumentar la producción",
                "Reducir costos operativos",
                "Garantizar la inocuidad y calidad de los alimentos",
                "Mejorar el marketing del producto"
            ],
            respuestaCorrecta: 2
        },
        {
            pregunta: "Un manipulador presenta una herida pequeña en la mano. ¿Cómo debe actuar?",
            opciones: [
                "Continuar trabajando sin problema",
                "Cubrir la herida con una curita común",
                "Cubrir la herida con apósito impermeable y usar guantes",
                "Lavarse las manos y no usar guantes"
            ],
            respuestaCorrecta: 2
        },
        {
            pregunta: "¿Cuál es el tipo de jabón recomendado para el lavado de manos en áreas de alimentos?",
            opciones: [
                "Jabón sólido perfumado",
                "Jabón líquido neutro o antibacterial",
                "Detergente industrial",
                "Jabón artesanal"
            ],
            respuestaCorrecta: 1
        },
        {
            pregunta: "¿En qué momento es OBLIGATORIO lavarse las manos?",
            opciones: [
                "Solo al iniciar la jornada",
                "Después de manipular dinero",
                "Después de ir al baño, toser, estornudar o manipular basura",
                "Solo cuando se ven sucias"
            ],
            respuestaCorrecta: 2
        },
        {
            pregunta: "Un trabajador tiene síntomas de gripe y fiebre. ¿Qué es lo correcto según BPM?",
            opciones: [
                "Que trabaje con mascarilla",
                "Que trabaje solo en áreas limpias",
                "Que no manipule alimentos hasta recuperarse",
                "Que se lave más seguido las manos"
            ],
            respuestaCorrecta: 2
        },
        {
            pregunta: "¿Cuál de los siguientes objetos personales NO debe estar en el área de producción?",
            opciones: [
                "Relojes y anillos",
                "Gorros y cofias",
                "Guantes descartables",
                "Mandiles"
            ],
            respuestaCorrecta: 0
        },
        {
            pregunta: "Un manipulador se rasca la cabeza durante la producción. ¿Qué debe hacer inmediatamente?",
            opciones: [
                "Nada, no es grave",
                "Cambiar de actividad",
                "Lavarse las manos antes de continuar",
                "Solo colocarse el gorro"
            ],
            respuestaCorrecta: 2
        },
        {
            pregunta: "¿Cuál es un ejemplo de mala conducta del personal según inocuidad alimentaria?",
            opciones: [
                "Hablar poco durante el trabajo",
                "Comer o masticar chicle en el área de producción",
                "Usar uniforme limpio",
                "Lavarse las manos frecuentemente"
            ],
            respuestaCorrecta: 1
        },
        {
            pregunta: "¿Qué acción puede provocar contaminación cruzada directa?",
            opciones: [
                "Usar tablas separadas para carnes y vegetales",
                "Manipular alimentos crudos y cocidos con los mismos utensilios sin lavar",
                "Almacenar alimentos en envases cerrados",
                "Usar guantes limpios"
            ],
            respuestaCorrecta: 1
        },
        {
            pregunta: "El uniforme del manipulador debe ser:",
            opciones: [
                "De cualquier color",
                "Limpio, exclusivo para el área de trabajo y en buen estado",
                "El mismo que usa en la calle",
                "Opcional según la empresa"
            ],
            respuestaCorrecta: 1
        },
        {
            pregunta: "¿Cuál es una práctica correcta durante el lavado de manos?",
            opciones: [
                "Secarse con trapos reutilizables",
                "Usar toallas desechables",
                "Enjuagar rápidamente",
                "Usar solo agua"
            ],
            respuestaCorrecta: 1
        },
        {
            pregunta: "Un trabajador deja su celular sobre la mesa de trabajo. Esto es:",
            opciones: [
                "Aceptable si no lo usa",
                "Permitido con funda",
                "Una fuente de contaminación",
                "Una práctica recomendada"
            ],
            respuestaCorrecta: 2
        },
        {
            pregunta: "¿Por qué el estado de salud del personal es clave en la inocuidad alimentaria?",
            opciones: [
                "Porque mejora la imagen de la empresa",
                "Porque evita sanciones legales",
                "Porque puede ser fuente directa de contaminación biológica",
                "Porque aumenta la productividad"
            ],
            respuestaCorrecta: 2
        },
        {
            pregunta: "Según el Codex y las BPM, el manipulador de alimentos debe:",
            opciones: [
                "Priorizar la rapidez sobre la higiene",
                "Cumplir normas de higiene, salud y conducta personal",
                "Trabajar solo con experiencia empírica",
                "Evitar capacitaciones constantes"
            ],
            respuestaCorrecta: 1
        }
    ],
    2: [
        {
            pregunta: "¿Cuál es la indumentaria OBLIGATORIA para un manipulador de alimentos?",
            opciones: [
                "Ropa de calle limpia",
                "Mandil, gorro/cofia y calzado cerrado",
                "Mandil y gorra deportiva",
                "Solo guantes"
            ],
            respuestaCorrecta: 1
        },
        {
            pregunta: "¿Por qué el uso de gorro o cofia es obligatorio?",
            opciones: [
                "Por imagen institucional",
                "Para evitar la caída de cabello y contaminación física",
                "Para diferenciar áreas",
                "Para proteger al trabajador del frío"
            ],
            respuestaCorrecta: 1
        },
        {
            pregunta: "¿Qué característica debe tener el uniforme del manipulador?",
            opciones: [
                "Ser oscuro para no mancharse",
                "Ser exclusivo del área de trabajo y fácil de lavar",
                "Ser ajustado al cuerpo",
                "Ser de uso opcional"
            ],
            respuestaCorrecta: 1
        },
        {
            pregunta: "Un trabajador ingresa con el uniforme desde la calle. ¿Esto es:",
            opciones: [
                "Correcto si está limpio",
                "Aceptable solo en microempresas",
                "Incorrecto según BPM",
                "Permitido si usa gorro"
            ],
            respuestaCorrecta: 2
        },
        {
            pregunta: "¿Cuál es la temperatura adecuada para conservar cárnicos refrigerados?",
            opciones: [
                "10 a 15 °C",
                "5 a 8 °C",
                "0 a 4 °C",
                "-18 °C"
            ],
            respuestaCorrecta: 2
        },
        {
            pregunta: "La temperatura de congelación recomendada para carnes es:",
            opciones: [
                "-5 °C",
                "0 °C",
                "-10 °C",
                "-18 °C o menor"
            ],
            respuestaCorrecta: 3
        },
        {
            pregunta: "¿Qué práctica evita la contaminación cruzada en cárnicos?",
            opciones: [
                "Lavar la carne cruda",
                "Usar la misma tabla para todo",
                "Separar carnes crudas de alimentos listos",
                "Almacenar todo junto en refrigeración"
            ],
            respuestaCorrecta: 2
        },
        {
            pregunta: "¿Qué característica describe correctamente a una carne tipo PSE?",
            opciones: [
                "Color oscuro, textura firme y pH elevado",
                "Color pálido, textura blanda y exudación elevada",
                "Color normal y alta capacidad de retención de agua",
                "Color rojizo intenso y textura seca"
            ],
            respuestaCorrecta: 1
        },
        {
            pregunta: "Durante el descongelamiento de carne, ¿qué método es correcto?",
            opciones: [
                "A temperatura ambiente",
                "Bajo el sol",
                "En refrigeración controlada",
                "En agua caliente"
            ],
            respuestaCorrecta: 2
        },
        {
            pregunta: "Un manipulador corta carne cruda y luego pan sin cambiar guantes. Esto es:",
            opciones: [
                "Aceptable si el guante está limpio",
                "Incorrecto por contaminación cruzada",
                "Permitido en producción rápida",
                "Recomendado para ahorrar tiempo"
            ],
            respuestaCorrecta: 1
        },
        {
            pregunta: "¿Qué característica es propia de una carne tipo DFD?",
            opciones: [
                "pH bajo, color pálido y alta pérdida de agua",
                "pH normal y textura blanda",
                "pH elevado, color oscuro y textura firme",
                "Color claro y olor ácido"
            ],
            respuestaCorrecta: 2
        },
        {
            pregunta: "¿Cuál es un error común en el manejo de cárnicos?",
            opciones: [
                "Controlar temperaturas",
                "Mantener cadena de frío",
                "Re-congelar carne descongelada",
                "Usar equipos exclusivos"
            ],
            respuestaCorrecta: 2
        },
        {
            pregunta: "El uso de guantes en cárnicos:",
            opciones: [
                "Reemplaza el lavado de manos",
                "Evita toda contaminación",
                "No elimina la necesidad de higiene de manos",
                "Es opcional"
            ],
            respuestaCorrecta: 2
        },
        {
            pregunta: "¿Qué acción indica mala higiene operativa?",
            opciones: [
                "Desinfectar superficies",
                "Cambiar uniforme cuando se ensucia",
                "Manipular carne con heridas descubiertas",
                "Usar utensilios diferenciados"
            ],
            respuestaCorrecta: 2
        },
        {
            pregunta: "Según BPM, el manipulador que trabaja con cárnicos debe:",
            opciones: [
                "Priorizar velocidad",
                "Mantener higiene, control de temperatura y orden",
                "Trabajar sin uniforme para mayor comodidad",
                "Manipular varios alimentos sin separación"
            ],
            respuestaCorrecta: 1
        }
    ]
};

// Variables globales
let evaluacionActual = null;
let respuestasUsuario = [];
let tiempoRestante = 900; // 15 minutos en segundos
let intervaloTiempo = null;
let tiempoInicio = null;

// Función para cambiar entre pantallas
function mostrarPantalla(pantalla) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(pantalla).classList.add('active');
}

// Iniciar evaluación
function iniciarEvaluacion(numeroEvaluacion) {
    // Si ambas evaluaciones ya fueron realizadas, bloquear todo
    if (
        localStorage.getItem('evaluacion_realizada_1') &&
        localStorage.getItem('evaluacion_realizada_2')
    ) {
        mostrarMensajeEvaluacionesCompletadas();
        return;
    }
    // Verificar si ya se realizó esta evaluación
    if (localStorage.getItem('evaluacion_realizada_' + numeroEvaluacion)) {
        alert('Ya has realizado esta evaluación. Solo se permite un intento.');
        return;
    }
    evaluacionActual = numeroEvaluacion;
    const numPreguntas = evaluaciones[numeroEvaluacion].length;
    respuestasUsuario = new Array(numPreguntas).fill(null);
    tiempoRestante = 900;
    tiempoInicio = Date.now();
    
    document.getElementById('titulo-evaluacion').textContent = `Evaluación ${numeroEvaluacion === 1 ? 'Uno' : 'Dos'}`;
    
    generarPreguntas();
    mostrarPantalla('evaluacion');
    iniciarCronometro();
    actualizarProgreso();
}

// Mostrar mensaje de evaluaciones completadas y desactivar tarjetas
function mostrarMensajeEvaluacionesCompletadas() {
    document.getElementById('msg-evaluaciones-completadas').classList.remove('hidden');
    document.getElementById('card-eval-1').classList.add('pointer-events-none','opacity-50');
    document.getElementById('card-eval-2').classList.add('pointer-events-none','opacity-50');
}

// Al cargar la página, si ambas evaluaciones ya fueron realizadas, mostrar mensaje
window.addEventListener('DOMContentLoaded', function() {
    if (
        localStorage.getItem('evaluacion_realizada_1') &&
        localStorage.getItem('evaluacion_realizada_2')
    ) {
        mostrarMensajeEvaluacionesCompletadas();
    }
});

// Generar preguntas en el DOM
function generarPreguntas() {
    const container = document.getElementById('preguntas-container');
    container.innerHTML = '';
    
    const preguntas = evaluaciones[evaluacionActual];
    
    preguntas.forEach((pregunta, index) => {
        const preguntaCard = document.createElement('div');
        preguntaCard.className = 'bg-white rounded-2xl p-8 shadow-lg border border-gray-200 transition-all duration-300 hover:shadow-xl';
        
        const literales = ['a', 'b', 'c', 'd'];
        let opcionesHTML = '';
        pregunta.opciones.forEach((opcion, opcionIndex) => {
            opcionesHTML += `
                <label class="opcion flex items-center gap-4 p-5 bg-gray-50 rounded-xl cursor-pointer border-2 border-transparent hover:border-slate-400 hover:bg-slate-50 transition-all duration-300" data-pregunta="${index}" data-opcion="${opcionIndex}">
                    <span class="inline-flex items-center justify-center w-7 h-7 rounded-full border-2 border-gray-400 mr-2 radio-circle">
                        <input type="radio" name="pregunta${index}" value="${opcionIndex}" class="hidden">
                        <span class="circle-indicator w-4 h-4 rounded-full bg-blue-500 opacity-0 transition-all duration-200"></span>
                    </span>
                    <span class="font-bold text-lg">${literales[opcionIndex]})</span>
                    <span class="text-gray-700 text-lg font-medium">${opcion}</span>
                </label>
            `;
        });
        
        preguntaCard.innerHTML = `
            <div class="text-slate-600 text-sm font-bold uppercase tracking-wider mb-4">Pregunta ${index + 1} de ${preguntas.length}</div>
            <div class="text-gray-900 text-xl font-bold mb-6 leading-relaxed">${pregunta.pregunta}</div>
            <div class="space-y-3">
                ${opcionesHTML}
            </div>
        `;
        
        container.appendChild(preguntaCard);
    });
    
    // Event listeners para las opciones
    document.querySelectorAll('.opcion').forEach(opcion => {
        opcion.addEventListener('click', function() {
            const preguntaIndex = parseInt(this.dataset.pregunta);
            const opcionIndex = parseInt(this.dataset.opcion);

            // Remover selección previa
            document.querySelectorAll(`label[data-pregunta="${preguntaIndex}"]`).forEach(o => {
                o.classList.remove('bg-slate-100', 'border-slate-500', '!bg-slate-100', '!border-slate-500');
                o.classList.add('bg-gray-50', 'border-transparent');
                // Ocultar círculo
                const indicador = o.querySelector('.circle-indicator');
                if (indicador) indicador.style.opacity = '0';
            });

            // Añadir selección actual
            this.classList.remove('bg-gray-50', 'border-transparent');
            this.classList.add('!bg-slate-100', '!border-slate-500');

            // Marcar el radio button
            this.querySelector('input[type="radio"]').checked = true;

            // Mostrar círculo
            const indicador = this.querySelector('.circle-indicator');
            if (indicador) indicador.style.opacity = '1';

            // Guardar respuesta
            respuestasUsuario[preguntaIndex] = opcionIndex;

            actualizarProgreso();
        });
    });
}

// Cronómetro
function iniciarCronometro() {
    const timerElement = document.getElementById('tiempo');
    
    intervaloTiempo = setInterval(() => {
        tiempoRestante--;
        
        const minutos = Math.floor(tiempoRestante / 60);
        const segundos = tiempoRestante % 60;
        
        timerElement.textContent = `${minutos}:${segundos.toString().padStart(2, '0')}`;
        
        // Advertencia cuando quedan 5 minutos
        if (tiempoRestante <= 300) {
            timerElement.parentElement.classList.add('warning');
        }
        
        // Tiempo agotado
        if (tiempoRestante <= 0) {
            clearInterval(intervaloTiempo);
            finalizarEvaluacion();
        }
    }, 1000);
}

// Actualizar barra de progreso
function actualizarProgreso() {
    const respondidas = respuestasUsuario.filter(r => r !== null).length;
    const totalPreguntas = evaluaciones[evaluacionActual].length;
    const porcentaje = (respondidas / totalPreguntas) * 100;
    document.getElementById('progress').style.width = porcentaje + '%';
}

// Finalizar evaluación
function finalizarEvaluacion() {
    clearInterval(intervaloTiempo);

    // Calcular calificación
    const preguntas = evaluaciones[evaluacionActual];
    let correctas = 0;

    respuestasUsuario.forEach((respuesta, index) => {
        if (respuesta === preguntas[index].respuestaCorrecta) {
            correctas++;
        }
    });

    const totalPreguntas = preguntas.length;
    const incorrectas = totalPreguntas - correctas;
    const notaBase = correctas * 0.5; // Cada pregunta vale 0.5 puntos (máximo 7.5)
    const nota = (notaBase / 7.5) * 10; // Escalar a 10 puntos

    // Calcular tiempo usado
    const tiempoUsado = 900 - tiempoRestante;
    const minutosUsados = Math.floor(tiempoUsado / 60);
    const segundosUsados = tiempoUsado % 60;

    // Mensaje motivacional según la calificación
    let mensaje = '';
    if (nota === 10) {
        mensaje = "¡Perfecto! Tienes un dominio excepcional del tema. ¡Sigue así!";
    } else if (nota >= 8) {
        mensaje = "¡Excelente trabajo! Demuestras un gran conocimiento. ¡Continúa aprendiendo!";
    } else if (nota >= 6) {
        mensaje = "¡Buen trabajo! Vas por buen camino. Con un poco más de práctica serás un experto.";
    } else if (nota >= 4) {
        mensaje = "¡Sigue adelante! Cada intento es una oportunidad para aprender y mejorar.";
    } else {
        mensaje = "¡No te desanimes! El aprendizaje es un proceso. Revisa los temas y vuelve a intentarlo.";
    }

    // Guardar intento realizado en localStorage
    localStorage.setItem('evaluacion_realizada_' + evaluacionActual, 'true');

    // Si ambas evaluaciones ya están realizadas, mostrar mensaje y bloquear
    if (
        localStorage.getItem('evaluacion_realizada_1') &&
        localStorage.getItem('evaluacion_realizada_2')
    ) {
        setTimeout(() => {
            mostrarMensajeEvaluacionesCompletadas();
        }, 500); // Pequeño delay para que se vea el resultado antes de bloquear
    }

    // Mostrar resultados
    document.getElementById('nota-final').textContent = nota.toFixed(1);
    document.getElementById('mensaje-motivacional').textContent = mensaje;
    document.getElementById('correctas').textContent = correctas;
    document.getElementById('incorrectas').textContent = incorrectas;
    document.getElementById('tiempo-usado').textContent = `${minutosUsados}:${segundosUsados.toString().padStart(2, '0')}`;

    // Generar revisión de respuestas
    generarRevisionRespuestas(preguntas, correctas);

    mostrarPantalla('resultados');
    // Subir al encabezado de resultados para ver la nota
    setTimeout(() => {
        const resultados = document.getElementById('resultados');
        if (resultados) {
            resultados.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, 100);
}

// Generar revisión de respuestas
function generarRevisionRespuestas(preguntas, correctas) {
    const container = document.getElementById('revision-preguntas');
    container.innerHTML = '';
    
    preguntas.forEach((pregunta, index) => {
        const respuestaUsuario = respuestasUsuario[index];
        const respuestaCorrecta = pregunta.respuestaCorrecta;
        const esCorrecta = respuestaUsuario === respuestaCorrecta;
        const noRespondida = respuestaUsuario === null;
        
        const revisionCard = document.createElement('div');
        revisionCard.className = 'bg-white rounded-2xl p-6 mb-4 border-2 ' + 
            (esCorrecta ? 'border-green-400 bg-green-50/30' : 
             noRespondida ? 'border-gray-300' : 'border-red-400 bg-red-50/30');
        
        let estadoHTML = '';
        if (esCorrecta) {
            estadoHTML = '<span class="inline-block px-4 py-2 bg-green-500 text-white text-sm font-bold rounded-full">✓ Correcta</span>';
        } else if (noRespondida) {
            estadoHTML = '<span class="inline-block px-4 py-2 bg-gray-400 text-white text-sm font-bold rounded-full">○ No respondida</span>';
        } else {
            estadoHTML = '<span class="inline-block px-4 py-2 bg-red-500 text-white text-sm font-bold rounded-full">✗ Incorrecta</span>';
        }
        
        let respuestaUsuarioHTML = '';
        if (!noRespondida) {
            const claseRespuestaUsuario = esCorrecta ? 'bg-green-100 border-green-300' : 'bg-red-100 border-red-300';
            respuestaUsuarioHTML = `
                <div class="p-4 rounded-xl border-2 ${claseRespuestaUsuario} mb-3">
                    <span class="font-bold text-gray-700 block mb-2">Tu respuesta:</span>
                    <span class="text-gray-800">${pregunta.opciones[respuestaUsuario]}</span>
                </div>
            `;
        } else {
            respuestaUsuarioHTML = `
                <div class="p-4 rounded-xl border-2 bg-gray-100 border-gray-300 mb-3">
                    <span class="font-bold text-gray-700 block mb-2">Tu respuesta:</span>
                    <span class="text-gray-600 italic">No respondiste esta pregunta</span>
                </div>
            `;
        }
        
        let respuestaCorrectaHTML = '';
        if (!esCorrecta) {
            respuestaCorrectaHTML = `
                <div class="p-4 rounded-xl border-2 bg-green-100 border-green-300">
                    <span class="font-bold text-gray-700 block mb-2">Respuesta correcta:</span>
                    <span class="text-gray-800">${pregunta.opciones[respuestaCorrecta]}</span>
                </div>
            `;
        }
        
        revisionCard.innerHTML = `
            <div class="flex justify-between items-center mb-4">
                <span class="text-slate-600 text-sm font-bold uppercase tracking-wider">Pregunta ${index + 1}</span>
                ${estadoHTML}
            </div>
            <div class="text-gray-900 text-lg font-bold mb-4">${pregunta.pregunta}</div>
            ${respuestaUsuarioHTML}
            ${respuestaCorrectaHTML}
        `;
        
        container.appendChild(revisionCard);
    });
}

// Volver al inicio
function volverAlInicio() {
    evaluacionActual = null;
    respuestasUsuario = [];
    tiempoRestante = 900;
    
    if (intervaloTiempo) {
        clearInterval(intervaloTiempo);
    }
    
    // Resetear timer display
    document.getElementById('tiempo').textContent = '15:00';
    document.getElementById('tiempo').parentElement.classList.remove('warning');
    
    mostrarPantalla('inicio');
}
