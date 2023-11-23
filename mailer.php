<?php

    // Načítá pole z formuláře - name, email a message; odstraňuje bílé znaky; odstraňuje HTML
    $firstName = strip_tags(trim($_POST["firstName"]));
    $firstName = str_replace(array("\r","\n"),array(" "," "),$firstName);
    $secondName = strip_tags(trim($_POST["secondName"]));
    $secondName = str_replace(array("\r","\n"),array(" "," "),$secondName);
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $message = trim($_POST["message"]);

    // Kontroluje data popř. přesměruje na chybovou adresu
    if (empty($firstName) OR empty($secondName) OR empty($message) OR !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        header("Location: http://www.paintart.sk/index.php?success=-1#form");
        exit;
    }

    // Nastavte si email, nakterý chcete, aby se vyplněný formulář odeslal - jakýkoli váš email
    $recipient = "inglody96@gmail.com";

    // Nastavte předmět odeslaného emailu
    $subject = "Máte nový kontakt od: $firstName, $secondName";

    // Obsah emailu, který se vám odešle
    $email_content = "Meno: $firstName\n";
    $email_content .= "Priezvisko: $secondName\n";
    $email_content .= "Email: $email\n\n";
    $email_content .= "Zpráva:\n$message\n";

    // Emailová hlavička
    $email_headers = "From: $secondName <$email>";

    // Odeslání emailu - dáme vše dohromady
    mail($recipient, $subject, $email_content, $email_headers);
    
    // Přesměrování na stránku, pokud vše proběhlo v pořádku
    header("Location:http://www.paintart.sk/index.php?success=1#form");

?>
