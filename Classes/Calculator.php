<?php
/**
 * Calculator plugin.
 *
 * @since      0.0.1
 * @package    BoostSdc
 * @subpackage BoostSdc/Classes
 * @author     Matthew Bull <matthewbull@boostonline.co.uk>
 */

namespace BoostSdc\Classes;

class Calculator
{
	public function __construct($version) 
	{
		$this->version = $version;
	}

	/**
	 * Register the shortcodes for the admin.
	 * @since    0.0.1
	 */
	public function register_shortcodes()
	{
		add_shortcode('bsdc-single-property', [$this, 'single_property']);
		add_shortcode('bsdc-additional-property', [$this, 'additional_property']);
		add_shortcode('bsdc-first-time-buyer', [$this, 'first_time_buyer']);
	}

	/**
	 * Include the template for the shortcode single property.
	 * @since    0.0.1
	 */
	public function single_property()
	{
		return file_get_contents( AC_PLUGIN_PATH . 'views/bsdc-shortcode-single-property.html' );
	}
	
	/**
	 * Include the template for the shortcode additional property.
	 * @since    0.0.1
	 */
	public function additional_property()
	{
		return file_get_contents( AC_PLUGIN_PATH . 'views/bsdc-shortcode-additional-property.html' );
	}
	
	/**
	 * Include the template for the shortcode first time buyer.
	 * @since    0.0.1
	 */
	public function first_time_buyer()
	{
		return file_get_contents( AC_PLUGIN_PATH . 'views/bsdc-shortcode-first-time-buyer.html' );
	}
	/**
	 * Register the stylesheets for the public-facing side of the site.
	 * @since    0.0.1
	 */
	public function enqueue_public_styles() 
	{
		wp_enqueue_style('bsdc', AC_PLUGIN_URL . 'assets/css/style-front.css', [], $this->version, 'all');
	}

	/**
	 * Register the JavaScript for the public-facing side of the site.
	 * @since    1.0.0
	 */
	public function enqueue_public_scripts() 
	{
	    /* REF: https://www.stampdutycalculator.org.uk/ */
	    
		wp_enqueue_script('bsdc_showelement', AC_PLUGIN_URL . 'assets/js/showelement.js', [], $this->version, false);
	    
	    //single property
		wp_enqueue_script('bsdc_single_property', AC_PLUGIN_URL . 'assets/js/stampdutyenglandfullpdf2017v70.js', [], $this->version, false);
		
		//additional
		wp_enqueue_script('bsdc_additional_property', AC_PLUGIN_URL . 'assets/js/stampdutyenglandbtlfullpdf2017v70.js', [], $this->version, false);
		
		//first time buyer
		wp_enqueue_script('bsdc_first_time_buyer', AC_PLUGIN_URL . 'assets/js/stampdutyenglandftbfullpdf2017v70.js', [], $this->version, false);
	}

}