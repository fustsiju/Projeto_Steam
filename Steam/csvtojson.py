import csv
import json

input_csv_file = 'C:/Users/fulvi/Downloads/steamgames/games-features-edit.csv'
output_json_file = 'C:/Users/fulvi/Desktop/nonatin/teste.json'

def csv_to_json(input_csv, output_json):
    data = []

    # Lê o arquivo CSV
    with open(input_csv, 'r') as csv_file:
        csv_reader = csv.DictReader(csv_file)
        for row in csv_reader:
            data.append(row)

    with open(output_json, 'w') as json_file:
        json.dump(data, json_file, indent=4)

csv_to_json(input_csv_file, output_json_file)
