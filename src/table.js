/*global Handlebars, $*/
'use strict';

(function($) {

	var genericLogInfo = 'Butcher 90\'s PBR&B Marfa Banksy selvage gluten-free, next level kale chips small batch ' +
		'cray swag umami. Bespoke chia fashion axe meh, brunch drinking vinegar street art Vice. Taxidermy migas sriracha' +
		' tote bag, semiotics Odd Future Blue Bottle Echo Park Truffaut YOLO typewriter occupy locavore. Forage heirloom' +
		' street art Banksy readymade mlkshk Thundercats tofu pour-over, drinking vinegar 3 wolf moon. Yr mixtape beard,' +
		' organic hoodie fanny pack tote bag. Cornhole irony small batch listicle, fingerstache Schlitz actually' +
		' gluten-free fap artisan. Bicycle rights occupy try-hard, Odd Future quinoa tofu cold-pressed Truffaut.\n ' +
		'Hella jean shorts flannel, fap Helvetica aesthetic XOXO Williamsburg ennui. Marfa blog banh mi Vice. Godard lomo' +
		' Williamsburg, cred +1 ugh food truck ennui mixtape bicycle rights forage church-key. Wayfarers bespoke shabby ' +
		'chic, fashion axe before they sold out four dollar toast twee mustache brunch Intelligentsia hoodie kitsch. ' +
		'Gentrify sartorial American Apparel, butcher migas 90\'s wolf Banksy mixtape viral. Portland distillery ' +
		'biodiesel Wes Anderson, blog stumptown meh mlkshk pickled farm-to-table jean shorts yr put a bird on it. ' +
		'Kickstarter post-ironic mustache, locavore letterpress cornhole put a bird on it.\n Bicycle rights migas ' +
		'readymade, brunch Austin flexitarian forage cold-pressed single-origin coffee American Apparel meditation ' +
		'messenger bag vinyl. Blog polaroid single-origin coffee, ethical semiotics sriracha Shoreditch tilde chambray. ' +
		'Cardigan Vice church-key food truck distillery irony gentrify Helvetica. Brunch Carles PBR lumbersexual, PBR&B ' +
		'biodiesel vinyl XOXO pork belly VHS narwhal roof party 8-bit. Pop-up craft beer Williamsburg Bushwick. ' +
		'Lumbersexual meggings leggings tilde chambray, selfies wayfarers Helvetica kogi art party pickled freegan ' +
		'Schlitz Banksy. Polaroid tattooed messenger bag Brooklyn scenester butcher.\n Portland PBR plaid tilde salvia, ' +
		'scenester farm-to-table vegan 8-bit Banksy butcher drinking vinegar Marfa 3 wolf moon. Neutra mumblecore irony ' +
		'mixtape photo booth XOXO, plaid kitsch shabby chic you probably haven\'t heard of them raw denim Wes Anderson ' +
		' organic. Austin Bushwick fanny pack literally, 90\'s yr vegan. Sustainable Thundercats biodiesel cred cornhole' +
		' Tumblr. Hoodie fap skateboard, synth cray fanny pack locavore viral. 3 wolf moon flexitarian lomo trust fund.' +
		' Lomo PBR&B trust fund, tattooed Brooklyn ennui four dollar toast Thundercats.',

		records = [
			{
				when: '1/1/2011',
				where: 'Melbourne',
				type: 'Standard',
				practitioner: 'Johnny',
				logInfo: genericLogInfo
			},
			{
				when: '2/2/2012',
				where: 'Sydney',
				type: 'Standard',
				practitioner: 'Alfred',
				logInfo: genericLogInfo
			},
			{
				when: '3/3/2013',
				where: 'Hobart',
				type: 'Initial',
				practitioner: 'Mary',
				logInfo: genericLogInfo
			}
		],

	viewLogLabel = 'View log',
	hideLogLabel = 'Hide log',

	generateTableContent = Handlebars.compile($('#table-content-templ').html()),
	generatedTable = generateTableContent({records: records});

	// Append compiled handlebars template
	$('.rg-table-header').after(generatedTable);

	$('.rg-table-toggle-log').on('click', function(e) {
		e.preventDefault();

		// Change label
		$(this).text($(this).text() === viewLogLabel ? hideLogLabel : viewLogLabel);

		$(this).toggleClass('rg-table-log-showing');

		// Show content
		$(this).next('.rg-table-log-content').toggle();
	});
}($));
