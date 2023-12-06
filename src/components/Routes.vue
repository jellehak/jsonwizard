<template>
    <!-- <LogOut path='/uitloggen' component="LogOut"/> -->
    <Route type=ClubPublicRoute path='/login' title='Inloggen' component="LoginPage"/>
    <Route type=ClubPublicRoute path='/vergeten'  component="PasswordForgetPage"/>
    <Route exact path='/wachtwoord/:password_reset_code/' component="PasswordResetPage"/>
    <Route exact path='/nieuw_email/:email_code/' component="ActivateEmailPage"/>
    <Route exact path='/login_complete' component="LoginWithAccessTokenPage"/>
    <Route exact path='/privacy' title='Privacyverklaring' component="GDPRpage"/>
    <Route type=private path='/aanmelden/print/:id' component="PrintAanmeldLijstPagina" title='Aanmeldlijst' :requires="['vliegt', 'iedereen_aanmelden']"/>
    <Route type=private path='/aanmelden/:id' component="AanmeldLijstPagina" title='Aanmeldlijst' :requires="['vliegt', 'iedereen_aanmelden']"/>
    <Route type=private path='/aanmelden' component="DagOverzichtPagina" title='Aanmeldlijst' :requires="['vliegt', 'iedereen_aanmelden']"/>
    <Route type=private path='/start/:id/:uuid' component="StartAdministratiePagina" title='Startadministratie' :requires="['vliegt', 'wijzig_start']"/>
    <Route type=private path='/start/:id' component="StartAdministratiePagina" title='Startadministratie' :requires="['vliegt', 'wijzig_start']"/>
    <Route type=private path='/start' component="DagOverzichtPagina" title='Startadministratie' :requires="['vliegt', 'wijzig_start']"/>
    <Route type=private path='/totaal/:id' component="DagtotaalPagina" title='Dagtotaal' :requires="['vliegt', 'wijzig_start']"/>
    <Route type=private path='/sleep/:id' component="SleepAdministratiePagina" title='Sleepadministratie' :requires="['wijzig_sleep']"/>
    <Route type=private path='/sleep' component="DagOverzichtPagina" title='Sleepadministratie' :requires="['wijzig_sleep']"/>
    <Route type=private path='/dagverslag/:id' component="DagVerslagPagina" title='Dagverslag' :requires="['ziet_dto']"/>
    <Route type=private path='/dagverslag' component="DagOverzichtPagina" title='Dagverslagen' :requires="['ziet_dto']"/>
    <Route type=private path='/roosters/:id' component="RoostersPagina" title='Roosters'/>
    <Route type=private path='/roosters' component="RoostersPagina" title='Roosters'/>
    <Route type=ClubPublicRoute path='/status/:afdeling/:id' component="MateriaalStatusPagina" title='Materiaal status'/>
    <Route type=private path='/status' component="MateriaalOverzichtPagina" title='Materiaal status'  />
    <Route type=private path='/melding/:id' component="MeldingPagina" title='Materiaal melding'/>
    <Route type=private path='/melding' component="MateriaalOverzichtPagina" title='Overzicht meldingen'  />
    <Route type=private path='/findings/:id' component="FindingDetailPage" :requires="['wijzig_findings']"/>
    <Route type=private path='/findings' component="FindingsPage" :requires="['wijzig_findings']"/>
    <Route type=private path='/onderhoudsuren' component="OnderhoudsUrenPagina" :requires="['wijzig_winteruren', 'goedkeuren_uren']" title='Onderhoudsuren'/>
    <Route type=private path='/leden/:id' component="LedenLijstOverzichtPagina" title='Ledenlijst'  />
    <Route type=private path='/leden' component="LedenLijstOverzichtPagina" title='Ledenlijst'  />
    <Route type=private path='/dto/:id' component="LedenLijstOverzichtPagina" title='DTO leerlingvolglijst'  :requires="['ziet_dto']"/>
    <Route type=private path='/dto' component="LedenLijstOverzichtPagina" title='DTO leerlingvolglijst' :requires="['ziet_dto']"/>
    <Route type=private path='/email' component="EmailPage" title='Email' :requires="['ziet_emaillijst']"/>
    <Route type=private path='/mijn_starts' component="MyStartsPagina" :requires="['vliegt']" title='Mijn starts'/>
    <Route type=private path='/mijn_gegevens' component="MyDataPagina" :requires="['vliegt']" title='Mijn gegevens'/>
    <Route type=private path='/mijn_onderhoud' component="MijnOnderhoudPagina" :requires="['vliegt']" title='Mijn onderhoud'/>
    <Route type=ClubPublicRoute path='/igc' component="IGCDemo"/>
    <Route type=private path='/documenten' component="DocumentsPagina" title='Documenten'/>
    <Route type=private path='/d:uuid' component="DocumentShortcutPage" title='Documenten'/>
    <Route type=private path='/' exact component="DagOverzichtPagina" title='Aanmeldlijst'/>
    <Route path='/onderhoud' exact component="MaintenancePage" title='503'/>
    <Route path='/registratie' exact component="RegistratiePagina" title='Club registreren'/>
    <!-- <Route path='*' exact>
        <PageView>
            No match
        </PageView>
    </Route> -->
</template>