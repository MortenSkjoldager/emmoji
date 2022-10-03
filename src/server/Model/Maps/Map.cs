namespace Model.Maps;

public class Map
{
    public int Height { get; set; }
    
    public int Width { get; set; }
    
    public IList<Layer> Layers { get; set; }
}

public class Layer
{
    public string Id { get; set; }
    public string Name { get; set; }
    public string[] Data { get; set; }
    public int Height { get; set; }
    public int Width { get; set; }
    public int X { get; set; }
    public int Y { get; set; }
    public bool Visible { get; set; }
    public string Type { get; set; }
    public string Opacity { get; set; }
}