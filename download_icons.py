import urllib.request
import re

def to_camel_case(match):
    return match.group(1) + match.group(2).upper()

def jsxify_svg(svg_content):
    svg_content = re.sub(r'([a-z]+)-([a-z])', to_camel_case, svg_content)
    svg_content = svg_content.replace('view-box', 'viewBox')
    svg_content = svg_content.replace('xmlns:xlink', 'xmlnsXlink')
    return svg_content

def download_and_create_component(url, component_name, file_path):
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    with urllib.request.urlopen(req) as response:
        content = response.read().decode('utf-8')
    content = re.sub(r'<\?xml.*?\?>\s*', '', content).strip()
    
    # Extract viewBox
    viewBox_match = re.search(r'viewBox="([^"]+)"', content, re.IGNORECASE)
    viewBox = viewBox_match.group(1) if viewBox_match else "0 0 128 128"
    
    # Strip opening <svg ...> and closing </svg>
    content = re.sub(r'<svg.*?>', '', content, count=1)
    content = re.sub(r'</svg>', '', content)
    
    jsx = jsxify_svg(content)
    
    component_code = f"""import React from 'react';
import {{ IconBaseProps }} from 'react-icons';

export const {component_name} = (props: IconBaseProps) => {{
  const {{ size = "1em", className, style, ...rest }} = props;
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="{viewBox}" 
      width={{size}} 
      height={{size}} 
      className={{className}}
      style={{style}}
      {{...rest}}
    >
      {jsx}
    </svg>
  );
}};
"""
    with open(file_path, 'w') as f:
        f.write(component_code)

if __name__ == '__main__':
    download_and_create_component(
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg", 
        "CSharpIcon", 
        "src/components/icons/CSharpIcon.tsx"
    )
    download_and_create_component(
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/dotnetcore/dotnetcore-original.svg", 
        "DotNetIcon", 
        "src/components/icons/DotNetIcon.tsx"
    )
    print("Done regenerating proper components.")
