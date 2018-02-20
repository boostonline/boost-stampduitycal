<?php
/**
 * Handler for functionality.
 * This class binds overs together.
 *
 * @since      0.0.1
 * @package    BoostSdc
 * @subpackage BoostSdc/Classes
 * @author     Matthew Bull <matthewbull@boostonline.co.uk>
 */

namespace BoostSdc\Classes;

use BoostSdc\Classes\Loader as Loader;
use BoostSdc\Classes\Calculator as Calculator;

class Core
{
	protected $loader;
	protected $version;

	private static $instance = null;

	public static function instance()
	{
 		null === self::$instance and self::$instance = new self;
        return self::$instance;
	} 

	public function __construct()
	{
		$this->version = '0.1';

		$this->loader = new Loader;

		$this->define_admin_hooks();
		$this->define_login_hooks();
		$this->define_public_hooks();
	}

	/**
	 * Register all of the hooks related to the admin-facing functionality of the plugin.
	 * @since    0.0.1
	 * @access   private
	 */
	private function define_admin_hooks()
	{
	   $calculator = new Calculator($this->version);
	   $this->loader->add_action('init', $calculator, 'register_shortcodes');
	}

	public function define_login_hooks()
	{

	}

	/**
	 * Register all of the hooks related to the public-facing functionality of the plugin.
	 * @since    0.0.1
	 * @access   private
	 */
	private function define_public_hooks() 
	{
		$calculator = new Calculator($this->version);
		
		#calculator assets
		$this->loader->add_action('wp_head', $calculator, 'enqueue_public_scripts');
		$this->loader->add_action('wp_head', $calculator, 'enqueue_public_styles');
	}
    
	/**
	 * Run the loader to execute all of the hooks with WordPress.
	 * @since    0.0.1
	 */
	public function run() 
	{
		$this->loader->run();
	}
}