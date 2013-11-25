define([
    'jquery',
    'underscore',
    'backbone',
    'views/dashboard',
    'views/typography',
    'views/elements',
    'views/buttons',
    'views/error_404',
    'views/calendar',
    'views/blank',
    'views/dropzone',
    'views/faq',
    'views/form_elements',
    'views/form_wizard',
    'views/gallery',
    'views/grid',
    'views/inbox',
    'views/invoice',
    'views/jqgrid',
    'views/jquery_ui',
    'views/login',
    'views/nestable_list',
    'views/pricing',
    'views/profile',
    'views/tables',
    'views/timeline',
    'views/treeview',
    'views/widgets',
    'views/wysiwyg',
    'views/error_500',
    'views/dform_elements',
    'views/dform_wizard',
    'views/ganttv1',
    'views/ganttv2',
    'views/ganttv3'
    
    ], function($, _, Backbone, dashboardview, typographyview, elementsview, buttonview, errorview, calendarview, blank, dropzone, faq, form_elements, form_wizard, gallery, grid, inbox, invoice,
        jqgrid, jquery_ui, login, nestable_list, pricing, profile, tables, timeline, treeview, widgets, wysiwyg, error_500,dform_elements,dform_wizard, ganttv1, ganttv2, ganttv3) {
 
        var AppRouter = Backbone.Router.extend({
            routes: {
                // Define some URL routes
                'dashborad'                 : 'showDashboard',
                'typography'                :'showTypography',
                'ui-elements/ui_elements'   :'showuielements',
                'ui-elements/buttons'       :'showbuttons',
                'other-pages/error_404'     :'showerror',
                'calendar'                  :'showCalendar',
                'ganttv1'                   :'showganttv1',
                'ganttv2'                   :'showganttv2',
                'ganttv3'                   :'showganttv3',
                'other-pages/blank'         :'showblank',
                'forms/dropzone'            :'showdropzone',
                'other-pages/faq'           :'showfaq',
                'forms/form_elements'       :'showformelements',
                'forms/form_wizard'         :'showformwizard',
                'gallery'                   :'showgallery',
                'other-pages/grid'          :'showgrid',
                'more-pages/inbox'          :'showinbox',
                'more-pages/invoice'        :'showinvoices',
                'tables-ui/jqgrid'          :'showjqgrid',
                'ui-elements/jquery_ui'     :'showjqueryui',
                'login'                     :'showlogin',
                'ui-elements/nestable_list' :'shownestablelist',
                'more-pages/pricing'        :'showpricing',
                'more-pages/profile'        :'showprofile',
                'tables-ui/tables'          :'showtables',
                'more-pages/timeline'       :'showtimeline',
                'ui-elements/treeview'      :'showtreeview',
                'widgets'                   :'showwidgets',
                'forms/wysiwyg'             :'showwysiwyg',
                'other-pages/error_500'     :'showerror500',
                'forms/dform_elements'      :'showdform',
                'forms/dform_wizard'        :'showdform_wizard',
                // Default
                '*actions'                  :'showDashboard'
            }
        });
 
        var initialize = function(){

            var app_router = new AppRouter;

            app_router.on('route:showDashboard', function(){
                
                // Call render on the module we loaded in via the dependency array
                var dashview = new dashboardview();
                dashview.render();
       

            });

            app_router.on('route:showTypography', function(){
               
                // Call render on the module we loaded in via the dependency array
                var typoview = new typographyview();
                typoview.render();

            });
            app_router.on('route:showuielements', function(){
               
                // Call render on the module we loaded in via the dependency array
                var eleview = new elementsview();
                eleview.render();

            });
            app_router.on('route:showbuttons', function(){
                
                // Call render on the module we loaded in via the dependency array
                var butview = new buttonview();
                butview.render();

            });
            app_router.on('route:showerror', function(){
               
                // Call render on the module we loaded in via the dependency array
                var errview = new errorview();
                errview.render();

            });
            app_router.on('route:showCalendar', function(){
               
                // Call render on the module we loaded in via the dependency array
                var calview = new calendarview();
                calview.render();

            });
            app_router.on('route:showganttv1', function(){
               
                // Call render on the module we loaded in via the dependency array
                var ganttv1view = new ganttv1();
                ganttv1view.render();

            });
            app_router.on('route:showganttv2', function(){
               
                // Call render on the module we loaded in via the dependency array
                var ganttv2view = new ganttv2();
                ganttv2view.render();

            });
            app_router.on('route:showganttv3', function(){
               
                // Call render on the module we loaded in via the dependency array
                var ganttv3view = new ganttv3();
                ganttv3view.render();

            });
            app_router.on('route:showblank', function(){
               
                // Call render on the module we loaded in via the dependency array
                var blankview = new blank();
                blankview.render();

            });
            
            app_router.on('route:showdropzone', function(){
               
                // Call render on the module we loaded in via the dependency array
                var dropzoneview = new dropzone();
                dropzoneview.render();

            });
            app_router.on('route:showfaq', function(){
               
                // Call render on the module we loaded in via the dependency array
                var faqview = new faq();
                faqview.render();

            });
            app_router.on('route:showformelements', function(){
                
                // Call render on the module we loaded in via the dependency array
                var form_elementsview = new form_elements();
                form_elementsview.render();

            });
            app_router.on('route:showformwizard', function(){
                
                // Call render on the module we loaded in via the dependency array
                var form_wizardview = new form_wizard();
                form_wizardview.render();

            });
            app_router.on('route:showgallery', function(){
                
                // Call render on the module we loaded in via the dependency array
                var galleryview = new gallery();
                galleryview.render();

            });
            app_router.on('route:showgrid', function(){
                
                // Call render on the module we loaded in via the dependency array
                var gridview = new grid();
                gridview.render();

            });
            app_router.on('route:showinbox', function(){
                
                // Call render on the module we loaded in via the dependency array
                var inboxview = new inbox();
                inboxview.render();

            });
            app_router.on('route:showinvoices', function(){
                
                // Call render on the module we loaded in via the dependency array
                var invoiceview = new invoice();
                invoiceview.render();

            });
            app_router.on('route:showjqgrid', function(){
                
                // Call render on the module we loaded in via the dependency array
                var jqgridview = new jqgrid();
                jqgridview.render();

            });
            app_router.on('route:showjqueryui', function(){
                
                // Call render on the module we loaded in via the dependency array
                var jquery_uiview = new jquery_ui();
                jquery_uiview.render();

            });
            app_router.on('route:showlogin', function(){
                
                // Call render on the module we loaded in via the dependency array
                var loginview = new login();
                loginview.render();

            });
            app_router.on('route:shownestablelist', function(){
                
                // Call render on the module we loaded in via the dependency array
                var nestable_listview = new nestable_list();
                nestable_listview.render();

            });
            app_router.on('route:showpricing', function(){
               
                // Call render on the module we loaded in via the dependency array
                var pricingview = new pricing();
                pricingview.render();

            });
            app_router.on('route:showprofile', function(){
                
                // Call render on the module we loaded in via the dependency array
                var profileview = new profile();
                profileview.render();

            });
            app_router.on('route:showtables', function(){
               
                // Call render on the module we loaded in via the dependency array
                var tablesview = new tables();
                tablesview.render();

            });
            app_router.on('route:showtimeline', function(){
                
                // Call render on the module we loaded in via the dependency array
                var timelineview = new timeline();
                timelineview.render();

            });
            app_router.on('route:showtreeview', function(){
                
                // Call render on the module we loaded in via the dependency array
                var Treeviewview = new treeview();
                Treeviewview.render();

            });
            app_router.on('route:showwidgets', function(){
               
                // Call render on the module we loaded in via the dependency array
                var widgetsview = new widgets();
                widgetsview.render();

            });
            app_router.on('route:showwysiwyg', function(){
               
                // Call render on the module we loaded in via the dependency array
                var wysiwygview = new wysiwyg();
                wysiwygview.render();

            });
            app_router.on('route:showerror500', function(){
               
                // Call render on the module we loaded in via the dependency array
                var error_500view = new error_500();
                error_500view.render();

            });
            app_router.on('route:showdform', function(){
                
                // Call render on the module we loaded in via the dependency array
                var dform_elementsview = new dform_elements();
                dform_elementsview.render();

            });
                app_router.on('route:showdform_wizard', function(){
                
                // Call render on the module we loaded in via the dependency array
                var dform_elementsview = new dform_wizard();
                dform_elementsview.render();

            });
            Backbone.history.start();
        };
        return {
            initialize: initialize
        };
    });