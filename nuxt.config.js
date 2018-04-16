const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  router: {
    base: '/thesis/'
  },
    generate:{
  		dir: 'docs'
  	}
} : {
 		 generate:{
  			dir: 'docs'
		 }
	}

module.exports = {
  ...routerBase,
  modules: [
	'bootstrap-vue/nuxt'
  ],
  head:{
  	meta:[
		{ name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=no' }
  	],
    script: [
       { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js' },
       { src: 'https://code.jquery.com/ui/1.12.1/jquery-ui.js'}

    ],
    link: [
       { rel:'stylesheet', href: '//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css"'}
    ]
  }

}
