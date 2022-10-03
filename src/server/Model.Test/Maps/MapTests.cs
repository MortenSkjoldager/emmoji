using Model.Maps;
using Newtonsoft.Json;
using NUnit.Framework;

namespace Model.Test.Maps;

[TestFixture]
public class MapTests
{
    [Test]
    public void MapTest()
    {
        var mapJson = File.ReadAllText(@"C:\Projects\private\emmoji\src\client\src\scenes\tilemaps\zone3.tmj");

        var map = JsonConvert.DeserializeObject<Map>(mapJson);
    }
}