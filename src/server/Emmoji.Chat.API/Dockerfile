#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src
COPY ["Emmoji.Chat.API/Emmoji.Chat.API.csproj", "Emmoji.Chat.API/"]
RUN dotnet restore "Emmoji.Chat.API/Emmoji.Chat.API.csproj"
COPY . .
WORKDIR "/src/Emmoji.Chat.API"
RUN dotnet build "Emmoji.Chat.API.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "Emmoji.Chat.API.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "Emmoji.Chat.API.dll"]