/*
 * Pour pouvoir utiliser plusieurs versions de Jquery : https://www.drupal.org/node/1058168
 * Utiliser $jq pour les plugins qui n'utilisent pas 1.3.2 fournit par Jquery Update
 */
//var $jq = jQuery.noConflict(); 
////Pour avoir un retour haut dynamique selon longueur du contenu
//Drupal.behaviors.goTop = function(context) {
//  var link = $('#retour_haut', context);
//
//  $(window).scroll(function(){
//    if ($(window).scrollTop() >= 250) { // Si la page est descendue de 250px.
//      link.fadeIn(500); // On fait un fadeIn pendant 500ms.
//    } else {
//      link.fadeOut(500); // On est au dessus de 250 donc fadeOut pendant 500ms.
//    }
//  });
//
//  link.click(function(e) {
//    e.preventDefault; // Lors d'un click on empêche le navigateur de rafraichir
//    $.scrollTo(); // Et on va en haut de page.
//  });
//}//Pour avoir un retour haut dynamique selon longueur du contenu
//Drupal.behaviors.goTop = function(context) {
//  var link = $('#retour_haut', context);
//
//  $(window).scroll(function(){
//    if ($(window).scrollTop() >= 250) { // Si la page est descendue de 250px.
//      link.fadeIn(500); // On fait un fadeIn pendant 500ms.
//    } else {
//      link.fadeOut(500); // On est au dessus de 250 donc fadeOut pendant 500ms.
//    }
//  });
//
//  link.click(function(e) {
//    e.preventDefault; // Lors d'un click on empêche le navigateur de rafraichir
//    $.scrollTo(); // Et on va en haut de page.
//  });
//}