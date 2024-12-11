const recetas = {
    receta1: {
        imagen: './img/receta1.png',
        texto: {
            titulo: 'Potaje de Garbanzos y Espinacas',
            descripcion: 'Este plato es nutritivo, alto en proteínas, fibra y bajo en grasas.',
            ingredientes: [
                '400 g de garbanzos cocidos (pueden ser en conserva, bien escurridos)',
                '300 g de espinacas frescas o congeladas',
                '200 g de bacalao desalado (opcional)',
                '1 cebolla mediana',
                '1 pimiento verde',
                '2 dientes de ajo',
                '1 tomate maduro o 200 ml de tomate triturado',
                '1 zanahoria',
                '1 hoja de laurel',
                '1 cucharadita de pimentón dulce',
                '1/2 cucharadita de comino (opcional)',
                'Aceite de oliva virgen extra',
                'Sal y pimienta al gusto',
                'Agua o caldo de verduras (sin sal, si es casero, mejor)'
            ],
            preparacion: [
                'Preparar el sofrito: En una cazuela grande, añade un chorrito de aceite de oliva (2-3 cucharadas) y sofríe la cebolla, el pimiento verde y los ajos, todo bien picado. Cocina a fuego medio hasta que las verduras estén tiernas.',
                'Añadir el tomate y las especias: Incorpora el tomate rallado o triturado y deja que se cocine unos minutos. Añade el pimentón y el comino, removiendo rápidamente para que no se quemen. A continuación, incorpora la hoja de laurel.',
                'Añadir los garbanzos y las espinacas: Añade los garbanzos cocidos, la zanahoria pelada y cortada en rodajas, y las espinacas. Si estás usando espinacas congeladas, agrégalas directamente. Remueve bien.',
                'Añadir el bacalao y el caldo: Si decides incluir bacalao, añádelo ahora en trozos pequeños. Luego cubre con agua o caldo de verduras hasta que todo quede bien cubierto. Deja cocinar a fuego medio durante 15-20 minutos para que se mezclen bien los sabores.',
                'Rectificar de sal y servir: Prueba de sal y pimienta y ajusta al gusto. Deja reposar unos minutos antes de servir para que los sabores se asienten.'
            ],
            consejo: {
                titulo: 'Variante vegana:',
                texto: 'Puedes omitir el bacalao y añadir más verduras como calabacín o berenjena.'
            },
            acompanamiento: 'Sirve este potaje con una rebanada de pan integral o un toque de perejil fresco picado por encima.',
            fraseFinal: '⬆️Este plato es una excelente fuente de proteínas vegetales y fibra gracias a los garbanzos, además de aportar hierro y vitaminas del grupo B.'
        }
    },
    receta2: { // Clave corregida
        imagen: './img/receta2.png',
        texto: {
            titulo: 'Brócoli con Tomate y Mozzarella',
            descripcion: 'Un plato sencillo, saludable y delicioso para cualquier ocasión.',
            ingredientes: [
                'Medio brócoli',
                '1 huevo',
                '3 cucharadas soperas de tomate frito',
                'Queso mozzarella',
                'Sal y orégano'
            ],
            preparacion: [
                'Hierve el brócoli hasta dejarlo con una textura crujiente, sin que se pase de cocción.',
                'En un recipiente para freidora de aire o horno, coloca las cucharadas de tomate como base y agrega el brócoli previamente cocido.',
                'Añade un huevo batido por encima, sal y queso mozzarella al gusto.',
                'Espolvorea orégano encima y caliéntalo hasta que el huevo esté completamente cocido. Aprox. 15 minutos a 190°.'
            ],
            
            fraseFinal: 'El brócoli tiene alto contenido en fibra por lo que previene el estreñimiento, es súper saciante, tiene muy bajo contenido en grasa y es una gran fuente de ácido fólico(vit B9). Si a esto le sumas su bajo coste y su versatilidad, ya no te quedan razones para no comerlo.'
        }
    },
    receta3: {
        imagen: './img/receta3.png',
        texto: {
            titulo: 'Pastel de Espinacas y Tofu en Masa Filo',
            descripcion: 'Una deliciosa receta que combina espinacas, tofu y masa filo, perfecta para disfrutar caliente o fría.',
            ingredientes: [
                '500g de espinacas',
                '50g de piñones',
                '1 cebolla',
                '2 dientes de ajo',
                '2 cucharadas de aceite de oliva',
                'Sal',
                'Pimienta',
                '300g queso crema vegano',
                '2 cucharadas de copos de levadura',
                '200g tofu',
                '1 manojo de eneldo',
                '1 paquete de pasta filo fresca o masa de pan “yufka” (250g)',
                '1-2 cucharadas de semillas de sésamo negro'
            ],
            preparacion: [
                'Tostar los piñones en una sartén hasta que se doren. Pelar la cebolla y los ajos y picarlos.',
                'Calentar el aceite en una sartén y rehogar el ajo y la cebolla a fuego lento. Echar las espinacas y calentarlas unos 5 minutos. Salpimentarlas y apagar el fuego.',
                'Mezclar el queso crema con los copos de levadura y salpimentarlo. Echar el tofu y desmenuzarlo. Lavar el eneldo y picarlo. Mezclar en un bol.',
                'Precalentar el horno a 220 grados y forrar la bandeja del horno con papel vegetal. Untar 5 láminas de la pasta con un poco de aceite y colocar una lámina sin aceite por encima de cada una, de modo que coincidan exactamente. Pintar el borde de las láminas con un poco de aceite y colocar una al lado de la otra, superponiéndolas para formar una lámina larga.',
                'Repartir el relleno en el tercio inferior más largo de la pasta, dejando unos 3 cm sin recubrir a la derecha y a la izquierda. Doblar los bordes y enrollar la masa empezando por abajo para hacer un cilindro. Después, enrollarlo sobre sí mismo dándole forma de caracol. Pintarlo con un poco de aceite y esparcir el sésamo por encima. Hornear el pastel a media altura unos 25 minutos.'
            ],
            consejo: {
                titulo: 'Sugerencia:',
                texto: 'Este pastel está riquísimo tanto caliente como frío. ¡Disfrútalo acompañado de una ensalada de tomate!'
            },
            fraseFinal: [
            'Esta receta ofrece una combinación distinta de algunos alimentos que muchas veces resultan difíciles para el paladar como pueden ser las espinacas, pero nos damos cuenta de que no son los alimentos los que nos causan rechazo sino la forma de cocinarlos.', 
            'Es una forma de implementar a la dieta distintos grupos de alimentos saludables y beneficiosos para el cuerpo que a veces olvidamos incluirlos.'
            ],
        }
    },
    receta4: {
        imagen: './img/receta4.png',
        texto: {
            titulo: 'Avena Trasnochada',
            descripcion: 'Un desayuno o merienda dulce y saludable, ideal para llevar a cualquier lugar.',
            ingredientes: [
                '¼ Taza de avena en hojuelas',
                '¼ Taza de yogurt griego o natural',
                '3 cucharadas de chía',
                '½ Taza de leche o bebida vegetal',
                '½ Manzana (a elección)',
                'Mantequilla de maní o frutos secos (opcional)'
            ],
            preparacion: [
                'Preparación de la Base: En un recipiente pequeño, mezclar la avena, chía, yogurt y la leche o bebida vegetal. Remueve bien hasta que todos los ingredientes estén bien combinados.',
                'Para darle dulzor a la mezcla, pela y tritura el plátano hasta obtener un puré. Agrégalo a la mezcla de avena y remueve.',
                'Cubre el recipiente con una tapa o film transparente y colócalo en el refrigerador. Deja reposar durante la noche (al menos 8 horas).',
                'Al día siguiente, saca la mezcla del refrigerador. Remueve bien y añade las frutas de tu preferencia, frutos secos o mantequilla de maní al gusto por encima para decorar.',
                'Tu porción de avena trasnochada está lista para disfrutar.'
            ],
            fraseFinal: 'La avena trasnochada es una opción nutritiva, es la elección perfecta para un desayuno o merienda dulce y saludable. Es increíblemente práctica y puedes llevarla contigo a cualquier lugar.'
        }
    },
    receta5: {
        imagen: './img/receta5.png',
        texto: {
            titulo: 'Ensalada de Arroz Rojo y Pimientos Asados',
            descripcion: 'Una ensalada colorida, saludable y deliciosa, perfecta para acompañar cualquier comida.',
            ingredientes: [
                '1 taza de arroz rojo',
                '2 pimientos rojos',
                '1 cebolla morada pequeña (finamente picada)',
                '1 diente de ajo (picado)',
                '1/4 taza de aceitunas negras (en rodajas)',
                '1/4 taza de perejil fresco (picado)',
                '2 cucharadas de aceite de oliva virgen extra',
                '1 cucharada de vinagre balsámico',
                '1 cucharadita de comino en polvo',
                'Sal y pimienta al gusto',
                'Zumo de medio limón'
            ],
            preparacion: [
                'Cocinar el arroz rojo: Enjuaga el arroz bajo agua fría y colócalo en una cacerola con 2 tazas de agua. Lleva a ebullición, reduce el fuego y cocina a fuego lento durante 35-40 minutos o hasta que esté tierno. Escurre el exceso de agua y deja enfriar.',
                'Asar los pimientos: Precalienta el horno a 200°C. Coloca los pimientos rojos enteros en una bandeja y ásalos durante 20-25 minutos, dándoles vuelta a mitad de cocción, hasta que la piel esté bien dorada y con ampollas. Retira los pimientos del horno, colócalos en una bolsa de plástico o cúbrelos con un paño limpio para que suden. Después de 10 minutos, pela los pimientos, retira las semillas y córtalos en tiras.',
                'Preparar el aderezo: En un bol pequeño, mezcla el aceite de oliva, el vinagre balsámico, el comino, el ajo picado, el zumo de limón, la sal y la pimienta.',
                'Mezclar la ensalada: En un bol grande, combina el arroz cocido, las tiras de pimientos asados, la cebolla morada, las aceitunas y el perejil. Añade el aderezo y mezcla bien para integrar todos los ingredientes.',
                'Servir: Sirve la ensalada fría o a temperatura ambiente. Puedes agregarle más perejil o un chorrito adicional de limón antes de servir.'
            ],
            fraseFinal: 'Perfecta para una comida ligera o para llevar como almuerzo saludable al trabajo.'
        }
    },
    receta6: {
        imagen: './img/receta6.png',
        texto: {
            titulo: 'Bizcocho Casero',
            descripcion: 'Un bizcocho esponjoso y delicioso, ideal para acompañar con un café o té.',
            ingredientes: [
                '2 huevos',
                '250 g de azúcar',
                '250 g de harina',
                '1 sobre de levadura (16 gramos)',
                '100 ml de leche',
                '100 ml de aceite de girasol',
                'Ralladura de naranja o limón',
                'Si queda espeso, añadir un poco más de leche'
            ],
            preparacion: [
                'Batir los huevos y añadir el azúcar mientras seguimos batiendo.',
                'Añadir el aceite, la leche, la harina y, por último, la levadura, mezclando bien tras cada adición.',
                'Colocar papel de aluminio en el molde y verter la mezcla en él.',
                'Precalentar el horno a 180°C y, una vez listo, meter la mezcla.',
                'Hornear con calor arriba y abajo durante 40 minutos.'
            ],
            fraseFinal:'Perfecto para acompañar con café, té o una bebida caliente en cualquier momento del día.'
        }
    }
};

function expandirReceta(recetaId) {
    const receta = recetas[recetaId];

    // Desplazar al inicio de la página
    window.scrollTo(0, 0);

    const mainContent = document.getElementById('main-content');
    mainContent.style.display = 'block'; // Cambiar diseño a bloque

    // Generar el contenido dinámicamente
    mainContent.innerHTML = `
        <div class="receta-detalle">
            <img src="${receta.imagen}" alt="${recetaId}">
            <h2>${receta.texto.titulo}</h2>
            <p>${receta.texto.descripcion}</p>
            <h3>Ingredientes:</h3>
            <ul>
                ${receta.texto.ingredientes.map(ing => `<li>${ing}</li>`).join('')}
            </ul>
            ${receta.texto.preparacion ? `
                <h3>Preparación:</h3>
                <ol>
                    ${receta.texto.preparacion.map(paso => `<li>${paso}</li>`).join('')}
                </ol>
            ` : ''}
            ${receta.texto.consejo ? `
                <h3>Consejos:</h3>
                <p><strong>${receta.texto.consejo.titulo}</strong> ${receta.texto.consejo.texto}</p>
            ` : ''}
            ${receta.texto.acompanamiento ? `
                <h3>Acompañamiento:</h3>
                <p>${receta.texto.acompanamiento}</p>
            ` : ''}
            ${receta.texto.fraseFinal ? `
                <h3></h3>
                <p>${receta.texto.fraseFinal}</p>
            ` : ''}
            <button class="btn-volver" onclick="mostrarTodasRecetas()">Volver</button>
        </div>
    `;
}

function mostrarTodasRecetas() {
    const mainContent = document.getElementById('main-content');
    mainContent.style.display = 'grid';

    // Generar dinámicamente las recetas
    const recetasHTML = Object.keys(recetas)
        .map(recetaId => `
            <div class="receta" onclick="expandirReceta('${recetaId}')">
                <img src="${recetas[recetaId].imagen}" alt="${recetas[recetaId].texto.titulo}">
                <div class="overlay">${recetas[recetaId].texto.titulo}</div>
            </div>
        `)
        .join('');

    mainContent.innerHTML = recetasHTML;
}