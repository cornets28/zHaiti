import { FC, useState, useEffect } from "react";
import PageHeader from "../../components/PageHeader";
import PropTypes from "prop-types";
import typographyStyle from "../../utils/theme/base/typography";
import colors from "../../utils/theme/base/colors";
import Stack from "@mui/material/Stack/Stack";
import { TextField } from "../../components/TextField/TextField";
import AddArticlesModal from "../../components/Modal/AddArticlesModal";
import { Grid } from "../../components/Grid/Grid";
import FroalaEditor from "react-froala-wysiwyg";
import { AddItemType } from "../../types/AddItemType";
import "froala-editor/css/froala_editor.pkgd.min.css";
import "froala-editor/js/froala_editor.pkgd.min.js";
import "froala-editor/js/plugins/image.min.js";
import "froala-editor/js/plugins/char_counter.min.js";
import "froala-editor/js/plugins/save.min.js";
import "froala-editor/js/plugins.pkgd.min.js";

import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import useMediaQuery from "@mui/material/useMediaQuery";
import db from "../../utils/articles.json";
import { useTranslation } from "react-i18next";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};


const AddItem: FC<AddItemType> = ({ open, handleClose }) => {
  const { t } = useTranslation();
  const { grey } = colors;
  const { h3 } = typographyStyle;
  const matches = useMediaQuery("(min-width:600px)");
  const [temporaryWriter, setTemporaryWriter] = useState([]);
  const [personName, setPersonName] = useState<string[]>([]);
  const [content, setContent] = useState<string>(() => {
    return localStorage.getItem("saveHtml") || "";
  });

  useEffect(() => {
    // @ts-ignore
    setTemporaryWriter(db.articles.filter(article => article.user.occupation.includes("Ekriven")).map(article => `${article.user.first_name} ${article.user.last_name}`));
    const savedContent = localStorage.getItem("editorContent");
    if (savedContent) {
      setContent(savedContent);
    }
  }, [db.articles]);

  const editorConfig = {
    placeholderText: t("Komanse ekri tèks ou a la..."),
    charCounterCount: true,
    charCounterMax: 1000,
    saveInterval: 2000,
    documentReady: matches,

    events: {
      "charCounter.exceeded": function () {
        alert("Too long!");
      },
      "save.before": function (html: string) {
        localStorage.setItem("saveHtml", html);
      },
      "contentChanged": function () {
        // @ts-ignore
        handleModelChange(this.html.get());
      },
    },
  };

  const getStyles = (name: string, personName: readonly string[]) => {
    return {
      backgroundColor: personName.indexOf(name) === -1 ? grey[100] : grey[400],
    };
  };

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const handleModelChange = (newContent: any) => {
    setContent(newContent);
    localStorage.setItem("editorContent", newContent);
  };

  return (
    <AddArticlesModal open={open} handleClose={handleClose}>
      <Grid
        sx={{
          maxHeight: "80vh",
          overflowY: "scroll",
          pt: { xs: 2 },
          pb: 4,
        }}
      >
        <PageHeader fontSize={h3} textAlign={"center"} color={grey[700]}>
          {t("Ajoute Nouvo atik")}
        </PageHeader>
        <Stack spacing={3} mt={3}>
          <TextField
            type="text"
            placeholder={`${t("Ekri tit atik la")}`}
            name="title"
            fullWidth
            size="small"
            // value={signinForm.values.username}
            // onChange={signinForm.handleChange}
            // error={signinForm.touched.username && signinForm.errors.username !== undefined}
            // helperText={signinForm.touched.username && signinForm.errors.username}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: grey[500],
                },
                "&:hover fieldset": {
                  borderColor: grey[600],
                },
                input: { color: grey[900] },
              },
            }}
          />

          <TextField
            type="text"
            placeholder={`${t("Ekri soutit atik la")}`}
            name="subtitle"
            fullWidth
            size="small"
            // value={signinForm.values.username}
            // onChange={signinForm.handleChange}
            // error={signinForm.touched.username && signinForm.errors.username !== undefined}
            // helperText={signinForm.touched.username && signinForm.errors.username}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: grey[500],
                },
                "&:hover fieldset": {
                  borderColor: grey[600],
                },
                input: { color: grey[900] },
              },
            }}
          />

          <Grid container>
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              lg={6}
              sx={{ pr: { xs: "auto", sm: "auto", md: 1, lg: 1 } }}
            >
              <TextField
                type="file"
                name="title"
                fullWidth
                size="small"
                // value={signinForm.values.username}
                // onChange={signinForm.handleChange}
                // error={signinForm.touched.username && signinForm.errors.username !== undefined}
                // helperText={signinForm.touched.username && signinForm.errors.username}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: grey[500],
                    },
                    "&:hover fieldset": {
                      borderColor: grey[600],
                    },
                    input: { color: grey[900] },
                  },
                }}
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              lg={6}
              sx={{
                pl: { xs: "auto", sm: "auto", md: 1, lg: 1 },
                mt: { xs: 2.8, sm: 2.5, md: "auto", lg: "auto" },
              }}
            >
              <FormControl sx={{ width: "100%" }}>
                <Select
                  multiple
                  displayEmpty
                  value={personName}
                  onChange={handleChange}
                  input={<OutlinedInput />}
                  renderValue={(selected) => {
                    if (selected.length === 0) {
                      return <p style={{color: grey[500]}}>{t("Chwazi otè")}</p>;
                    }

                    return selected.join(", ");
                  }}
                  MenuProps={MenuProps}
                  inputProps={{ "aria-label": "Without label" }}
                  style={{ height: 40}}
                >
                  {temporaryWriter.map((name) => (
                    <MenuItem
                      key={name}
                      value={name}
                      //@ts-ignore
                      style={getStyles(name, personName)}
                    >
                      {name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <FroalaEditor tag="textarea" config={editorConfig} model={content} />
        </Stack>
      </Grid>
    </AddArticlesModal>
  );
};

AddItem.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default AddItem;
