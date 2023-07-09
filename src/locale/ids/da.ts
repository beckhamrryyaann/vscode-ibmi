import { Locale } from "..";

export const da: Locale = {
  'Yes': `Ja`,
  'No': `Nej`,
  'Cancel': `Afbryd`,
  'directory': `mappe`,
  'shortcut': `genvej`,
  'streamfile': `fil`,
  'error': `fejl`,
  'errors': `fejl`,
  'Size': `Størrelse`,
  'Modified': `Ændret`,
  'Owner': `Ejer`,
  'clearList': `$(trash) Nulstil liste`,
  'clearedList': `Nulstillede liste.`,
  'currentLibrary': `(aktuelle bibliotek)`,
  'sandbox.input.user.title': `Bruger for server`,
  'sandbox.input.user.prompt': `Indtast brugernavn for {0}`,
  'sandbox.input.password.title': `Kodeord for server`,
  'sandbox.input.password.prompt': `Indtast kodeord for {0}@{1}`,
  'sandbox.failedToConnect.text': 'Fejl ved forbindelse til {0} som {1}',
  'sandbox.failedToConnect.title': `Fejl ved forbindelse`,
  'sandbox.noPassword': `Forbindelse til {0} afsluttet da intet kodeord blev angivet.`,
  'sandbox.alreadyConnected': `Denne Visual Studio Code instans er allerede forbundet til en server.`,
  'sandbox.connected.modal.title': `Tak for at afprøve Code for IBM i Sandbox!`,
  'sandbox.connected.modal.detail': `Du bruger dette system på egen risiko. Del ingen følsomme eller private informationer.`,
  'sandbox.noconnection.modal.title': `Åh nej! "Sandkassen" er ikke tilgængelig.`,
  'sandbox.noconnection.modal.detail': `Desværre, men "Sandkassen" er ikke tilgængelig lige nu. Prøv igen lidt senere.`,
  // ConnectionBrowser:
  'connectionBrowser.connectTo.lastConnection': `Seneste forbindelse`,
  'connectionBrowser.connectTo.lastUsed': `Senest brugt: {0}`,
  'connectionBrowser.connectTo.title': `Seneste IBM i forbindelser`,
  'connectionBrowser.connectTo.error': `Brug Servere vinduet til at vælge hvilket system, der skal forbindes til.`,
  'connectionBrowser.deleteConnection.warning': `Er du sikker på at du vil slette forbindelsen {0}?`,
  'connectionBrowser.ServerItem.tooltip': ` (forrige forbindelse)`,
  'connectionBrowser.ServerItem.title': `Forbind`,
  // helpView:
  'helpView.getStarted': `Dokumentation`,
  'helpView.officialForum': `Forum`,
  'helpView.reviewIssues': `Se fejlrapporter`,
  'helpView.reportIssue': `Opret en fejlrapport`,
  // ifsBrowser:
  'ifsBrowser.changeWorkingDirectory.prompt': `Skifter aktuelle mappe`,
  'ifsBrowser.changeWorkingDirectory.message': `Aktuelle mappe er skiftet til {0}.`,
  'ifsBrowser.addIFSShortcut.prompt': `Sti til IFS mappe`,
  'ifsBrowser.addIFSShortcut.error': `{0} er ikke en mappe.`,
  'ifsBrowser.addIFSShortcut.errorMessage': `Fejl ved oprettelse af IFS genvej! {0}`,
  'ifsBrowser.createDirectory.prompt': `Sti til ny mappe`,
  'ifsBrowser.createDirectory.errorMessage': `Fejl ved oprettelse af ny mappe! {0}`,
  'ifsBrowser.createStreamfile.prompt': `Navn på ny streamfile`,
  'ifsBrowser.createStreamfile.infoMessage': `Opretter streamfile {0}.`,
  'ifsBrowser.createStreamfile.errorMessage': `Fejl ved oprettelse af ny streamfile! {0}`,
  'ifsBrowser.uploadStreamfile.uploadedFiles': `Filer blev sendt.`,
  'ifsBrowser.uploadStreamfile.errorMessage': `Fejl ved afsendelse af filer! {0}`,
  'ifsBrowser.uploadStreamfile.noFilesSelected': `Ingen filer blev valgt.`,
  'ifsBrowser.deleteIFS.rootNotAllowed': `Ikke tilladt at slette root (/) fra IFS Browser.`,
  'ifsBrowser.deleteIFS.warningMessage': `Er du sikker på at du vil slette {0}?`,
  'ifsBrowser.deleteIFS.deletionPrompt': `Når du har slettet mappen, kan den ikke retableres.\nVenligst tast \"{0}\" for at bekræfte sletning.`,
  'ifsBrowser.deleteIFS.deletionPrompt2': ` (Press \'Escape\' to cancel)`,
  'ifsBrowser.deleteIFS.infoMessage': `Slettede {0}.`,
  'ifsBrowser.deleteIFS.errorMessage': `Fejl ved sletning af streamfile! {0}`,
  'ifsBrowser.deleteIFS.cancelled': `Sletning afbrudt.`,
  'ifsBrowser.moveIFS.prompt': `Nyt navn`,
  'ifsBrowser.moveIFS.errorMessage': `Fejl ved flytning/omdøbning af {0}! {1}`,
  'ifsBrowser.copyIFS.prompt': `Nyt navn`,
  'ifsBrowser.copyIFS.infoMessage': `{0} blev kopieret til {1}.`,
  'ifsBrowser.copyIFS.errorMessage': `Fejl ved kopiering af {0}! {1}`,
  'ifsBrowser.searchIFS.prompt': `Indtast IFS mappe for søgning`,
  'ifsBrowser.searchIFS.title': `Søg mappe`,
  'ifsBrowser.searchIFS.prompt2': `Søg {0}.`,
  'ifsBrowser.searchIFS.title2': `Søger`,
  'ifsBrowser.searchIFS.progressMessage': `'{0}' i {1}.`,
  'ifsBrowser.searchIFS.noResults': `Ingen resultater blev fundet ved søgning efter '{0}' i {1}.`,
  'ifsBrowser.searchIFS.errorMessage': `Fejl ved søgning i filer.`,
  'ifsBrowser.searchIFS.noGrep': `'grep' skal være installeret på systemet for IFS søgning.`,
  'ifsBrowser.downloadStreamfile.infoMessage': `Fil blev hentet.`,
  'ifsBrowser.downloadStreamfile.errorMessage': `Fejl ved hentning af {0}! {1}`,
  'ifsBrowser.getChildren.errorMessage': `Fejl ved læsning af objekter.`,
  'ifsBrowser.handleFileListErrors.errorMessage': `{0} {1} opstod ved visning af filer.`,
  // LibraryListView:
  'LibraryListView.changeCurrentLibrary.currentlyActive': `Nuværende`,
  'LibraryListView.changeCurrentLibrary.recentlyUsed': `Tidligere`,
  'LibraryListView.changeCurrentLibrary.placeholder': `Filter eller nyt bibliotek til at sætte som aktuelle`,
  'LibraryListView.changeCurrentLibrary.title': `Skift aktuelle bibliotek`,
  'LibraryListView.changeCurrentLibrary.infoMessage': `Skiftede aktuelle bibliotek til {0}.`,
  'LibraryListView.changeCurrentLibrary.warningMessage': `{0} er allerede det aktuelle bibliotek.`,
  'LibraryListView.changeUserLibraryList.prompt': `Skift biblioteksliste (du kan bruge '*reset')`,
  'LibraryListView.changeUserLibraryList.removedLibs': `De følgende biblioteker blev fjernet fra den opdaterede biblioteksliste, da de ikke er gyldige: {0}`,
  'LibraryListView.addToLibraryList.prompt': `Tilføj bibliotek`,
  'LibraryListView.addToLibraryList.removedLibs': `De følgende biblioteker blev fjernet fra den opdaterede biblioteksliste, da de ikke er gyldige: {0}`,
  'LibraryListView.addToLibraryList.tooLong': `Bibioteksnavn er for langt.`,
  'LibraryListView.cleanupLibraryList.removedLibs': `De følgende biblioteker blev fjernet fra den opdaterede biblioteksliste, da de ikke er gyldige: {0}`,
  'LibraryListView.cleanupLibraryList.validated': `Bibliotekslisten blev valideret uden fejl.`,
};