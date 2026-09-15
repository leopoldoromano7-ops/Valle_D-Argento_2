<?php
declare(strict_types=1);

$recipient = 'rsa.valledargento2@gmail.com';

function wants_json(): bool
{
    return isset($_SERVER['HTTP_ACCEPT']) && str_contains($_SERVER['HTTP_ACCEPT'], 'application/json');
}

function respond(int $status, string $message): void
{
    http_response_code($status);

    if (wants_json()) {
        header('Content-Type: application/json; charset=utf-8');
        echo json_encode(['message' => $message]);
        exit;
    }

    header('Content-Type: text/html; charset=utf-8');
    echo '<!doctype html><html lang="it"><head><meta charset="utf-8"><title>Contatti</title></head><body>';
    echo '<p>' . htmlspecialchars($message, ENT_QUOTES, 'UTF-8') . '</p>';
    echo '<p><a href="/contatti">Torna ai contatti</a></p>';
    echo '</body></html>';
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    respond(405, 'Metodo non consentito.');
}

if (!empty($_POST['website'] ?? '')) {
    respond(200, 'Messaggio inviato correttamente.');
}

$name = trim((string) ($_POST['nome'] ?? ''));
$email = trim((string) ($_POST['email'] ?? ''));
$subject = trim((string) ($_POST['oggetto'] ?? ''));
$message = trim((string) ($_POST['messaggio'] ?? ''));

$name = str_replace(["\r", "\n"], ' ', $name);
$email = str_replace(["\r", "\n"], '', $email);
$subject = str_replace(["\r", "\n"], ' ', $subject);

if ($name === '' || $email === '' || $subject === '') {
    respond(400, 'Compila nome, email e oggetto.');
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    respond(400, 'Inserisci un indirizzo email valido.');
}

$host = preg_replace('/[^a-z0-9.-]/i', '', $_SERVER['SERVER_NAME'] ?? 'valledargento2.it');
$from = 'no-reply@' . ($host ?: 'valledargento2.it');
$mailSubject = 'Nuovo messaggio dal sito: ' . $subject;
$mailBody = implode("\n", [
    'Nuovo messaggio dal sito Valle d\'Argento 2',
    '',
    'Nome: ' . $name,
    'Email: ' . $email,
    'Oggetto: ' . $subject,
    '',
    'Messaggio:',
    $message !== '' ? $message : '(nessun messaggio)',
]);

$headers = [
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'From: Valle d\'Argento 2 <' . $from . '>',
    'Reply-To: ' . $name . ' <' . $email . '>',
];

$sent = mail($recipient, $mailSubject, $mailBody, implode("\r\n", $headers));

if (!$sent) {
    respond(500, 'Non siamo riusciti a inviare il messaggio. Riprova piu tardi.');
}

respond(200, 'Messaggio inviato correttamente.');
