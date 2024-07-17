import { Application } from "stimulus"
import { definitionsFromContext } from "stimulus/webpack-helpers"

import promo from "%modules%/promo/promo"; // подсчет до бесконечности
import field from "%modules%/field/field"; // настройка динмаической высоты для textarea, маска телефона, добалвение классо для идетификации пустое или нет при вводе в текстовое поле
import { popup } from "%modules%/popup/popup"; // инициализация попапов, их открытие и закрытие
import form from "%modules%/form/form"; // валидация и отправка данных через форму
import tabs from "%modules%/tabs/tabs"; // табы
import scrollLinks from "%modules%/scroll-links/scroll-links"; // плавный скролл с кнопки до формы рассчета
import animation from "%modules%/animation/animation";
import mapBox from "%modules%/map/map";
import video from "%modules%/video/video";


const application = Application.start()
const context = require.context("./controllers", true, /\.js$/);
application.load(definitionsFromContext(context));

promo();
field();
popup();
form();
tabs();
scrollLinks();
animation();
mapBox();
video();








