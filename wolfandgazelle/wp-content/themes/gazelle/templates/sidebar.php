<?php $unique_id = esc_attr( uniqid( 'search-form-' ) ); ?>

<form role="search" method="get" class="search-form" action="<?php echo esc_url( home_url( '/' ) ); ?>">
  <input type="search" id="<?php echo $unique_id; ?>" class="search-field" placeholder="Search posts" value="<?php echo get_search_query(); ?>" name="s" />
  <button type="submit" class="search-submit">
    <span class="fa fa-search" aria-hidden="true" role="img"></span>
    <span class="sr-only">Search</span>
  </button>
</form>

<h2>Recent</h2>
<?php
  $recent_posts = wp_get_recent_posts();
  foreach($recent_posts as $recent) {
    echo '<li><a href="' . get_permalink($recent["ID"]) . '">' . $recent["post_title"].'</a> </li> ';
  }
  wp_reset_query();
?>

<h2>Archive</h2>
<?php
  $my_archives = wp_get_archives(array(
    'type' => 'monthly',
    'show_post_count' => true,
    'limit' => 12,
    'post_type' => 'post',
    'format' => 'html'
  ));
  print_r($my_archives);
?>
