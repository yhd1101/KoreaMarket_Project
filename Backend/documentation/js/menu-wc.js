'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">nest_koreanmarket documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppConfigModule.html" data-type="entity-link" >AppConfigModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-44aff12eeadef1915c1022900a827594897dab22608e1e1231d8a94608e1432b752d5b5c22f208896889099059c4f7ed4f33f98a00001eeb80de8fba7e092ea8"' : 'data-bs-target="#xs-controllers-links-module-AppModule-44aff12eeadef1915c1022900a827594897dab22608e1e1231d8a94608e1432b752d5b5c22f208896889099059c4f7ed4f33f98a00001eeb80de8fba7e092ea8"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-44aff12eeadef1915c1022900a827594897dab22608e1e1231d8a94608e1432b752d5b5c22f208896889099059c4f7ed4f33f98a00001eeb80de8fba7e092ea8"' :
                                            'id="xs-controllers-links-module-AppModule-44aff12eeadef1915c1022900a827594897dab22608e1e1231d8a94608e1432b752d5b5c22f208896889099059c4f7ed4f33f98a00001eeb80de8fba7e092ea8"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-44aff12eeadef1915c1022900a827594897dab22608e1e1231d8a94608e1432b752d5b5c22f208896889099059c4f7ed4f33f98a00001eeb80de8fba7e092ea8"' : 'data-bs-target="#xs-injectables-links-module-AppModule-44aff12eeadef1915c1022900a827594897dab22608e1e1231d8a94608e1432b752d5b5c22f208896889099059c4f7ed4f33f98a00001eeb80de8fba7e092ea8"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-44aff12eeadef1915c1022900a827594897dab22608e1e1231d8a94608e1432b752d5b5c22f208896889099059c4f7ed4f33f98a00001eeb80de8fba7e092ea8"' :
                                        'id="xs-injectables-links-module-AppModule-44aff12eeadef1915c1022900a827594897dab22608e1e1231d8a94608e1432b752d5b5c22f208896889099059c4f7ed4f33f98a00001eeb80de8fba7e092ea8"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AuthModule-03caeeaebc2c87a91efc8772ae92caf89b8ec8280bc16cce58614419e8fac89512083cc786aeb8c36a6dc256612de63833576b8b7d9248d7b9fdba9a14d0f14f"' : 'data-bs-target="#xs-controllers-links-module-AuthModule-03caeeaebc2c87a91efc8772ae92caf89b8ec8280bc16cce58614419e8fac89512083cc786aeb8c36a6dc256612de63833576b8b7d9248d7b9fdba9a14d0f14f"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-03caeeaebc2c87a91efc8772ae92caf89b8ec8280bc16cce58614419e8fac89512083cc786aeb8c36a6dc256612de63833576b8b7d9248d7b9fdba9a14d0f14f"' :
                                            'id="xs-controllers-links-module-AuthModule-03caeeaebc2c87a91efc8772ae92caf89b8ec8280bc16cce58614419e8fac89512083cc786aeb8c36a6dc256612de63833576b8b7d9248d7b9fdba9a14d0f14f"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthModule-03caeeaebc2c87a91efc8772ae92caf89b8ec8280bc16cce58614419e8fac89512083cc786aeb8c36a6dc256612de63833576b8b7d9248d7b9fdba9a14d0f14f"' : 'data-bs-target="#xs-injectables-links-module-AuthModule-03caeeaebc2c87a91efc8772ae92caf89b8ec8280bc16cce58614419e8fac89512083cc786aeb8c36a6dc256612de63833576b8b7d9248d7b9fdba9a14d0f14f"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-03caeeaebc2c87a91efc8772ae92caf89b8ec8280bc16cce58614419e8fac89512083cc786aeb8c36a6dc256612de63833576b8b7d9248d7b9fdba9a14d0f14f"' :
                                        'id="xs-injectables-links-module-AuthModule-03caeeaebc2c87a91efc8772ae92caf89b8ec8280bc16cce58614419e8fac89512083cc786aeb8c36a6dc256612de63833576b8b7d9248d7b9fdba9a14d0f14f"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/GoogleAuthStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GoogleAuthStrategy</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/JwtAuthStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JwtAuthStrategy</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/KakaoAuthStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >KakaoAuthStrategy</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/LocalAuthStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LocalAuthStrategy</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/NaverAuthStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NaverAuthStrategy</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CommentModule.html" data-type="entity-link" >CommentModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-CommentModule-7c26abc2723e9cbb618a53a5a1426f75e71c7f0e7b0192f13b8ae643c0fcbd56a71f88b08d95bbde81728b8661d1839e65b08f7c39023df651175de8582ecc3a"' : 'data-bs-target="#xs-controllers-links-module-CommentModule-7c26abc2723e9cbb618a53a5a1426f75e71c7f0e7b0192f13b8ae643c0fcbd56a71f88b08d95bbde81728b8661d1839e65b08f7c39023df651175de8582ecc3a"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-CommentModule-7c26abc2723e9cbb618a53a5a1426f75e71c7f0e7b0192f13b8ae643c0fcbd56a71f88b08d95bbde81728b8661d1839e65b08f7c39023df651175de8582ecc3a"' :
                                            'id="xs-controllers-links-module-CommentModule-7c26abc2723e9cbb618a53a5a1426f75e71c7f0e7b0192f13b8ae643c0fcbd56a71f88b08d95bbde81728b8661d1839e65b08f7c39023df651175de8582ecc3a"' }>
                                            <li class="link">
                                                <a href="controllers/CommentController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CommentController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-CommentModule-7c26abc2723e9cbb618a53a5a1426f75e71c7f0e7b0192f13b8ae643c0fcbd56a71f88b08d95bbde81728b8661d1839e65b08f7c39023df651175de8582ecc3a"' : 'data-bs-target="#xs-injectables-links-module-CommentModule-7c26abc2723e9cbb618a53a5a1426f75e71c7f0e7b0192f13b8ae643c0fcbd56a71f88b08d95bbde81728b8661d1839e65b08f7c39023df651175de8582ecc3a"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CommentModule-7c26abc2723e9cbb618a53a5a1426f75e71c7f0e7b0192f13b8ae643c0fcbd56a71f88b08d95bbde81728b8661d1839e65b08f7c39023df651175de8582ecc3a"' :
                                        'id="xs-injectables-links-module-CommentModule-7c26abc2723e9cbb618a53a5a1426f75e71c7f0e7b0192f13b8ae643c0fcbd56a71f88b08d95bbde81728b8661d1839e65b08f7c39023df651175de8582ecc3a"' }>
                                        <li class="link">
                                            <a href="injectables/CommentService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CommentService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/DatabaseModule.html" data-type="entity-link" >DatabaseModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/EmailModule.html" data-type="entity-link" >EmailModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-EmailModule-154712f7ecc180b16978e1bfbcd44a4dff45e6b84c32d58f85f98c8042af9ce15371ef68277faabd1348281df886101356081a38c728b760007965d0c0c5aca1"' : 'data-bs-target="#xs-injectables-links-module-EmailModule-154712f7ecc180b16978e1bfbcd44a4dff45e6b84c32d58f85f98c8042af9ce15371ef68277faabd1348281df886101356081a38c728b760007965d0c0c5aca1"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-EmailModule-154712f7ecc180b16978e1bfbcd44a4dff45e6b84c32d58f85f98c8042af9ce15371ef68277faabd1348281df886101356081a38c728b760007965d0c0c5aca1"' :
                                        'id="xs-injectables-links-module-EmailModule-154712f7ecc180b16978e1bfbcd44a4dff45e6b84c32d58f85f98c8042af9ce15371ef68277faabd1348281df886101356081a38c728b760007965d0c0c5aca1"' }>
                                        <li class="link">
                                            <a href="injectables/EmailService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EmailService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/OrderModule.html" data-type="entity-link" >OrderModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-OrderModule-9d1efda5055064564d2a0eafd22ba4fe52f4a3e9470e59bc462825fc7517fd4058c608c0b1fb72d7b66a580a8b5b7d80c1675f744265ac66f948ae720393ddc0"' : 'data-bs-target="#xs-controllers-links-module-OrderModule-9d1efda5055064564d2a0eafd22ba4fe52f4a3e9470e59bc462825fc7517fd4058c608c0b1fb72d7b66a580a8b5b7d80c1675f744265ac66f948ae720393ddc0"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-OrderModule-9d1efda5055064564d2a0eafd22ba4fe52f4a3e9470e59bc462825fc7517fd4058c608c0b1fb72d7b66a580a8b5b7d80c1675f744265ac66f948ae720393ddc0"' :
                                            'id="xs-controllers-links-module-OrderModule-9d1efda5055064564d2a0eafd22ba4fe52f4a3e9470e59bc462825fc7517fd4058c608c0b1fb72d7b66a580a8b5b7d80c1675f744265ac66f948ae720393ddc0"' }>
                                            <li class="link">
                                                <a href="controllers/OrderController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OrderController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-OrderModule-9d1efda5055064564d2a0eafd22ba4fe52f4a3e9470e59bc462825fc7517fd4058c608c0b1fb72d7b66a580a8b5b7d80c1675f744265ac66f948ae720393ddc0"' : 'data-bs-target="#xs-injectables-links-module-OrderModule-9d1efda5055064564d2a0eafd22ba4fe52f4a3e9470e59bc462825fc7517fd4058c608c0b1fb72d7b66a580a8b5b7d80c1675f744265ac66f948ae720393ddc0"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-OrderModule-9d1efda5055064564d2a0eafd22ba4fe52f4a3e9470e59bc462825fc7517fd4058c608c0b1fb72d7b66a580a8b5b7d80c1675f744265ac66f948ae720393ddc0"' :
                                        'id="xs-injectables-links-module-OrderModule-9d1efda5055064564d2a0eafd22ba4fe52f4a3e9470e59bc462825fc7517fd4058c608c0b1fb72d7b66a580a8b5b7d80c1675f744265ac66f948ae720393ddc0"' }>
                                        <li class="link">
                                            <a href="injectables/OrderService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OrderService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProductModule.html" data-type="entity-link" >ProductModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-ProductModule-02cfa1927129a32f94a9e610a076f81dd42bade45c5aa946f6024fe59698c67fbd1f220f9ac4675d1ca939615b66f62b590d714c395c06c77a91125589fd304f"' : 'data-bs-target="#xs-controllers-links-module-ProductModule-02cfa1927129a32f94a9e610a076f81dd42bade45c5aa946f6024fe59698c67fbd1f220f9ac4675d1ca939615b66f62b590d714c395c06c77a91125589fd304f"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ProductModule-02cfa1927129a32f94a9e610a076f81dd42bade45c5aa946f6024fe59698c67fbd1f220f9ac4675d1ca939615b66f62b590d714c395c06c77a91125589fd304f"' :
                                            'id="xs-controllers-links-module-ProductModule-02cfa1927129a32f94a9e610a076f81dd42bade45c5aa946f6024fe59698c67fbd1f220f9ac4675d1ca939615b66f62b590d714c395c06c77a91125589fd304f"' }>
                                            <li class="link">
                                                <a href="controllers/ProductController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-ProductModule-02cfa1927129a32f94a9e610a076f81dd42bade45c5aa946f6024fe59698c67fbd1f220f9ac4675d1ca939615b66f62b590d714c395c06c77a91125589fd304f"' : 'data-bs-target="#xs-injectables-links-module-ProductModule-02cfa1927129a32f94a9e610a076f81dd42bade45c5aa946f6024fe59698c67fbd1f220f9ac4675d1ca939615b66f62b590d714c395c06c77a91125589fd304f"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ProductModule-02cfa1927129a32f94a9e610a076f81dd42bade45c5aa946f6024fe59698c67fbd1f220f9ac4675d1ca939615b66f62b590d714c395c06c77a91125589fd304f"' :
                                        'id="xs-injectables-links-module-ProductModule-02cfa1927129a32f94a9e610a076f81dd42bade45c5aa946f6024fe59698c67fbd1f220f9ac4675d1ca939615b66f62b590d714c395c06c77a91125589fd304f"' }>
                                        <li class="link">
                                            <a href="injectables/ProductService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/RatingModule.html" data-type="entity-link" >RatingModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-RatingModule-48159a4f0ba55f88a4afd968e520f00635210ef5c8ea664934597fe25898f70b632e752160c723d8d2e109b1add339518afd6b12c9657a9ceaf1de221c1be638"' : 'data-bs-target="#xs-controllers-links-module-RatingModule-48159a4f0ba55f88a4afd968e520f00635210ef5c8ea664934597fe25898f70b632e752160c723d8d2e109b1add339518afd6b12c9657a9ceaf1de221c1be638"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-RatingModule-48159a4f0ba55f88a4afd968e520f00635210ef5c8ea664934597fe25898f70b632e752160c723d8d2e109b1add339518afd6b12c9657a9ceaf1de221c1be638"' :
                                            'id="xs-controllers-links-module-RatingModule-48159a4f0ba55f88a4afd968e520f00635210ef5c8ea664934597fe25898f70b632e752160c723d8d2e109b1add339518afd6b12c9657a9ceaf1de221c1be638"' }>
                                            <li class="link">
                                                <a href="controllers/RatingController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RatingController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-RatingModule-48159a4f0ba55f88a4afd968e520f00635210ef5c8ea664934597fe25898f70b632e752160c723d8d2e109b1add339518afd6b12c9657a9ceaf1de221c1be638"' : 'data-bs-target="#xs-injectables-links-module-RatingModule-48159a4f0ba55f88a4afd968e520f00635210ef5c8ea664934597fe25898f70b632e752160c723d8d2e109b1add339518afd6b12c9657a9ceaf1de221c1be638"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-RatingModule-48159a4f0ba55f88a4afd968e520f00635210ef5c8ea664934597fe25898f70b632e752160c723d8d2e109b1add339518afd6b12c9657a9ceaf1de221c1be638"' :
                                        'id="xs-injectables-links-module-RatingModule-48159a4f0ba55f88a4afd968e520f00635210ef5c8ea664934597fe25898f70b632e752160c723d8d2e109b1add339518afd6b12c9657a9ceaf1de221c1be638"' }>
                                        <li class="link">
                                            <a href="injectables/RatingService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RatingService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/RedisModule.html" data-type="entity-link" >RedisModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ReservationModule.html" data-type="entity-link" >ReservationModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-ReservationModule-179bd7ffaed3439f8e8de093ac7efa4d330466c0a3980b8b93c9f45adbad6c31967fff06696f093adf78a29e83809afc8e47c26a1951c7fdf73e87624d6853c5"' : 'data-bs-target="#xs-controllers-links-module-ReservationModule-179bd7ffaed3439f8e8de093ac7efa4d330466c0a3980b8b93c9f45adbad6c31967fff06696f093adf78a29e83809afc8e47c26a1951c7fdf73e87624d6853c5"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ReservationModule-179bd7ffaed3439f8e8de093ac7efa4d330466c0a3980b8b93c9f45adbad6c31967fff06696f093adf78a29e83809afc8e47c26a1951c7fdf73e87624d6853c5"' :
                                            'id="xs-controllers-links-module-ReservationModule-179bd7ffaed3439f8e8de093ac7efa4d330466c0a3980b8b93c9f45adbad6c31967fff06696f093adf78a29e83809afc8e47c26a1951c7fdf73e87624d6853c5"' }>
                                            <li class="link">
                                                <a href="controllers/ReservationController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ReservationController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-ReservationModule-179bd7ffaed3439f8e8de093ac7efa4d330466c0a3980b8b93c9f45adbad6c31967fff06696f093adf78a29e83809afc8e47c26a1951c7fdf73e87624d6853c5"' : 'data-bs-target="#xs-injectables-links-module-ReservationModule-179bd7ffaed3439f8e8de093ac7efa4d330466c0a3980b8b93c9f45adbad6c31967fff06696f093adf78a29e83809afc8e47c26a1951c7fdf73e87624d6853c5"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ReservationModule-179bd7ffaed3439f8e8de093ac7efa4d330466c0a3980b8b93c9f45adbad6c31967fff06696f093adf78a29e83809afc8e47c26a1951c7fdf73e87624d6853c5"' :
                                        'id="xs-injectables-links-module-ReservationModule-179bd7ffaed3439f8e8de093ac7efa4d330466c0a3980b8b93c9f45adbad6c31967fff06696f093adf78a29e83809afc8e47c26a1951c7fdf73e87624d6853c5"' }>
                                        <li class="link">
                                            <a href="injectables/ReservationService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ReservationService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UsersModule-2d50658e9964f0511d8f0129bdf2181f3722b0405ae7a9ae9b7635b9b1f1bafbb55a6c9d7ff61917ad7a135433e095002d15bd7376a8c4b6b7a8413b0940539a"' : 'data-bs-target="#xs-controllers-links-module-UsersModule-2d50658e9964f0511d8f0129bdf2181f3722b0405ae7a9ae9b7635b9b1f1bafbb55a6c9d7ff61917ad7a135433e095002d15bd7376a8c4b6b7a8413b0940539a"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersModule-2d50658e9964f0511d8f0129bdf2181f3722b0405ae7a9ae9b7635b9b1f1bafbb55a6c9d7ff61917ad7a135433e095002d15bd7376a8c4b6b7a8413b0940539a"' :
                                            'id="xs-controllers-links-module-UsersModule-2d50658e9964f0511d8f0129bdf2181f3722b0405ae7a9ae9b7635b9b1f1bafbb55a6c9d7ff61917ad7a135433e095002d15bd7376a8c4b6b7a8413b0940539a"' }>
                                            <li class="link">
                                                <a href="controllers/UsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UsersModule-2d50658e9964f0511d8f0129bdf2181f3722b0405ae7a9ae9b7635b9b1f1bafbb55a6c9d7ff61917ad7a135433e095002d15bd7376a8c4b6b7a8413b0940539a"' : 'data-bs-target="#xs-injectables-links-module-UsersModule-2d50658e9964f0511d8f0129bdf2181f3722b0405ae7a9ae9b7635b9b1f1bafbb55a6c9d7ff61917ad7a135433e095002d15bd7376a8c4b6b7a8413b0940539a"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-2d50658e9964f0511d8f0129bdf2181f3722b0405ae7a9ae9b7635b9b1f1bafbb55a6c9d7ff61917ad7a135433e095002d15bd7376a8c4b6b7a8413b0940539a"' :
                                        'id="xs-injectables-links-module-UsersModule-2d50658e9964f0511d8f0129bdf2181f3722b0405ae7a9ae9b7635b9b1f1bafbb55a6c9d7ff61917ad7a135433e095002d15bd7376a8c4b6b7a8413b0940539a"' }>
                                        <li class="link">
                                            <a href="injectables/UsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#controllers-links"' :
                                'data-bs-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AuthController.html" data-type="entity-link" >AuthController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/CommentController.html" data-type="entity-link" >CommentController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/OrderController.html" data-type="entity-link" >OrderController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/ProductController.html" data-type="entity-link" >ProductController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/ReservationController.html" data-type="entity-link" >ReservationController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UsersController.html" data-type="entity-link" >UsersController</a>
                                </li>
                            </ul>
                        </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#entities-links"' :
                                'data-bs-target="#xs-entities-links"' }>
                                <span class="icon ion-ios-apps"></span>
                                <span>Entities</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="entities-links"' : 'id="xs-entities-links"' }>
                                <li class="link">
                                    <a href="entities/Comment.html" data-type="entity-link" >Comment</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Product.html" data-type="entity-link" >Product</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Rating.html" data-type="entity-link" >Rating</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Reservation.html" data-type="entity-link" >Reservation</a>
                                </li>
                                <li class="link">
                                    <a href="entities/User.html" data-type="entity-link" >User</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Auth.html" data-type="entity-link" >Auth</a>
                            </li>
                            <li class="link">
                                <a href="classes/BaseAPIDocument.html" data-type="entity-link" >BaseAPIDocument</a>
                            </li>
                            <li class="link">
                                <a href="classes/ChangePasswordDto.html" data-type="entity-link" >ChangePasswordDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CommonEntity.html" data-type="entity-link" >CommonEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/ConfirmEmailDto.html" data-type="entity-link" >ConfirmEmailDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateAuthDto.html" data-type="entity-link" >CreateAuthDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateCommentDto.html" data-type="entity-link" >CreateCommentDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateOrderDto.html" data-type="entity-link" >CreateOrderDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateProductDto.html" data-type="entity-link" >CreateProductDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateRatingDto.html" data-type="entity-link" >CreateRatingDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateReservationDto.html" data-type="entity-link" >CreateReservationDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/HttpExceptionFilter.html" data-type="entity-link" >HttpExceptionFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/KakaoAuthGuard.html" data-type="entity-link" >KakaoAuthGuard</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginUserDto.html" data-type="entity-link" >LoginUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/NewPasswordDto.html" data-type="entity-link" >NewPasswordDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Order.html" data-type="entity-link" >Order</a>
                            </li>
                            <li class="link">
                                <a href="classes/PageDto.html" data-type="entity-link" >PageDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PageMetaDto.html" data-type="entity-link" >PageMetaDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PageOptionsDto.html" data-type="entity-link" >PageOptionsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateAuthDto.html" data-type="entity-link" >UpdateAuthDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateCommentDto.html" data-type="entity-link" >UpdateCommentDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateOrderDto.html" data-type="entity-link" >UpdateOrderDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateProductDto.html" data-type="entity-link" >UpdateProductDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateRatingDto.html" data-type="entity-link" >UpdateRatingDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateReservationDto.html" data-type="entity-link" >UpdateReservationDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateUserDto.html" data-type="entity-link" >UpdateUserDto</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CommentService.html" data-type="entity-link" >CommentService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/EmailService.html" data-type="entity-link" >EmailService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GoogleAuthGuard.html" data-type="entity-link" >GoogleAuthGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GoogleAuthStrategy.html" data-type="entity-link" >GoogleAuthStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtAuthGuard.html" data-type="entity-link" >JwtAuthGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtAuthStrategy.html" data-type="entity-link" >JwtAuthStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/KakaoAuthStrategy.html" data-type="entity-link" >KakaoAuthStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LocalAuthGuard.html" data-type="entity-link" >LocalAuthGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LocalAuthStrategy.html" data-type="entity-link" >LocalAuthStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/NaverAuthGuard.html" data-type="entity-link" >NaverAuthGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/NaverAuthStrategy.html" data-type="entity-link" >NaverAuthStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/OrderService.html" data-type="entity-link" >OrderService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProductService.html" data-type="entity-link" >ProductService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ReservationService.html" data-type="entity-link" >ReservationService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TransformInterceptor.html" data-type="entity-link" >TransformInterceptor</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UsersService.html" data-type="entity-link" >UsersService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/PageMetaDtoParametersInterface.html" data-type="entity-link" >PageMetaDtoParametersInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ProductInterface.html" data-type="entity-link" >ProductInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RequestWithUserInterface.html" data-type="entity-link" >RequestWithUserInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TokenPayloadInterface.html" data-type="entity-link" >TokenPayloadInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/VerificationTokenPayloadInterface.html" data-type="entity-link" >VerificationTokenPayloadInterface</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});