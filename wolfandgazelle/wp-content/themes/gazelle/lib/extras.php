<?php

namespace Roots\Sage\Extras;

use Roots\Sage\Setup;

/**
 * Add <body> classes
 */
function body_class($classes) {
  // Add page slug if it doesn't exist
  if (is_single() || is_page() && !is_front_page()) {
    if (!in_array(basename(get_permalink()), $classes)) {
      $classes[] = basename(get_permalink());
    }
  }

  // Add class if sidebar is active
  if (Setup\display_sidebar()) {
    $classes[] = 'sidebar-primary';
  }

  return $classes;
}
add_filter('body_class', __NAMESPACE__ . '\\body_class');

/**
 * Clean up the_excerpt()
 */
function excerpt_more() {
  return ' &hellip; <a href="' . get_permalink() . '">' . __('Continued', 'sage') . '</a>';
}
add_filter('excerpt_more', __NAMESPACE__ . '\\excerpt_more');

function childtheme_override_nav_below() {
  remove_action('thematic_navigation_below', 'thematic_nav_below', 2);
}
add_action('init', __NAMESPACE__ . '\\remove_post_navigation');

/**
 * Remove "Older Posts" label from bottom of post pages
 */
function sanitize_pagination($content) {
    // Remove role attribute
    $content = str_replace('role="navigation"', '', $content);

    // Remove h2 tag
    $content = preg_replace('#<h2.*?>(.*?)<\/h2>#si', '', $content);

    return $content;
}
add_action('navigation_markup_template', __NAMESPACE__ . '\\sanitize_pagination');

/**
 * Add Google Font
 */
function add_google_fonts() {
  wp_enqueue_style('add-google-fonts', 'http://fonts.googleapis.com/css?family=Inconsolata', false);
}
add_action( 'wp_enqueue_scripts', __NAMESPACE__ . '\\add_google_fonts' );

/**
 * Modify Excerpt More
 */
function new_excerpt_more($more) {
  global $post;
  remove_filter('excerpt_more', 'new_excerpt_more');
  return ' <a class="read-more" href="'. get_permalink($post->ID) . '">' . '<span class="blur"></span><i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i>' . '</a>';
}
add_filter('excerpt_more', __NAMESPACE__ . '\\new_excerpt_more');

