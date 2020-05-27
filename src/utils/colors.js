export const navy = {
    'default': "#24195a",
    100: "#BDB1CE",
    200: "#A79BBD",
    300: "#9286AD",
    400: "#7C709C",
    500: "#665A8C",
    600: "#50447B",
    700: "#3A2F6B",
    800: "#1E1453",
    900: "#110A46"
  };

  export const royal = {
    'default': "#3a55a4",
    100: "#DBE9F6",
    200: "#C9D8ED",
    300: "#A5B7DB",
    400: "#8297C8",
    500: "#5E76B6",
    600: "#2E4490",
    700: "#23337D",
    800: "#172269",
    900: "#0C1156"
  };

  export const aqua = {
    'default': "#3fc6f3",
    100: "#91F9FE",
    200: "#88F4FD",
    300: "#76E8FA",
    400: "#63DDF8",
    500: "#51D1F5",
    600: "#50447B",
    700: "#267EA5",
    800: "#195A7F",
    900: "#0D3658"
  };

  export const pink = {
    'default': "#cf4e9c",
    100: "#FAC6F5",
    200: "#F5B8EB",
    300: "#EC9ED7",
    400: "#E283C4",
    500: "#D969B0",
    600: "#B23E83",
    700: "#942F6A",
    800: "#771F50",
    900: "#591037"
  };

  export const yellow = {
    'default': "#fde006",
    100: "#FFFC38",
    200: "#FEF62D",
    300: "#FEEC1C",
    400: "#FDE611",
    500: "#E8CA05",
    600: "#BE9D04",
    700: "#957003",
    800: "#805A02",
    900: "#6B4302"
  };

  export const neutral = {
    100: "#ffffff",
    200: "#f5f6f8",
    300: "#dfe3e8",
    400: "#b6b9bd",
    500: "#6d737b",
    600: "#212b36"
  };

  export const success = {
    100: "#3eba81",
    200: "#26a96c",
    300: "#276738"
  };
  
  export const error = {
    100: "#fc5130",
    200: "#d94126",
    300: "#b6311d"
  };
  
  export const getShade = (shades, shade) => {
    const selectedShade = shade || 'default';
    return shades[selectedShade];
  }