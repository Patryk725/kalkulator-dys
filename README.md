# Kalkulator dystansu, czasu i odgległości

## Przykład programu

>Prędkość = droga / czas <br>Droga = prędkość * czas <br>Czas = droga / prędkość

## Zasada działania
1. Wstaw w dwa wybrane pola wartości (w jednostkach: h,km/h,km)
2. Jedno pole pozostaw puste
    * Jeśli wstawisz coś we wszystkie pola, to wyskoczy błąd
        * W przyszłych wersjach jak wpiszesz wszystkie wartości, to wyskoczy alert, czy masz rację

3. W wyniku wyskoczy:

    * Jeśli nie wpisałeś czasu, to ile ci zajmie droga przy określonej prędkości

    * Jeśli nie wpisałeś prędkości, to jak szybko się musisz poruszać, aby przebyć drogę w określonym czasie

    * Jeśli nie wpisałeś drogi, to ile przejdziesz km w podanym czasie i wpisanej prędkości

### Notatka:
    Aby wynik nie był zbyt duży, użyłem funkcji,  / która zmniejsza zera po przecinku nie zaokrąglając przy tym liczb.
