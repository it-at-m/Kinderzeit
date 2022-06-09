from pprint import pprint
import re
from transformers import M2M100ForConditionalGeneration, M2M100Tokenizer

# pip install --upgrade pip

import time

model = M2M100ForConditionalGeneration.from_pretrained("facebook/m2m100_1.2B")
tokenizer = M2M100Tokenizer.from_pretrained("facebook/m2m100_1.2B")
tokenizer.src_lang = "de"

input_text = """
Matschhose und Gummistiefel an, denn es kann dreckig werden bei unserem Bauernhofcamp. Eine Woche lang können die Kleinsten auf dem Erlebnisbauernhof Mohrenhof (betrieben durch die Familie Mohr) in der Nähe von Rothenburg o.d.T. Landluft schnuppern. Hier gibt es viel zu entdecken: Kaninchen, Hühner, Katzen, Ochsen und Alpakas. Die Bauernhofkinder dürfen selbstverständlich auch mit anpacken, denn auf dem Hof gibt es immer viel zu tun. Kaninchen streicheln? Alpakas füttern? Oder im Ochsenstall beim Ausmisten helfen? Na klar! Gemeinsam mit den Betreuer*innen erleben die Kinder den Alltag auf dem Hof mit, basteln, malen und spielen und erleben das ein oder andere kleine Abenteuer. Highlights der Woche sind eine aufregende Traktorfahrt, Lagerfeuer mit Stockbrot, die Stallzeit und natürlich die Zeit mit all den großen und kleinen Tieren. Und wer zum Frühstück ein Ei möchte, kann sich das direkt aus dem Stall holen!

Hinweis: An Pfingsten findet zeitgleich ein Ausbildungskurs für unsere Betreuer*innen statt. Die beiden Gruppen haben jeweils eigene Teams und finden überwiegend getrennt voneinander statt. Die zukünftigen Teamer*innen werden allerdings in einzelne Programmpunkte bei der Freizeit mit eingebunden.

Übernachtet wird auf dem Zeltplatz des Erlebnisbauernhofs Mohrenhof der Familie Mohr in der Nähe von Rothenburg o.d.T. Der Platz liegt idyllisch direkt an einem Badeweiher und bietet jede Menge Abwechslung. Neben einem großen Spielplatz und einer Spielscheune gibt es auch ein Volleyballfeld und einen kleinen Strand. Außerdem ist der Platz mit einem Waschhaus ausgestattet und liegt nur ein paar Meter vom Hof entfernt. Übernachtet wird in großen Gruppenzelten.

Wir bieten insgesamt drei Mahlzeiten am Tag an, Frühstück, Mittagessen und Abendessen. Eine der Mahlzeiten ist immer warm, welche dies ist, hängt von der Örtlichkeit, dem Programm und den Wünschen der Gruppe ab. Tee, Leitungswasser, Obst und kleine Snacks stehen jederzeit zur Verfügung.

Gekocht wird gemeinsam – so ist das bei FFA üblich. Zusammen mit den Teamer*innen dürfen die Kinder schnippeln, brutzeln, rühren und braten. Denn auch das gehört zu unserem Konzept der Verantwortungsübernahme! Was gekocht wird, entscheidet die Gruppe in einer Abstimmung am Anfang der Woche.

Die Freizeit wird geleitet durch zwei Freizeitleitungen, die mindestens 18 Jahre alt sind. Unsere Teamer*innen sind ehrenamtlich bei uns tätig und daher in der Regel keine pädagogischen Fachkräfte. Wichtig ist uns aber natürlich, dass sie gewisse Qualifikationen und Wissen mitbringen, daher müssen alle Betreuer*innen an einem Ausbildungskurs von FFA teilnehmen oder bereits Erfahrungen in anderen vergleichbaren Organisationen gesammelt haben. Da wir von den Pfadfindern abstammen und uns auch heute noch nach dem Konzept „Jugend führt Jugend“ orientieren, ist der Großteil unserer Freizeitleitungen junge Erwachsene. Je nach Gruppengröße fahren außerdem bis zu 5 Junior-Teamer*innen mit, die mindestens 15 Jahre sein müssen.

Leistungen im Überblick:
- Übernachtung in Gruppenzelten
- Vollverpflegung
- Betreuung durch qualifizierte Jugendleiter*innen
- Bastel-, Mal- und Spielmaterialien
- Abwechslungsreiches Programm
- Aktivitäten auf dem Bauernhof (Eier sammeln, Tierbesichtigungen, Stallzeit, Traktorfahrt: Fremdleistungen des Erlebnisbauernhofs Mohrenhof)

Anreise: Selbstanreise oder Teilnahme an betreuter Gemeinschaftsfahrt (Hin- und Rückfahrt): ab/bis München: je Fahrt 22 €

Hinweis: Hin- und Rückfahrt können einzeln gebucht werden und werden einzeln berechnet. Ein nachträgliches, kostenfreies Umbuchen der betreuten Gemeinschaftsfahrt ist bis zwei Wochen vor Beginn der Freizeit möglich. 
"""

tic = time.perf_counter()

input_text = re.sub(r'[\n\r]', '.', input_text)
input_text = re.split(r'[\.\!\?]', input_text)
input_text = [x.strip() for x in input_text if len(x.strip()) != 0]


phrases_count = len(input_text)
idx = 0
while idx < phrases_count:
    if len(input_text[idx]) == 1:
        input_text[idx-1] += input_text[idx]
        del input_text[idx]
        phrases_count -= 1
    else:
        idx += 1

translations = []

for phrase in input_text:
    encoded_hi = tokenizer(phrase, return_tensors="pt")
    generated_tokens = model.generate(**encoded_hi, forced_bos_token_id=tokenizer.get_lang_id("en"))
    translations.append(
        tokenizer.batch_decode(generated_tokens, skip_special_tokens=True)
    )

pprint(translations)

toc = time.perf_counter()

print(f"Downloaded the tutorial in {toc - tic:0.4f} seconds")
