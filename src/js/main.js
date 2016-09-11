function initSiteMap() {
    $('#siteMapToggle').on('click', function (e) {
        e.preventDefault();
        $('#siteMap').toggleClass('active');
    });
}

function initSearch() {
    $('#searchToggle').on('click', function (e) {
        e.preventDefault();
        $('#search').toggleClass('active');
        if ($('#search').is('.active')) {
            $('#searchInput').focus();
        }
    });
}

function carrousel() {
    $('#slider').slick({
        autoplay: true,
        autoplaySpeed: 8000,
        arrows: false
    });
}

function initToggleMenu() {
    $('#toggleMenu').on('click', function (e) {
        e.preventDefault();
        $('#navigation').toggleClass('active');
        $(this).toggleClass('active');
    });
    $('#navigation').on('click', function () {
        $('#toggleMenu').removeClass('active');
        $(this).removeClass('active');
    });
}

function contactForm($form, fields) {
    var self = this;

    $form.on('submit', function (e) {
        e.preventDefault();
        self.submit();
    });

    self.fields = fields;

    self.validate = function () {
        var valid = true;
        for (var i = 0; i < self.fields.length; i++) {
            if (!self.fields[i].val().trim().length) {
                self.setInvalidField(self.fields[i])
                valid = false;
            }
            if (self.fields[i].is('[type=email]')) {
                var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                if (!re.test(self.fields[i].val())) {
                    self.setInvalidField(self.fields[i]);
                    valid = false;
                };
            }
        }
        return valid;
    }

    self.setInvalidField = function ($field) {
        $field.closest('.form-group').addClass('has-error');
        $field.closest('.form-group').off('click.validate').on('click.validate', function () {
            $(this).removeClass('has-error');
        });
    }

    self.submit = function () {        
        if (validate()) {
            // aqui simulei um post com o setTimeout apenas para visualização do teste
            self.changeState('sending');
            window.setTimeout(function () {  
                self.changeState('sent');
                window.setTimeout(function(){
                    self.changeState();
                    $form.trigger('reset');
                },7000)
            }, 3000);
        } 
    }
    
    self.changeState = function (state) {
        $form.removeClass(function (index, css) {
            return (css.match (/(^|\s)state-\S+/g) || []).join(' ');
        });
        if(state){
            $form.addClass('state-'+state);
        }        
    }
}

$(function () {
    initSiteMap();
    initSearch();
    initToggleMenu();    
    carrousel();    
    contactForm(
        $('#contactForm'),
        [$('#nome'), $('#email'), $('#telefone'), $('#mensagem')]
    );
})