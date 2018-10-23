Add aliases to webpack config files
( /node_modules/react-scripts/config — webpack.config.dev.js and webpack.config.prod.js ):

	alias: {
		  $comp: path.resolve('src/app/blocks/components'),
		  $cont: path.resolve('src/app/blocks/containers'),
		   $hoc: path.resolve('src/app/blocks/hoc'),

		 $store: path.resolve('src/app/api/store'),
		 $total: path.resolve('src/app/api/total'),
		 $utils: path.resolve('src/app/api/utils'),

		 $const: path.resolve('src/app/const'),
		$routes: path.resolve('src/app/routes'),
		$assets: path.resolve('src/assets')
	}