<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'gazelle');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', 'root');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'qR.G31;_.=_)wa~RDn7@z^#V*6%$7#]WPk2FgW3[sl`7SbbJ@vvzIfyl{5)[PZvj');
define('SECURE_AUTH_KEY',  '7h;<2M$3u%S4*htJ:OXqLbn- Ae=ST2!t:!^4 -Wa=_pv{mKJ=6&=+MZq@h1[vT*');
define('LOGGED_IN_KEY',    'Shi^o7O~TQPeE/FOmPO*CE>Jil$E3hkkeL|e-@qwt:9NqJD:7T% 3#:pguI81 ^b');
define('NONCE_KEY',        'tqV}o-/,CL@N7~$-g83QyN1J|g90.P@}nS$=u!hRhdr]e;nO$.g38$1^bU5~5}4v');
define('AUTH_SALT',        '`Sw?G*`Mm6 b[rrdSV4FFE=u9.GK}?-@Bd+y(tB~Nb^ZN|u?O6Fx:(}.P5.Y9Vt.');
define('SECURE_AUTH_SALT', 'vce8]q$]V/m=||Rj8x2>=er@&_5{jjlhCJ6Q/Qa`@G-r+irf!@@SesUF%M-kJOH=');
define('LOGGED_IN_SALT',   '`|V0W~4=yWTEbJ?eY{u35?>a_.8M*}W^*cI~^%i}ZMzXK`mtM6CJ,,h7r}ks!68c');
define('NONCE_SALT',       '*L*;Nj=0(H[b3qzF,wXX0@<+I;.nQe}wNV}cC3LzuRXKPo*ijU{O=p(>E@(t)W&(');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
