def parse_table(input_text):
    lines = input_text.strip().split('\n')
    # Skip the header row
    rows = [line.split('\t') for line in lines[1:]]
    
    embeddings = []
    for row in rows:
        if len(row) >= 3:
            print(row)
            title = row[0].strip()
            link = row[1].strip()
            text = row[2].strip().replace('"', '\\"')  # Escape double quotes
            color = row[3].strip()
            noembedding = ""
            if len(row) >= 5:
                noembedding = row[4].strip()

            embeddings.append({
                "title": title,
                "link": link,
                "text": text,
                "color": color,
                "embedding": False if noembedding == "noembedding" else True
            })

    return embeddings

def format_typescript(embeddings):
    ts_output = """export interface EmbeddingItem {
  link: string;
  text: string;
  color: string;
  title: string;
  embedding: boolean;
}

export const embeddingsList: EmbeddingItem[] = [
"""
    
    for embedding in embeddings:
        # Properly escape any quotes in text strings to prevent syntax errors
        text = embedding['text'].replace('"', '\"')
        title = embedding['title'].replace('"', '\"')
        link = embedding['link'].replace('"', '\"')
        
        ts_output += f"""  {{
    link: "{link}",
    text: "{text}",
    color: "{embedding['color']}",
    title: "{title}",
    embedding: {str(embedding['embedding']).lower()}
  }},
"""
    
    # Remove the trailing comma and close the array
    ts_output = ts_output.rstrip(",\n") + "\n];\n"
    
    return ts_output

def main():
    # Read input from the user
    print("Please paste the table data (or input filename):")
    try:
        with open('table_data.tsv', 'r', encoding='utf-8') as file:
            input_text = file.read()
    except:
        print("Reading from stdin. Enter/paste your table data and press Ctrl+D (Unix) or Ctrl+Z (Windows) when done:")
        input_text = ""
        while True:
            try:
                line = input()
                input_text += line + "\n"
            except EOFError:
                break
    
    embeddings = parse_table(input_text)
    ts_code = format_typescript(embeddings)
    
    # Write the output to a file
    with open('../src/data/embeddings.tsx', 'w', encoding='utf-8') as file:
        file.write(ts_code)
    
    print(f"Successfully generated embeddings.tsx with {len(embeddings)} items.")

if __name__ == "__main__":
    main()
